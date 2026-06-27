import { UserIntent } from "./types";

export function extractIntent(query: string): UserIntent {
  const text = query.trim().toLowerCase();

  return {
    originalQuery: query,

    confidence: 0,

    context: {
      occasions: [],
    },

    preferences: {
      fragranceFamilies: [],
      accords: [],
      notes: [],
      moods: [],
      inspirations: [],
    },

    constraints: {
      exclusions: [],
    },

    inferred: {},

    metadata: {
      extracted: {
        occasion: false,
        season: false,
        climate: false,
        budget: false,
        notes: false,
        personality: false,
        inspirations: false,
      },
    },
  };
}