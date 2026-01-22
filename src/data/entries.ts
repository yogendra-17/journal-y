export type Category = 'leetcode' | 'blockchain' | 'system-design' | 'articles' | 'thoughts';

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  tags: string[];
}

export const categoryLabels: Record<Category, string> = {
  'leetcode': 'LeetCode',
  'blockchain': 'Blockchain',
  'system-design': 'System Design',
  'articles': 'Articles',
  'thoughts': 'Thoughts',
};

export const categoryDescriptions: Record<Category, string> = {
  'leetcode': 'Problem-solving journey through algorithms and data structures',
  'blockchain': 'Exploring decentralized systems and Web3',
  'system-design': 'Architectural patterns and scalable systems',
  'articles': 'Long-form explorations and deep dives',
  'thoughts': 'Reflections on learning and growth',
};
