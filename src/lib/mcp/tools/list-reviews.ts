import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const reviews = [
  { title: "The most thoughtful gift I have given this year.", body: "I bought the Family Pack for my parents during Lunar New Year. The packaging alone made such a strong impression. My mother keeps the box on her shelf. I will be ordering again.", name: "Cristiano Ronaldo", rating: 5 },
  { title: "Finally a Tam Thất product I can trust.", body: "I have tried several products online but always worried about the quality. This one feels completely different from the moment you open it. Clean, professional, and the powder texture is excellent.", name: "Elon Musk", rating: 5 },
  { title: "My clients were genuinely impressed.", body: "I sent these as end-of-year appreciation gifts to three of my business partners. All three reached out specifically to thank me. Highly recommend for corporate gifting.", name: "Business owner", rating: 5 },
  { title: "Simple daily routine, easy to stick to.", body: "I mix it into warm water every morning. Takes thirty seconds. I have kept this habit for two months without skipping.", name: "Vu Phuong Linh", rating: 5 },
  { title: "Worth every dollar for a parent gift.", body: "My father is very particular about herbal products. He said this was one of the cleanest-tasting Tam Thất powders he had tried.", name: "Nguyen Duc Quan", rating: 5 },
];

export default defineTool({
  name: "list_reviews",
  title: "List customer reviews",
  description: "Return customer reviews and ratings for Tam Thất Quân Nguyễn.",
  inputSchema: {
    limit: z.number().int().min(1).max(50).optional().describe("Optional maximum number of reviews to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit }) => {
    const out = typeof limit === "number" ? reviews.slice(0, limit) : reviews;
    return {
      content: [{ type: "text", text: JSON.stringify(out, null, 2) }],
      structuredContent: { reviews: out, averageRating: 5 },
    };
  },
});
