import { SITE_URL, siteConfig, sameAsSocial } from '@/config/site';

function googleMapsSearchUrl(): string {
  const q = encodeURIComponent(
    [
      siteConfig.addressLine,
      siteConfig.addressCity,
      [siteConfig.addressRegion, siteConfig.addressPostal].filter(Boolean).join(' '),
    ].filter(Boolean).join(', '),
  );
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function getStructuredDataGraph() {
  const restaurant: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.businessName,
    description: siteConfig.description,
    image: [
      `${SITE_URL}/Signature/restaurant-at-dusk.jpg`,
      `${SITE_URL}/Signature/dry-aged-strip.jpg`,
      `${SITE_URL}/Signature/atlantic-oysters.jpg`,
    ],
    url: SITE_URL,
    telephone: siteConfig.phoneE164,
    email: siteConfig.emailContact,
    address: {
      '@type': 'PostalAddress',
      ...(siteConfig.addressLine ? { streetAddress: siteConfig.addressLine } : {}),
      addressLocality: siteConfig.addressCity,
      addressRegion: siteConfig.addressRegion,
      ...(siteConfig.addressPostal ? { postalCode: siteConfig.addressPostal } : {}),
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: [
      {
        '@type': 'City',
        name: siteConfig.areaServedCity,
        containedInPlace: { '@type': 'State', name: siteConfig.addressStateName },
      },
      {
        '@type': 'AdministrativeArea',
        name: siteConfig.areaServedMetro,
      },
    ],
    hasMap: googleMapsSearchUrl(),
    servesCuisine: siteConfig.servesCuisine,
    priceRange: '$$$',
    paymentAccepted: siteConfig.paymentAccepted,
    hasMenu: `${SITE_URL}/menu`,
    acceptsReservations: false,
    currenciesAccepted: 'USD',
    sameAs: sameAsSocial,
  };

  if (siteConfig.latitude && siteConfig.longitude) {
    restaurant.geo = {
      '@type': 'GeoCoordinates',
      latitude: Number.parseFloat(siteConfig.latitude),
      longitude: Number.parseFloat(siteConfig.longitude),
    };
  }

  if (siteConfig.openingHoursSchema) {
    restaurant.openingHours = siteConfig.openingHoursSchema;
  }

  if (siteConfig.schemaRatingValue && siteConfig.schemaReviewCount) {
    restaurant.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.schemaRatingValue,
      reviewCount: Number.parseInt(siteConfig.schemaReviewCount, 10) || siteConfig.schemaReviewCount,
    };
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.businessName,
    url: SITE_URL,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      url: SITE_URL,
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [website, restaurant],
  };
}
