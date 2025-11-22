import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, CheckCircle, Download } from 'lucide-react';

export function QualitySection() {
  const { t } = useLanguage();

  const certifications = [
    {
      icon: Shield,
      title: t('quality.onispa'),
      description: 'National Office of Sanitary Inspection of Fishery and Aquaculture Products',
      badge: 'ONISPA',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      icon: Award,
      title: t('quality.sustainable'),
      description: 'Sustainable fishing methods from North Atlantic waters',
      badge: 'Sustainable',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: CheckCircle,
      title: t('quality.traceability'),
      description: 'Complete traceability from catch to final delivery',
      badge: 'Traceable',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  const qualityFeatures = [
    'Strict hygiene standards processing',
    'Cold chain management from catch to delivery',
    'ONISPA sanitary certificates',
    'Traceability systems for all products',
    'Sustainable fishing practices',
    'Direct work with local fleets and producers'
  ];

  return (
    <section id="quality" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
              {t('quality.title')}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {t('quality.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Certifications */}
            <div className="animate-fade-in-up-delay">
              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up-delay-2 group"
                  >
                    <Card className="hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-lg rounded-3xl">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                              <cert.icon className="h-8 w-8 text-blue-600" />
                            </div>
                            <CardTitle className="text-xl font-light">{cert.title}</CardTitle>
                          </div>
                          <Badge className={`${cert.color} rounded-full px-4 py-2 font-light border`}>
                            {cert.badge}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 font-light leading-relaxed">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Features */}
            <div className="relative animate-fade-in-up-delay">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80"
                alt="Quality control facility"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl mb-8"
              />
              
              <div className="bg-white rounded-3xl shadow-2xl p-10 border-0">
                <h3 className="text-3xl font-thin text-gray-900 mb-6">
                  Quality Standards
                </h3>
                <p className="text-gray-600 mb-8 font-light leading-relaxed text-lg">
                  {t('quality.description')}
                </p>
                
                <div className="space-y-4">
                  {qualityFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 animate-fade-in-up-delay-2"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <button className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors font-light text-lg group">
                    <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Download Certification Documents</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}