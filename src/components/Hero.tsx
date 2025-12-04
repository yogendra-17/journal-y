const Hero = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border/30">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            A Student's Chronicle
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
            Documenting the Journey of{' '}
            <span className="text-primary italic">Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body">
            A personal archive of algorithmic explorations, blockchain discoveries, 
            system design patterns, and the occasional philosophical wandering. 
            Every problem solved is a lesson learned.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {['LeetCode', 'Blockchain', 'System Design', 'Articles', 'Thoughts'].map((tag, i) => (
              <span 
                key={tag}
                className="px-3 py-1.5 text-xs uppercase tracking-wider bg-secondary text-secondary-foreground rounded-sm border border-border/50 animate-slide-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
