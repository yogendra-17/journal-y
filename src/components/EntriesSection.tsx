import { useState } from 'react';
import { entries, categoryLabels, type Category } from '@/data/entries';
import EntryCard from './EntryCard';
import { cn } from '@/lib/utils';

const categories: (Category | 'all')[] = ['all', 'leetcode', 'blockchain', 'system-design', 'articles', 'thoughts'];

const EntriesSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  
  const filteredEntries = activeCategory === 'all' 
    ? entries 
    : entries.filter(entry => entry.category === activeCategory);

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
          
          {/* Entries Grid */}
          <div className="grid gap-6">
            {filteredEntries.map((entry, index) => (
              <EntryCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
          
          {filteredEntries.length === 0 && (
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
