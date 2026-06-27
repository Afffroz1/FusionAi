
export interface SearchIntent {
  seasons: string[];
  occasions: string[];
  categories: string[];
  notes: string[];
  inspirations: string[];
  personality: string[];
  budget?: number;

  wantsLongevity: boolean;
  wantsProjection: boolean;
  wantsFeatured: boolean;
}

export function extractIntent(query: string): SearchIntent {
  const lower = query.toLowerCase();

  const budgetMatch = lower.match(/\d+/);

  return {
    seasons: [],
    occasions: [],
    categories: [],
    notes: [],
    inspirations: [],
    personality: [],

    budget: budgetMatch
      ? Number(budgetMatch[0])
      : undefined,

    wantsLongevity:
      lower.includes("long lasting") ||
      lower.includes("longevity") ||
      lower.includes("last all day") ||
      lower.includes("beast mode"),

    wantsProjection:
      lower.includes("projection") ||
      lower.includes("strong") ||
      lower.includes("loud"),

    wantsFeatured:
      lower.includes("best") ||
      lower.includes("top") ||
      lower.includes("featured"),
  };
}