import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ship, Thermometer, FileText, Clock, MapPin, Truck } from 'lucide-react';

export function LogisticsSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Ship,
      title: t('logistics.shipping'),
      description: 'Maritime and air freight from Nouadhibou port',
      features: ['Express air freight (24-48h)', 'Refrigerated containers (2-4 weeks)', 'Secure and efficient shipments']
    },
    {
      icon: Thermometer,
      title: t('logistics.cold'),
      description: 'Temperature-controlled logistics from catch to delivery',
      features: ['Refrigerated containers', 'Temperature monitoring', 'Cold storage facilities']
    },
    {
      icon: FileText,
      title: t('logistics.docs'),
      description: 'Complete export documentation and traceability',
      features: ['ONISPA certificates', 'Complete documentation', 'Full traceability']
    }
  ];

  const shippingRoutes = [
    { destination: 'Europe', time: '2-4 weeks', method: 'Maritime' },
    { destination: 'Europe', time: '24-48 hours', method: 'Air Express' },
    { destination: 'Asia', time: '2-4 weeks', method: 'Maritime' },
    { destination: 'International', time: '24-48 hours', method: 'Air Express' },
  ];

  return (
    <section id="logistics" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
              {t('logistics.title')}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {t('logistics.subtitle')}
            </p>
          </div>

          {/* Port of Origin Banner */}
          <div className="mb-20 animate-fade-in-up-delay">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10 text-center shadow-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-gray-900 mb-2">{t('logistics.port')}</h3>
              <p className="text-3xl font-thin text-blue-600">{t('logistics.portValue')}</p>
              <p className="text-gray-600 font-light mt-4">Guaranteeing secure and efficient shipments</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up-delay group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-0 shadow-lg rounded-3xl">
                  <CardHeader className="text-center pb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-light">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-8">
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700 font-light flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Shipping Routes */}
            <div className="animate-fade-in-up-delay">
              <Card className="border-0 shadow-2xl rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-3 text-2xl font-light">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span>Shipping Times</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="space-y-6">
                    {shippingRoutes.map((route, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl animate-fade-in-up-delay-2 hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <Truck className="h-5 w-5 text-gray-600" />
                          <span className="font-light text-lg">{route.destination}</span>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 text-gray-600 font-light">
                            <Clock className="h-4 w-4" />
                            <span>{route.time}</span>
                          </div>
                          <div className="text-sm text-gray-500 font-light">{route.method}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Process Flow */}
            <div className="animate-fade-in-up-delay">
              <Card className="border-0 shadow-2xl rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-light">Export Process</CardTitle>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="space-y-6">
                    {[
                      'Order confirmation & processing',
                      'Quality inspection & packaging',
                      'ONISPA documentation preparation',
                      'Cold chain loading',
                      'Customs clearance',
                      'International shipping',
                      'Delivery confirmation'
                    ].map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 animate-fade-in-up-delay-2"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl flex items-center justify-center text-sm font-light">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-light text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-8 bg-blue-50 rounded-2xl">
                    <p className="text-blue-800 font-light leading-relaxed">
                      {t('logistics.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}