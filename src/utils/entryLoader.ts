import { JournalEntry, Category } from '@/data/entries';

export interface EntryMetadata {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  tags: string[];
  filename: string;
}

export interface EntriesIndex {
  entries: EntryMetadata[];
  lastUpdated: string;
}

// Cache for the index
let indexCache: EntriesIndex | null = null;

/**
 * Load the entries index from index.json
 */
export async function loadEntriesIndex(): Promise<EntriesIndex> {
  if (indexCache) {
    return indexCache;
  }

  try {
    const response = await fetch('/journal-y/entries/index.json');
    if (!response.ok) {
      throw new Error(`Failed to load entries index: ${response.statusText}`);
    }
    indexCache = await response.json();
    return indexCache!;
  } catch (error) {
    console.error('Error loading entries index:', error);
    throw error;
  }
}

/**
 * Load a single entry's markdown content by slug
 */
export async function loadEntryBySlug(slug: string): Promise<JournalEntry | null> {
  try {
    const index = await loadEntriesIndex();
    const metadata = index.entries.find(e => e.slug === slug);
    
    if (!metadata) {
      return null;
    }

    const response = await fetch(`/journal-y/entries/${metadata.filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load entry: ${response.statusText}`);
    }

    const markdown = await response.text();
    const content = extractContent(markdown);

    return {
      id: metadata.id,
      slug: metadata.slug,
      title: metadata.title,
      excerpt: metadata.excerpt,
      category: metadata.category as any,
      date: metadata.date,
      tags: metadata.tags,
      content: content,
    };
  } catch (error) {
    console.error(`Error loading entry with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Extract content from markdown (remove frontmatter)
 */
function extractContent(markdown: string): string {
  const frontmatterRegex = /^---\n[\s\S]*?\n---\n/;
  return markdown.replace(frontmatterRegex, '').trim();
}

/**
 * Get all entries metadata (for listing pages)
 */
export async function getAllEntriesMetadata(): Promise<EntryMetadata[]> {
  const index = await loadEntriesIndex();
  return index.entries;
}

/**
 * Get entries by category
 */
export async function getEntriesByCategory(category: string): Promise<EntryMetadata[]> {
  const index = await loadEntriesIndex();
  return index.entries.filter(e => e.category === category);
}

/**
 * Create a slug from a title (utility function)
 */
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
