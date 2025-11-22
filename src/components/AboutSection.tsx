import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Award, Globe } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Building2,
      title: 'Decades of Experience',
      description: 'Established expertise in Mauritanian fishing industry'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Highest standards of seafood processing and handling'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving international markets worldwide'
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
                  {t('about.title')}
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                <h3 className="text-2xl text-gray-600 mb-8 font-light">
                  {t('about.subtitle')}
                </h3>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
                {t('about.description')}
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center animate-fade-in-up-delay group"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2 text-lg">{feature.title}</h4>
                    <p className="text-gray-600 font-light">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-up-delay">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                  alt="Fishing boats in Mauritanian waters"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up-delay-2">
                <div className="text-center">
                  <div className="text-4xl font-thin text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600 font-light">Years Experience</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up-delay-2">
                <div className="text-center">
                  <div className="text-4xl font-thin text-teal-600 mb-2">50+</div>
                  <div className="text-gray-600 font-light">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}