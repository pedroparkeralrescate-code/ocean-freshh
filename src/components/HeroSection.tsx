import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-8 leading-[0.9] tracking-tight">
              Ocean Fresh
              <span className="block text-4xl md:text-5xl lg:text-6xl text-blue-400 font-extralight mt-2">
                Mauritania
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up-delay">
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-white text-black hover:bg-gray-100 px-10 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 group border-0"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-black px-10 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}