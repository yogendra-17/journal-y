import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EntriesSection from '@/components/EntriesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
