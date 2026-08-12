export const SHOPIFY_API_VERSION = '2025-07'
export const SHOPIFY_STORE_PERMANENT_DOMAIN = 'szbxaf-pw.myshopify.com'
export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`
export const SHOPIFY_STOREFRONT_TOKEN = '890009c0805d20641459b3af2414eaf3'

export interface ShopifyImage {
  url: string
  altText: string | null
}

export interface ShopifyOption {
  name: string
  values: string[]
}

export interface ShopifyVariant {
  id: string
  title: string
  price: { amount: string; currencyCode: string }
  availableForSale: boolean
  selectedOptions: Array<{ name: string; value: string }>
}

export interface ShopifyProduct {
  id: string
  title: string
  description: string
  handle: string
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  images: { edges: Array<{ node: ShopifyImage }> }
  variants: { edges: Array<{ node: ShopifyVariant }> }
  options: ShopifyOption[]
}

export interface ShopifyProductsResponse {
  products: { edges: Array<{ node: ShopifyProduct }> }
}

export async function storefrontApiRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`Shopify request failed (${response.status})`)
  }

  const payload = await response.json() as { data?: T; errors?: Array<{ message: string }> }
  if (payload.errors?.length) {
    throw new Error(payload.errors.map(error => error.message).join(', '))
  }

  if (!payload.data) {
    throw new Error('Shopify returned no data')
  }

  return payload.data
}

export const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange { minVariantPrice { amount currencyCode } }
          images(first: 5) { edges { node { url altText } } }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price { amount currencyCode }
                availableForSale
                selectedOptions { name value }
              }
            }
          }
          options { name values }
        }
      }
    }
  }
`

export const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      handle
      priceRange { minVariantPrice { amount currencyCode } }
      images(first: 10) { edges { node { url altText } } }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price { amount currencyCode }
            availableForSale
            selectedOptions { name value }
          }
        }
      }
      options { name values }
    }
  }
`

export interface ProductByHandleResponse {
  product: ShopifyProduct | null
}

export const CART_QUERY = `
  query GetCart($id: ID!) {
    cart(id: $id) { id totalQuantity }
  }
`

export const CART_CREATE_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }
      }
      userErrors { field message }
    }
  }
`

export const CART_LINES_ADD_MUTATION = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } } }
      userErrors { field message }
    }
  }
`

export const CART_LINES_UPDATE_MUTATION = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { id } userErrors { field message } }
  }
`

export const CART_LINES_REMOVE_MUTATION = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { id } userErrors { field message } }
  }
`

export function withOnlineStoreChannel(checkoutUrl: string) {
  try {
    const url = new URL(checkoutUrl)
    url.searchParams.set('channel', 'online_store')
    return url.toString()
  } catch {
    return checkoutUrl
  }
}

export function cartNotFound(userErrors: Array<{ message: string }>) {
  return userErrors.some(error => /cart not found|does not exist/i.test(error.message))
}
