import { BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span className="font-serif">The Academic Journal</span>
          </div>
          <p>
            © {currentYear} · Built with curiosity and caffeine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
