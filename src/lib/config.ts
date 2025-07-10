export const config = {
  site: {
    name: 'Pink City Cake Studio',
    description: 'Custom Cake Bakery located in Moreno Valley, CA serving Riverside, Los Angeles, Orange, and San Bernardino Counties.',
    url: 'https://pinkcitycakes.com',
    logo: '/images/PinkCityCakeStudio_logo.webp',
    favicon: '/favicon.ico',
  },
  social: {
    facebook: null,
    instagram: 'https://instagram.com/pinkcitycakestudio',
    pinterest: null,
    x: null,
    youtube: null,
    tiktok: 'https://tiktok.com/@pinkcitycakestudio',
    linkedin: null
  },
  contact: {
    email: 'PinkCityCakes@gmail.com',
    phone: {
      countryCode: '1',
      areaCode: '951',
      number: '7560273',
      numberFormatted: '(951) 756-0273',
    },
  },
  location: {
    streetAddress: '123 Cake St.',
    city: 'Moreno Valley',
    state: 'CA',
    zip: '92553',
    country: 'USA',
  },
  analytics: {
    google: '',
    facebook: '',
  },
  features: {
    blog: true,
    gallery: true,
    testimonials: true,
    onlineOrdering: false,
  },
  theme: {
    primaryColor: '#ff69b4', // Hot Pink
    secondaryColor: '#fff0f5', // Lavender Blush
    accentColor: '#ff1493', // Deep Pink
    backgroundColor: '#fff', // White
    textColor: '#333', // Dark Gray
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  seo: {
    titleTemplate: '%s | Pink City Cake Studio',
    defaultTitle: 'Pink City Cake Studio',
    keywords: 'cakes, bakery, custom cakes, Pink City, cake studio',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      site_name: 'Pink City Cake Studio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Pink City Cake Studio',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
      site: '@pinkcitycakes',
      creator: '@pinkcitycakes',
      images: [
        {
          url: '/twitter-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Pink City Cake Studio',
        },
      ],
    },
  },
  localization: {
    defaultLocale: 'en-US',
    supportedLocales: ['en-US', 'es-ES'],
    translations: {
      'en-US': {
        welcome: 'Welcome to Pink City Cake Studio',
        orderNow: 'Order Now',
        contactUs: 'Contact Us',
      },
      'es-ES': {
        welcome: 'Bienvenido a Pink City Cake Studio',
        orderNow: 'Ordena Ahora',
        contactUs: 'Contáctanos',
      },
    },
  },
  menu: {
    items: [
      { label: 'Home', path: '#body-top', hidden: true },
      { label: 'Gallery', path: '#gallery' },
      { label: 'Flavors', path: '#flavors' },
      { label: 'Instagram', path: '#instagram' },
      { label: 'Contact', path: '#contact' },
    ],
  }
}