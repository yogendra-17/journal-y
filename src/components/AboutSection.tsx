import { Bookmark, Code, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-secondary/30 border-t border-border/30">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold">
              About This Journal
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This is a personal space for documenting the winding path of learning—
                the problems that kept me up at night, the concepts that finally clicked, 
                and the questions I'm still trying to answer.
              </p>
              <p>
                Every entry here represents a moment of growth, whether it's cracking 
                a tricky algorithm, understanding a new blockchain primitive, or simply 
                reflecting on how to learn better.
              </p>
              <p className="italic text-foreground">
                "The act of writing is the act of discovering what you believe."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">What You'll Find Here</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-sm text-primary">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Problem Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    LeetCode breakdowns, algorithmic insights, and coding patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-accent/10 rounded-sm text-accent">
                  <Bookmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Technical Deep Dives</h4>
                  <p className="text-sm text-muted-foreground">
                    System design explorations and blockchain fundamentals.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-secondary rounded-sm text-secondary-foreground">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Reflections</h4>
                  <p className="text-sm text-muted-foreground">
                    Thoughts on learning, growth, and the craft of programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
