import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const product = {
  name: "Tam Thất Quân Nguyễn — Premium Panax Notoginseng Powder",
  description:
    "Finely milled Panax notoginseng (Tam Thất) powder in gift-ready packaging. Traditional herbal wellness, designed for effortless daily use.",
  variants: [
    { id: "std", label: "Standard Pack", description: "1 Pack", priceUsd: 29.99, note: "" },
    { id: "val", label: "Value Pack", description: "3 Packs", priceUsd: 79.99, note: "Save 10%" },
    { id: "fam", label: "Family Pack", description: "5 Packs", priceUsd: 124.99, note: "Best Value" },
  ],
  badges: ["Traditional Herbal", "Fine Powder", "Gift-Ready", "Daily Wellness"],
  included: "Every order includes a complimentary jar of ginger foot-soak salt.",
  freeShippingThresholdUsd: 75,
  guarantee: "Damaged or incorrect orders replaced within 7 days. Unopened returns accepted within 30 days.",
};

export default defineTool({
  name: "get_product_info",
  title: "Get product info",
  description: "Return the product name, description, variants, pricing, badges, and included add-ons for Tam Thất Quân Nguyễn.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
    structuredContent: product,
  }),
});
