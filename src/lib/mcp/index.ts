import { defineMcp } from "@lovable.dev/mcp-js";
import getProductInfo from "./tools/get-product-info";
import listFaqs from "./tools/list-faqs";
import listReviews from "./tools/list-reviews";
import getWellnessGuide from "./tools/get-wellness-guide";

export default defineMcp({
  name: "tam-that-quan-nguyen-mcp",
  title: "Tam Thất Quân Nguyễn MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Tam Thất Quân Nguyễn landing page. Use `get_product_info` for product/pricing, `list_faqs` for FAQs, `list_reviews` for customer reviews, and `get_wellness_guide` for the daily preparation routine. All data is publicly available on the marketing site.",
  tools: [getProductInfo, listFaqs, listReviews, getWellnessGuide],
});
