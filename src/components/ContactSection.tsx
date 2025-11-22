import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', company: '', product: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'oceanfreesh@gmail.com',
      link: 'mailto:oceanfreesh@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(+34) 625400711',
      link: 'tel:+34625400711'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Nouadhibou, Mauritania',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="animate-fade-in-up-delay">
              <Card className="border-0 shadow-2xl rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-thin">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  {isSubmitted ? (
                    <div className="text-center py-16 animate-fade-in-up">
                      <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                      <h3 className="text-3xl font-thin text-gray-900 mb-4">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 font-light text-lg">
                        {t('contact.success')}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-3 font-light">
                            {t('contact.name')} *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="John Doe"
                            className="rounded-2xl border-gray-200 py-4 px-6 text-lg font-light focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-3 font-light">
                            {t('contact.email')} *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="john@company.com"
                            className="rounded-2xl border-gray-200 py-4 px-6 text-lg font-light focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-3 font-light">
                          {t('contact.company')}
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your Company Name"
                          className="rounded-2xl border-gray-200 py-4 px-6 text-lg font-light focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-3 font-light">
                          {t('contact.product')}
                        </label>
                        <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                          <SelectTrigger className="rounded-2xl border-gray-200 py-4 px-6 text-lg font-light focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select product category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="crustaceans">{t('products.crustaceans')}</SelectItem>
                            <SelectItem value="sharks">{t('products.sharks')}</SelectItem>
                            <SelectItem value="fish">{t('products.fish')}</SelectItem>
                            <SelectItem value="mixed">Mixed Products</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-3 font-light">
                          {t('contact.message')} *
                        </label>
                        <Textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your requirements, quantities, and delivery preferences..."
                          className="rounded-2xl border-gray-200 p-6 text-lg font-light focus:border-blue-500 focus:ring-blue-500 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-light rounded-2xl transition-all duration-300 hover:scale-105"
                        size="lg"
                      >
                        <Send className="h-5 w-5 mr-3" />
                        {t('contact.submit')}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-10 animate-fade-in-up-delay">
              {/* Contact Details */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-6 animate-fade-in-up-delay-2 group"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-light text-gray-900 mb-2 text-xl">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors font-light text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-light text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="relative h-80 bg-gray-100 rounded-3xl overflow-hidden animate-fade-in-up-delay-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                  alt="Port of Nouadhibou"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl">
                    <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <p className="font-light text-gray-900 text-xl">Nouadhibou</p>
                    <p className="text-gray-600 font-light">Mauritania</p>
                  </div>
                </div>
              </div>

              {/* Advantages */}
              <div className="animate-fade-in-up-delay-2">
                <Card className="border-0 shadow-2xl rounded-3xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-light">Why Work With Us</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8">
                    <div className="space-y-4 font-light">
                      <div className="flex items-start space-x-3 py-2">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">Valid sanitary certificates for international export</span>
                      </div>
                      <div className="flex items-start space-x-3 py-2">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">Free sample shipments without commitment</span>
                      </div>
                      <div className="flex items-start space-x-3 py-2">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">Competitive prices and constant supply</span>
                      </div>
                      <div className="flex items-start space-x-3 py-2">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">Complete export and logistics consulting</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}