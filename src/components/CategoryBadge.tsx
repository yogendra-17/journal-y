import { type Category, categoryLabels } from '@/data/entries';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

const categoryStyles: Record<Category, string> = {
  'leetcode': 'bg-accent/10 text-accent border-accent/20',
  'blockchain': 'bg-primary/10 text-primary border-primary/20',
  'system-design': 'bg-secondary text-secondary-foreground border-border',
  'articles': 'bg-muted text-muted-foreground border-border',
  'thoughts': 'bg-card text-card-foreground border-border',
};

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  return (
    <span 
      className={cn(
        'inline-flex px-2.5 py-0.5 text-xs uppercase tracking-wider border rounded-sm font-medium',
        categoryStyles[category],
        className
      )}
    >
      {categoryLabels[category]}
    </span>
  );
};

export default CategoryBadge;
