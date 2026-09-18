import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EntriesSection from '@/components/EntriesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EntriesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
