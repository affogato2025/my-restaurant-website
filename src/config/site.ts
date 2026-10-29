/**
 * Site-wide copy and links for this template.
 * Set NEXT_PUBLIC_* variables in `.env.local` (and Netlify → Environment variables).
 */

const publicEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_BUSINESS_NAME: process.env.NEXT_PUBLIC_BUSINESS_NAME,
  NEXT_PUBLIC_BRAND_WORD_PRIMARY: process.env.NEXT_PUBLIC_BRAND_WORD_PRIMARY,
  NEXT_PUBLIC_BRAND_WORD_SECONDARY: process.env.NEXT_PUBLIC_BRAND_WORD_SECONDARY,
  NEXT_PUBLIC_TITLE_SUFFIX: process.env.NEXT_PUBLIC_TITLE_SUFFIX,
  NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  NEXT_PUBLIC_SITE_KEYWORDS: process.env.NEXT_PUBLIC_SITE_KEYWORDS,
  NEXT_PUBLIC_PHONE_E164: process.env.NEXT_PUBLIC_PHONE_E164,
  NEXT_PUBLIC_PHONE_DISPLAY: process.env.NEXT_PUBLIC_PHONE_DISPLAY,
  NEXT_PUBLIC_WHATSAPP_DIGITS: process.env.NEXT_PUBLIC_WHATSAPP_DIGITS,
  NEXT_PUBLIC_EMAIL_CONTACT: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
  NEXT_PUBLIC_ORDER_URL: process.env.NEXT_PUBLIC_ORDER_URL,
  NEXT_PUBLIC_ADDRESS_LINE: process.env.NEXT_PUBLIC_ADDRESS_LINE,
  NEXT_PUBLIC_ADDRESS_CITY: process.env.NEXT_PUBLIC_ADDRESS_CITY,
  NEXT_PUBLIC_ADDRESS_REGION: process.env.NEXT_PUBLIC_ADDRESS_REGION,
  NEXT_PUBLIC_ADDRESS_STATE_NAME: process.env.NEXT_PUBLIC_ADDRESS_STATE_NAME,
  NEXT_PUBLIC_ADDRESS_POSTAL: process.env.NEXT_PUBLIC_ADDRESS_POSTAL,
  NEXT_PUBLIC_ADDRESS_COUNTRY: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY,
  NEXT_PUBLIC_ADDRESS_DISPLAY: process.env.NEXT_PUBLIC_ADDRESS_DISPLAY,
  NEXT_PUBLIC_MAPS_URL: process.env.NEXT_PUBLIC_MAPS_URL,
  NEXT_PUBLIC_GEO_LAT: process.env.NEXT_PUBLIC_GEO_LAT,
  NEXT_PUBLIC_GEO_LNG: process.env.NEXT_PUBLIC_GEO_LNG,
  NEXT_PUBLIC_GEO_REGION_META: process.env.NEXT_PUBLIC_GEO_REGION_META,
  NEXT_PUBLIC_GEO_PLACENAME: process.env.NEXT_PUBLIC_GEO_PLACENAME,
  NEXT_PUBLIC_AREA_SERVED_CITY: process.env.NEXT_PUBLIC_AREA_SERVED_CITY,
  NEXT_PUBLIC_AREA_SERVED_METRO: process.env.NEXT_PUBLIC_AREA_SERVED_METRO,
  NEXT_PUBLIC_OPENING_HOURS_SCHEMA: process.env.NEXT_PUBLIC_OPENING_HOURS_SCHEMA,
  NEXT_PUBLIC_HOURS_REGULAR: process.env.NEXT_PUBLIC_HOURS_REGULAR,
  NEXT_PUBLIC_HOURS_BRUNCH: process.env.NEXT_PUBLIC_HOURS_BRUNCH,
  NEXT_PUBLIC_SERVES_CUISINE: process.env.NEXT_PUBLIC_SERVES_CUISINE,
  NEXT_PUBLIC_PAYMENT_METHODS: process.env.NEXT_PUBLIC_PAYMENT_METHODS,
  NEXT_PUBLIC_SOCIAL_INSTAGRAM: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
  NEXT_PUBLIC_SOCIAL_FACEBOOK: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
  NEXT_PUBLIC_SOCIAL_X: process.env.NEXT_PUBLIC_SOCIAL_X,
  NEXT_PUBLIC_SOCIAL_TIKTOK: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
  NEXT_PUBLIC_SOCIAL_YOUTUBE: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
  NEXT_PUBLIC_DEVELOPER_NAME: process.env.NEXT_PUBLIC_DEVELOPER_NAME,
  NEXT_PUBLIC_DEVELOPER_GITHUB: process.env.NEXT_PUBLIC_DEVELOPER_GITHUB,
  NEXT_PUBLIC_DEVELOPER_INSTAGRAM: process.env.NEXT_PUBLIC_DEVELOPER_INSTAGRAM,
  NEXT_PUBLIC_DEVELOPER_PORTFOLIO: process.env.NEXT_PUBLIC_DEVELOPER_PORTFOLIO,
  NEXT_PUBLIC_TWITTER_CREATOR: process.env.NEXT_PUBLIC_TWITTER_CREATOR,
  NEXT_PUBLIC_THEME_COLOR: process.env.NEXT_PUBLIC_THEME_COLOR,
} as const;

type PublicEnvKey = keyof typeof publicEnv;

function env(key: PublicEnvKey, fallback: string): string {
  const v = publicEnv[key];
  return typeof v === 'string' && v.trim() !== '' ? v.trim() : fallback;
}

function optionalEnv(key: PublicEnvKey): string | undefined {
  const v = publicEnv[key];
  return typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined;
}

function optionalSocialEnv(key: PublicEnvKey): string | undefined {
  const value = optionalEnv(key);
  if (!value || /yourbrand|yourflavors/i.test(value)) return undefined;
  return value;
}

function scheduleEnv(key: PublicEnvKey, fallback: string): Array<{ days: string; time: string }> {
  return env(key, fallback)
    .split(';')
    .map((entry) => {
      const [days, time] = entry.split('|').map((value) => value.trim());
      return { days, time };
    })
    .filter((entry) => entry.days && entry.time);
}

/** No trailing slash. Canonical production address for this portfolio project. */
export const SITE_URL = env('NEXT_PUBLIC_SITE_URL', 'https://dorset.affogato.xin').replace(/\/$/, '');

export const siteConfig = {
  businessName: env('NEXT_PUBLIC_BUSINESS_NAME', 'The Dorset'),
  /** Used in footer wordmark split (first part, often script-style) */
  brandWordPrimary: env('NEXT_PUBLIC_BRAND_WORD_PRIMARY', 'The'),
  /** Second part of footer wordmark */
  brandWordSecondary: env('NEXT_PUBLIC_BRAND_WORD_SECONDARY', 'Dorset'),
  titleSuffix: env('NEXT_PUBLIC_TITLE_SUFFIX', 'New American Restaurant in New York'),
  description: env(
    'NEXT_PUBLIC_SITE_DESCRIPTION',
    'Seasonal New American cooking inspired by local farms and the Atlantic coast in New York City.',
  ),
  /** SEO keywords, comma-separated in env */
  keywords: env(
    'NEXT_PUBLIC_SITE_KEYWORDS',
    'The Dorset, New American restaurant NYC, Greenwich Village restaurant, seasonal dining New York, coastal cuisine NYC',
  ).split(',').map((s) => s.trim()).filter(Boolean),
  phoneE164: env('NEXT_PUBLIC_PHONE_E164', '+8613371246106'),
  phoneDisplay: env('NEXT_PUBLIC_PHONE_DISPLAY', '13371246106'),
  /** Digits only, no + - for wa.me links */
  whatsappDigits: env('NEXT_PUBLIC_WHATSAPP_DIGITS', '8613371246106'),
  emailContact: env('NEXT_PUBLIC_EMAIL_CONTACT', 'affogatocold@gmail.com'),
  orderUrl: optionalEnv('NEXT_PUBLIC_ORDER_URL'),
  addressLine: env('NEXT_PUBLIC_ADDRESS_LINE', '7 Carmine Street'),
  addressCity: env('NEXT_PUBLIC_ADDRESS_CITY', 'New York'),
  addressRegion: env('NEXT_PUBLIC_ADDRESS_REGION', 'NY'),
  /** Full state name for schema.org, e.g. Texas */
  addressStateName: env('NEXT_PUBLIC_ADDRESS_STATE_NAME', 'New York'),
  addressPostal: env('NEXT_PUBLIC_ADDRESS_POSTAL', '10014'),
  addressCountry: env('NEXT_PUBLIC_ADDRESS_COUNTRY', 'US'),
  /** Full line for display, e.g. footer */
  addressDisplay: env(
    'NEXT_PUBLIC_ADDRESS_DISPLAY',
    '7 Carmine Street, New York, NY 10014',
  ),
  mapsLink: env(
    'NEXT_PUBLIC_MAPS_URL',
    'https://www.google.com/maps/search/?api=1&query=7%20Carmine%20Street%2C%20New%20York%2C%20NY%2010014',
  ),
  latitude: optionalEnv('NEXT_PUBLIC_GEO_LAT'),
  longitude: optionalEnv('NEXT_PUBLIC_GEO_LNG'),
  geoRegionMeta: env('NEXT_PUBLIC_GEO_REGION_META', 'US-NY'),
  geoPlacename: env('NEXT_PUBLIC_GEO_PLACENAME', 'New York'),
  areaServedCity: env('NEXT_PUBLIC_AREA_SERVED_CITY', 'New York'),
  areaServedMetro: env('NEXT_PUBLIC_AREA_SERVED_METRO', 'New York metropolitan area'),
  openingHoursSchema: optionalEnv('NEXT_PUBLIC_OPENING_HOURS_SCHEMA')
    ?.split(';')
    .map((value) => value.trim())
    .filter(Boolean),
  hoursRegular: scheduleEnv(
    'NEXT_PUBLIC_HOURS_REGULAR',
    'Monday-Wednesday|5pm-11pm;Thursday|5pm-1am;Friday|5pm-2am;Saturday|11am-2am;Sunday|11am-11pm',
  ),
  hoursBrunch: scheduleEnv(
    'NEXT_PUBLIC_HOURS_BRUNCH',
    'Saturday|11am-3:30pm;Sunday|11am-3:30pm',
  ),
  servesCuisine: env('NEXT_PUBLIC_SERVES_CUISINE', 'New American')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  paymentAccepted: env('NEXT_PUBLIC_PAYMENT_METHODS', 'Cash, Credit Card')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  social: {
    instagram: optionalSocialEnv('NEXT_PUBLIC_SOCIAL_INSTAGRAM'),
    facebook: optionalSocialEnv('NEXT_PUBLIC_SOCIAL_FACEBOOK'),
    x: optionalSocialEnv('NEXT_PUBLIC_SOCIAL_X'),
    tiktok: optionalSocialEnv('NEXT_PUBLIC_SOCIAL_TIKTOK'),
    youtube: optionalSocialEnv('NEXT_PUBLIC_SOCIAL_YOUTUBE'),
  },
  developer: {
    name: env('NEXT_PUBLIC_DEVELOPER_NAME', '邓钰鸣'),
    github: env('NEXT_PUBLIC_DEVELOPER_GITHUB', 'https://github.com/affogato2025'),
    instagram: optionalSocialEnv('NEXT_PUBLIC_DEVELOPER_INSTAGRAM'),
    portfolio: env('NEXT_PUBLIC_DEVELOPER_PORTFOLIO', 'https://affogato.xin'),
  },
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined,
  twitterCreator: optionalEnv('NEXT_PUBLIC_TWITTER_CREATOR'),
  themeColor: env('NEXT_PUBLIC_THEME_COLOR', '#050505'),
  /** Optional: omit from JSON-LD if unset */
  schemaRatingValue: process.env.NEXT_PUBLIC_SCHEMA_RATING_VALUE?.trim(),
  schemaReviewCount: process.env.NEXT_PUBLIC_SCHEMA_REVIEW_COUNT?.trim(),
};

export const sameAsSocial = [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
].filter((url) => url && !/yourbrand|yourflavors/i.test(url));
