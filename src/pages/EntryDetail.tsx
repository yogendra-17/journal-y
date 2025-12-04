import { useParams, useNavigate } from 'react-router-dom';
import { entries } from '@/data/entries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryBadge from '@/components/CategoryBadge';
import { Calendar, ArrowLeft } from 'lucide-react';

const renderInlineMarkdown = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  // Handle **bold**
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let match;
  while ((match = boldRegex.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <strong key={`bold-${lastIndex}`} className="font-bold text-foreground">
        {match[1]}
      </strong>
    );
    lastIndex = boldRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const isCodeBlock = (text: string) => text.startsWith('```');
const isTable = (text: string) => text.trim().startsWith('|');

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

            <div className="border-t border-border/30 pt-8 space-y-4 text-base leading-relaxed text-foreground">
              {(() => {
                const lines = entry.content.split('\n');
                const elements: JSX.Element[] = [];
                let codeBlock = false;
                let codeContent = '';
                let i = 0;

                while (i < lines.length) {
                  const line = lines[i];

                  if (isCodeBlock(line)) {
                    if (!codeBlock) {
                      codeBlock = true;
                      codeContent = '';
                    } else {
                      elements.push(
                        <pre key={`code-${i}`} className="bg-secondary/50 border border-border/30 rounded p-4 overflow-x-auto my-4">
                          <code className="text-sm text-foreground/90">{codeContent.trim()}</code>
                        </pre>
                      );
                      codeBlock = false;
                    }
                    i++;
                    continue;
                  }

                  if (codeBlock) {
                    codeContent += line + '\n';
                    i++;
                    continue;
                  }

                  if (line.startsWith('## ')) {
                    elements.push(
                      <h2 key={`h2-${i}`} className="font-serif text-2xl font-bold mt-8 mb-4">
                        {line.slice(3)}
                      </h2>
                    );
                  } else if (line.startsWith('### ')) {
                    elements.push(
                      <h3 key={`h3-${i}`} className="font-serif text-xl font-semibold mt-6 mb-3">
                        {line.slice(4)}
                      </h3>
                    );
                  } else if (line.startsWith('━')) {
                    elements.push(
                      <div key={`divider-${i}`} className="my-6">
                        <div className="border-b border-border/20"></div>
                      </div>
                    );
                  } else if (isTable(line)) {
                    const tableLines = [];
                    while (i < lines.length && isTable(lines[i])) {
                      tableLines.push(lines[i]);
                      i++;
                    }
                    i--;

                    elements.push(
                      <div key={`table-${i}`} className="overflow-x-auto my-4">
                        <table className="w-full text-sm border-collapse">
                          <tbody>
                            {tableLines.map((tableLine, idx) => (
                              <tr key={`tr-${idx}`} className="border-b border-border/30">
                                {tableLine
                                  .split('|')
                                  .filter(cell => cell.trim())
                                  .map((cell, cellIdx) => (
                                    <td
                                      key={`td-${idx}-${cellIdx}`}
                                      className={`px-4 py-2 ${
                                        idx === 0 ? 'font-bold text-primary' : ''
                                      }`}
                                    >
                                      {cell.trim()}
                                    </td>
                                  ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  } else if (line.trim() !== '') {
                    elements.push(
                      <p key={`p-${i}`} className="my-2 text-foreground/90">
                        {renderInlineMarkdown(line)}
                      </p>
                    );
                  }

                  i++;
                }

                return elements;
              })()}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EntryDetail;
