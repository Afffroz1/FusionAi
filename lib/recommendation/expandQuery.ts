


import { keywordMap } from "./keywordMap";

export function expandQuery(query: string): string[] {
  const words = query.toLowerCase().split(/\s+/);

  const expanded = new Set<string>(words);

  words.forEach((word) => {
    Object.entries(keywordMap).forEach(([intent, synonyms]) => {
      if (synonyms.includes(word)) {
        expanded.add(intent);

        synonyms.forEach((synonym) => {
          expanded.add(synonym);
        });
      }
    });
  });

  return [...expanded];
}