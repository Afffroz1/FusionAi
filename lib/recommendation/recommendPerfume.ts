
import { extractIntent } from "./extractIntent";
import { scoreFragrance } from "./scoring";
import { fragrance, type Fragrance } from "@/data/fragrance";
import { expandQuery } from "./expandQuery";
export function recommendPerfume(query: string): string {

const expandedQuery = expandQuery(query);
const intent = extractIntent(query);
void intent;

  let bestMatch: Fragrance | undefined;
  let highestScore = -1;

  fragrance.forEach((item) => {
    const score = scoreFragrance(item, expandedQuery, intent);
  
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  });

  if (!bestMatch) {
    return "Tell me more about the fragrance profile you're looking for.";
  }

  return `
${bestMatch.name}

${bestMatch.recommendation}

Best For:
• ${bestMatch.bestFor.join("\n• ")}

Performance:
• Longevity: ${bestMatch.longevity}/10
• Projection: ${bestMatch.projection}/10

Price:
₹${bestMatch.price}
`;
}