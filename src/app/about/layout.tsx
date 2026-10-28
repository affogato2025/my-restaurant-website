import { Metadata } from 'next';
import { SITE_URL, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `About Us - ${siteConfig.businessName}`,
  description: `Learn about ${siteConfig.businessName}: our story, mission, and how we serve our community.`,
  keywords: [
    `about ${siteConfig.businessName}`,
    'New American restaurant story',
    'farm and coastal cooking',
    'Greenwich Village restaurant',
    'restaurant story',
    'catering',
  ],
  openGraph: {
    title: `About Us - ${siteConfig.businessName}`,
    description: `Learn about ${siteConfig.businessName} and our team.`,
    images: [
      {
        url: `${SITE_URL}/Signature/restaurant-at-dusk.jpg`,
        width: 2000,
        height: 2998,
        alt: `The dining atmosphere at ${siteConfig.businessName}`,
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
