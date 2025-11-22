import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.quality': 'Quality',
    'nav.logistics': 'Logistics',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Premium Seafood from Mauritanian Waters',
    'hero.subtitle': 'Exporting fresh and frozen fish and seafood directly from one of the richest fishing zones in the African Atlantic.',
    'hero.cta': 'Explore Our Products',
    'hero.contact': 'Request Samples',
    
    // About Section
    'about.title': 'Ocean Fresh Mauritania',
    'about.subtitle': 'Your Local Partner in Premium Seafood Export',
    'about.description': 'Based in Nouadhibou, Mauritania, we work directly with local fleets and producers to offer traceable, competitive, and high-quality products, meeting sanitary requirements for export to the European Union, Asia, and other international markets. We are expanding into the European market, seeking serious and sustainable partnerships.',
    
    // Products
    'products.title': 'Our Premium Products',
    'products.subtitle': 'Discover our extensive range of fresh and frozen seafood',
    'products.crustaceans': 'Crustaceans',
    'products.sharks': 'Sharks & Rays',
    'products.fish': 'Fish',
    'products.viewDetails': 'View Details',
    'products.requestSample': 'Request Sample',
    
    // Quality
    'quality.title': 'Quality Assurance',
    'quality.subtitle': 'International Standards & Certifications',
    'quality.onispa': 'ONISPA Certified',
    'quality.sustainable': 'Sustainable Fishing',
    'quality.traceability': 'Full Traceability',
    'quality.description': 'Ocean Fresh Mauritania specializes in exporting high-quality seafood, including fresh and frozen fish, caught in the North Atlantic of Mauritania using sustainable methods. Each batch is processed and packaged following strict hygiene standards and maintained in a cold chain until delivery. We have sanitary certificates issued by ONISPA (National Office of Sanitary Inspection of Fishery and Aquaculture Products).',
    
    // Logistics
    'logistics.title': 'Logistics & Export',
    'logistics.subtitle': 'Efficient Shipping & Export Services',
    'logistics.shipping': 'Worldwide Shipping',
    'logistics.cold': 'Cold Chain Management',
    'logistics.docs': 'Export Documentation',
    'logistics.port': 'Port of Origin',
    'logistics.portValue': 'Nouadhibou, Mauritania',
    'logistics.maritime': 'Maritime',
    'logistics.maritimeTime': '2-4 weeks',
    'logistics.air': 'Air Express',
    'logistics.airTime': '24-48 hours',
    'logistics.description': 'We offer maritime transport in refrigerated containers or express air transport, according to customer needs. All shipments are made maintaining the appropriate cold chain to guarantee product freshness. Each batch includes complete documentation and traceability from catch to final delivery.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to place an order or request samples?',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.product': 'Product Interest',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Thank you! We will contact you soon.',
    
    // Footer
    'footer.company': 'Ocean Fresh',
    'footer.description': 'We are not just suppliers: we are your local partner in Mauritania, with direct access to high-quality seafood, export experience, and everything necessary to operate legally, safely, and efficiently.',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.quality': 'Calidad',
    'nav.logistics': 'Logística',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Mariscos Premium de Aguas Mauritanas',
    'hero.subtitle': 'Exportando pescado y marisco fresco y congelado, directamente desde una de las zonas pesqueras más ricas del Atlántico africano.',
    'hero.cta': 'Explorar Productos',
    'hero.contact': 'Solicitar Muestras',
    
    // About Section
    'about.title': 'Ocean Fresh Mauritania',
    'about.subtitle': 'Su Socio Local en Exportación de Mariscos Premium',
    'about.description': 'Con sede en Nouadhibou, Mauritania, trabajamos con flotas y productores locales para ofrecer producto trazable, competitivo y de alta calidad, cumpliendo con los requisitos sanitarios para exportación a la Unión Europea, Asia y otros mercados internacionales. Estamos en plena expansión hacia el mercado europeo, buscando colaboraciones serias y sostenibles.',
    
    // Products
    'products.title': 'Nuestros Productos Premium',
    'products.subtitle': 'Descubra nuestra amplia gama de mariscos frescos y congelados',
    'products.crustaceans': 'Crustáceos',
    'products.sharks': 'Tiburones y Rayas',
    'products.fish': 'Pescado',
    'products.viewDetails': 'Ver Detalles',
    'products.requestSample': 'Solicitar Muestra',
    
    // Quality
    'quality.title': 'Garantía de Calidad',
    'quality.subtitle': 'Estándares Internacionales y Certificaciones',
    'quality.onispa': 'Certificado ONISPA',
    'quality.sustainable': 'Pesca Sostenible',
    'quality.traceability': 'Trazabilidad Completa',
    'quality.description': 'Ocean Fresh Mauritania se especializa en la exportación de productos del mar de alta calidad, incluyendo pescados frescos y congelados, capturados en el Atlántico Norte de Mauritania mediante métodos sostenibles. Cada lote se procesa y envasa siguiendo estrictos estándares de higiene y se mantiene en cadena de frío hasta su destino. Contamos con certificados sanitarios emitidos por ONISPA (Oficina Nacional de Inspección Sanitaria de los Productos de la Pesca y de la Acuicultura).',
    
    // Logistics
    'logistics.title': 'Logística y Exportación',
    'logistics.subtitle': 'Servicios Eficientes de Envío y Exportación',
    'logistics.shipping': 'Envío Mundial',
    'logistics.cold': 'Gestión de Cadena de Frío',
    'logistics.docs': 'Documentación de Exportación',
    'logistics.port': 'Puerto de Salida',
    'logistics.portValue': 'Nouadhibou, Mauritania',
    'logistics.maritime': 'Marítimo',
    'logistics.maritimeTime': '2-4 semanas',
    'logistics.air': 'Aéreo Exprés',
    'logistics.airTime': '24-48 horas',
    'logistics.description': 'Ofrecemos transporte marítimo en contenedores refrigerados o transporte aéreo exprés, según las necesidades del cliente. Todos los envíos se realizan cumpliendo la cadena de frío adecuada para garantizar la frescura del producto. Cada lote incluye documentación completa y trazabilidad desde la captura hasta la entrega final.',
    
    // Contact
    'contact.title': 'Póngase en Contacto',
    'contact.subtitle': '¿Listo para hacer un pedido o solicitar muestras?',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.company': 'Nombre de la Empresa',
    'contact.product': 'Interés en Producto',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.success': '¡Gracias! Nos pondremos en contacto pronto.',
    
    // Footer
    'footer.company': 'Ocean Fresh',
    'footer.description': 'No somos solo proveedores: somos su socio local en Mauritania, con acceso directo al marisco y pescado de alta calidad, experiencia en exportación y todo lo necesario para operar de forma legal, segura y eficiente.',
    'footer.rights': 'Todos los derechos reservados.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.quality': 'Qualité',
    'nav.logistics': 'Logistique',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Fruits de Mer Premium des Eaux Mauritaniennes',
    'hero.subtitle': 'Exportation de poissons et fruits de mer frais et congelés, directement depuis l\'une des zones de pêche les plus riches de l\'Atlantique africain.',
    'hero.cta': 'Explorer Nos Produits',
    'hero.contact': 'Demander des Échantillons',
    
    // About Section
    'about.title': 'Ocean Fresh Mauritania',
    'about.subtitle': 'Votre Partenaire Local en Exportation de Fruits de Mer Premium',
    'about.description': 'Basés à Nouadhibou, Mauritanie, nous travaillons avec des flottes et des producteurs locaux pour offrir des produits traçables, compétitifs et de haute qualité, répondant aux exigences sanitaires pour l\'exportation vers l\'Union européenne, l\'Asie et d\'autres marchés internationaux. Nous sommes en pleine expansion vers le marché européen, à la recherche de partenariats sérieux et durables.',
    
    // Products
    'products.title': 'Nos Produits Premium',
    'products.subtitle': 'Découvrez notre vaste gamme de fruits de mer frais et congelés',
    'products.crustaceans': 'Crustacés',
    'products.sharks': 'Requins et Raies',
    'products.fish': 'Poisson',
    'products.viewDetails': 'Voir Détails',
    'products.requestSample': 'Demander Échantillon',
    
    // Quality
    'quality.title': 'Assurance Qualité',
    'quality.subtitle': 'Normes Internationales et Certifications',
    'quality.onispa': 'Certifié ONISPA',
    'quality.sustainable': 'Pêche Durable',
    'quality.traceability': 'Traçabilité Complète',
    'quality.description': 'Ocean Fresh Mauritania se spécialise dans l\'exportation de produits de la mer de haute qualité, y compris les poissons frais et congelés, capturés dans l\'Atlantique Nord de la Mauritanie par des méthodes durables. Chaque lot est traité et emballé selon des normes d\'hygiène strictes et maintenu dans la chaîne du froid jusqu\'à sa destination. Nous disposons de certificats sanitaires délivrés par l\'ONISPA (Office National d\'Inspection Sanitaire des Produits de la Pêche et de l\'Aquaculture).',
    
    // Logistics
    'logistics.title': 'Logistique et Exportation',
    'logistics.subtitle': 'Services d\'Expédition et d\'Exportation Efficaces',
    'logistics.shipping': 'Expédition Mondiale',
    'logistics.cold': 'Gestion de la Chaîne du Froid',
    'logistics.docs': 'Documentation d\'Exportation',
    'logistics.port': 'Port de Départ',
    'logistics.portValue': 'Nouadhibou, Mauritanie',
    'logistics.maritime': 'Maritime',
    'logistics.maritimeTime': '2-4 semaines',
    'logistics.air': 'Aérien Express',
    'logistics.airTime': '24-48 heures',
    'logistics.description': 'Nous proposons un transport maritime en conteneurs réfrigérés ou un transport aérien express, selon les besoins du client. Tous les envois sont effectués en maintenant la chaîne du froid appropriée pour garantir la fraîcheur du produit. Chaque lot comprend une documentation complète et une traçabilité de la capture à la livraison finale.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à passer commande ou demander des échantillons?',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.company': 'Nom de l\'Entreprise',
    'contact.product': 'Intérêt Produit',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer Message',
    'contact.success': 'Merci! Nous vous contacterons bientôt.',
    
    // Footer
    'footer.company': 'Ocean Fresh',
    'footer.description': 'Nous ne sommes pas seulement des fournisseurs : nous sommes votre partenaire local en Mauritanie, avec un accès direct aux fruits de mer de haute qualité, une expérience en exportation et tout le nécessaire pour opérer de manière légale, sûre et efficace.',
    'footer.rights': 'Tous droits réservés.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}