import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { QualitySection } from '@/components/QualitySection';
import { LogisticsSection } from '@/components/LogisticsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <QualitySection />
          <LogisticsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default Home;