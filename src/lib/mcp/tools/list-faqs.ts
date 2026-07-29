import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const faqs = [
  { q: "What exactly is Panax notoginseng (Tam Thất)?", a: "Panax notoginseng, known in Vietnamese as Tam Thất, is a traditional herbal root used in Vietnamese and East Asian herbal wellness traditions. Tam Thất Quân Nguyễn uses it in a finely milled powder form. It is a traditional herbal wellness product and not a medicine." },
  { q: "How do I prepare a serving?", a: "Add one serving of powder to a cup of warm water, stir gently until dissolved, and drink as part of your morning or daily routine. Full instructions are inside every pack." },
  { q: "How is Tam Thất Quân Nguyễn different from other Tam Thất products online?", a: "We prioritize careful ingredient selection, a fine powder texture, moisture-resistant packaging, and gift-ready presentation rather than competing on price like generic marketplace sellers." },
  { q: "Is this product safe for daily use?", a: "It is intended for daily use by healthy adults as part of a balanced lifestyle. Pregnant, nursing, medicated, or medically managed users should consult their healthcare provider first." },
  { q: "Can I give this as a gift?", a: "Yes — gifting is a primary use case. Suitable for Lunar New Year, Mid-Autumn Festival, birthdays, retirement, and business appreciation. An optional gift card and ribbon upgrade is available at checkout." },
  { q: "Which pack should I choose?", a: "Standard Pack ($29.99): first-time buyers or a single gift. Value Pack ($79.99, 3 packs): regular use or multiple recipients. Family Pack ($124.99, 5 packs): family routines or corporate gifting." },
  { q: "How long does one pack last?", a: "About 30 days at one serving per day. Exact serving count is printed on the packaging." },
  { q: "What is your return and satisfaction policy?", a: "Damaged or incorrect orders: contact us within 7 days. Unopened returns accepted within 30 days. Opened consumables are generally non-returnable unless there is a quality issue." },
  { q: "How long does shipping take?", a: "Orders dispatch in 1–2 business days; delivery in 3–5 business days after dispatch. Orders over $75 ship free. Tracking is emailed on dispatch." },
  { q: "Where can I follow Tam Thất Quân Nguyễn?", a: "Facebook, TikTok, YouTube, and Instagram — links in the footer of every page." },
];

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "Return the frequently asked questions and answers shown on the Tam Thất Quân Nguyễn landing page.",
  inputSchema: {
    search: z.string().optional().describe("Optional case-insensitive substring to filter FAQs by question or answer."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }) => {
    const q = search?.trim().toLowerCase();
    const filtered = q ? faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)) : faqs;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { faqs: filtered },
    };
  },
});
