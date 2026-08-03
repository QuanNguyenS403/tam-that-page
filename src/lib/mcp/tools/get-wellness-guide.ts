import { defineTool } from "@lovable.dev/mcp-js";

const guide = {
  title: "Daily Tam Thất Wellness Routine",
  steps: [
    "Add one serving (see pack) of Tam Thất Quân Nguyễn powder to a cup.",
    "Pour 150–200 ml of warm (not boiling) water over the powder.",
    "Optionally stir in a small teaspoon of honey to taste.",
    "Stir gently until fully dissolved, then drink as part of your morning routine.",
  ],
  frequency: "Once per day, ideally in the morning.",
  notes: "Traditional herbal wellness product. Consult a healthcare provider if pregnant, nursing, medicated, or managing a health condition.",
};

export default defineTool({
  name: "get_wellness_guide",
  title: "Get wellness routine",
  description: "Return the daily preparation and wellness routine for Tam Thất Quân Nguyễn powder.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(guide, null, 2) }],
    structuredContent: guide,
  }),
});
