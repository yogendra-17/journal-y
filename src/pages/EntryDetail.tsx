import { useParams, useNavigate } from 'react-router-dom';
import { entries } from '@/data/entries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryBadge from '@/components/CategoryBadge';
import { Calendar, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const EntryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const entry = entries.find(e => e.id === id);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Entry not found</h1>
            <button
              onClick={() => navigate('/')}
              className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to entries
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-20">
        <div className="container max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to entries
          </button>

          <article className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <CategoryBadge category={entry.category} />
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={entry.date}>{formattedDate}</time>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                  {entry.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {entry.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30 pt-6">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-sm border border-border/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border/30 pt-8 text-base leading-relaxed text-foreground">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => <h1 className="font-serif text-3xl font-bold mt-8 mb-4" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="font-serif text-2xl font-bold mt-8 mb-4" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="font-serif text-xl font-semibold mt-6 mb-3" {...props} />,
                  p: ({ node, ...props }) => <p className="text-foreground/90 leading-7 my-4 last:mb-0" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 my-4 space-y-2 text-foreground/90" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 my-4 space-y-2 text-foreground/90" {...props} />,
                  li: ({ node, children, ...props }) => (
                    <li className="pl-1" {...props}>
                      {/* Handle paragraph wrapper removal if needed, but css list-outside helps */}
                      {children}
                    </li>
                  ),
                  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary/50 pl-4 italic my-6 text-muted-foreground" {...props} />,
                  code: ({ node, inline, className, children, ...props }: any) => {
                    return !inline ? (
                      <div className="relative my-6 rounded-lg overflow-hidden border border-border/40 shadow-sm">
                        <pre className="bg-secondary/40 p-4 overflow-x-auto">
                          <code className={`text-sm font-mono leading-relaxed ${className || ''}`} {...props}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    ) : (
                      <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-sm font-mono text-primary border border-border/20" {...props}>
                        {children}
                      </code>
                    );
                  },
                  table: ({ node, ...props }) => <div className="overflow-x-auto my-6 rounded-lg border border-border/30"><table className="w-full text-sm border-collapse" {...props} /></div>,
                  thead: ({ node, ...props }) => <thead className="bg-secondary/30" {...props} />,
                  tbody: ({ node, ...props }) => <tbody {...props} />,
                  tr: ({ node, ...props }) => <tr className="border-b border-border/30 last:border-0 hover:bg-secondary/10 transition-colors" {...props} />,
                  th: ({ node, ...props }) => <th className="px-4 py-3 text-left font-bold text-foreground/80" {...props} />,
                  td: ({ node, ...props }) => <td className="px-4 py-3 text-foreground/70" {...props} />,
                  img: ({ node, ...props }) => (
                    <div className="my-8 space-y-2">
                      <div className="overflow-hidden rounded-lg border border-border/30 bg-secondary/20 shadow-sm">
                        <img className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]" {...props} />
                      </div>
                      {props.alt && (
                        <p className="text-center text-sm text-muted-foreground italic">{props.alt}</p>
                      )}
                    </div>
                  ),
                  hr: ({ node, ...props }) => <hr className="my-8 border-border/20" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
                }}
              >
                {entry.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EntryDetail;
