import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <BookOpen className="w-5 h-5 text-primary transition-transform group-hover:rotate-6" />
            <span className="font-serif text-lg font-semibold tracking-tight">
              The Academic Journal
            </span>
          </a>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#entries" className="hover:text-foreground transition-colors">
              Entries
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
