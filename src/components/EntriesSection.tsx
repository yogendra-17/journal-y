import { useState, useEffect } from 'react';
import { categoryLabels, type Category } from '@/data/entries';
import { getAllEntriesMetadata, type EntryMetadata } from '@/utils/entryLoader';
import EntryCard from './EntryCard';
import { cn } from '@/lib/utils';

const categories: (Category | 'all')[] = ['all', 'leetcode', 'blockchain', 'system-design', 'articles', 'thoughts'];

const EntriesSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [entries, setEntries] = useState<EntryMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEntries = async () => {
      try {
        setLoading(true);
        const allEntries = await getAllEntriesMetadata();
        setEntries(allEntries);
        setError(null);
      } catch (err) {
        console.error('Failed to load entries:', err);
        setError('Failed to load entries. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadEntries();
  }, []);

  const filteredEntries = (activeCategory === 'all'
    ? entries
    : entries.filter(entry => entry.category === activeCategory))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="entries" className="py-16 md:py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Collected thoughts, solutions, and explorations from the ongoing journey.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-3 py-1.5 text-sm rounded-sm transition-all duration-200',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                {category === 'all' ? 'All' : categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <p className="text-center text-muted-foreground py-12">
              Loading entries...
            </p>
          )}

          {/* Error State */}
          {error && (
            <p className="text-center text-destructive py-12">
              {error}
            </p>
          )}

          {/* Entries Grid */}
          {!loading && !error && (
            <div className="grid gap-6">
              {filteredEntries.map((entry, index) => (
                <EntryCard key={entry.id} entry={entry} index={index} />
              ))}
            </div>
          )}

          {!loading && !error && filteredEntries.length === 0 && (
            <p className="text-center text-muted-foreground py-12 italic">
              No entries in this category yet. The journey continues...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EntriesSection;
