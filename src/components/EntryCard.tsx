import { useNavigate } from 'react-router-dom';
import { EntryMetadata } from '@/utils/entryLoader';
import CategoryBadge from './CategoryBadge';
import { Calendar } from 'lucide-react';

interface EntryCardProps {
  entry: EntryMetadata;
  index: number;
}



const EntryCard = ({ entry, index }: EntryCardProps) => {
  const navigate = useNavigate();
  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article 
      onClick={() => navigate(`/entry/${entry.slug}`)}
      className="group p-6 bg-card border border-border/50 rounded-sm shadow-paper hover:shadow-elevated transition-all duration-300 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <CategoryBadge category={entry.category} />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={entry.date}>{formattedDate}</time>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
            {entry.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {entry.excerpt}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {entry.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs text-muted-foreground/70 before:content-['#'] before:text-primary/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default EntryCard;
