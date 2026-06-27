
// console.log("scoreFrageance loaded");
import type { Fragrance } from "@/data/fragrance";
import type { SearchIntent } from "./extractIntent";

export function scoreFragrance(
  item: Fragrance,
  expandQuery: string[],
  intent: SearchIntent
): number{
  let score = 0;

  // Category
  item.category.forEach((value) => {
    if (expandQuery.includes(value.toLowerCase())) {
      score += 2;
    }
  });

  // Season
  item.season.forEach((value) => {
    if (expandQuery.includes(value.toLowerCase())) {
      score += 3;
    }
  });

  // Occasion
  item.occasion.forEach((value) => {
    if (expandQuery.includes(value.toLowerCase())) {
      score += 5;
    }
  });

  // Notes
  item.notes.forEach((value) => {
    if (expandQuery.includes(value.toLowerCase())) {
      score += 1;
    }
  });

  // Inspiration
  item.inspiration?.forEach((value) => {
    if (expandQuery.includes(value.toLowerCase())) {
      score += 10;
    }
  });

  // Best For
  item.bestFor.forEach((value) => {
    if (expandQuery.includes(value.toLowerCase())) {
      score += 4;
    }
  });

  // Personality
  if (
    item.personality
      .toLowerCase()
      .split(" ")
      .some((word) => expandQuery.includes(word))
  ) {
    score += 2;
  }

  // Featured boost
  if (item.featured) {
    score += 1;
  }
// Intent based boosts

if (intent.wantsLongevity) {
  score += item.longevity;
}

if (intent.wantsProjection) {
  score += item.projection;
}

if (intent.wantsFeatured && item.featured) {
  score += 5;
}
  return score;
}