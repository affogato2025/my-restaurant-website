import { Metadata } from 'next';
import { SITE_URL, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Catering Services - ${siteConfig.businessName}`,
  description: `Seasonal New American catering by ${siteConfig.businessName}, inspired by local farms and the Atlantic coast.`,
  keywords: [
    'catering',
    'corporate catering',
    'wedding catering',
    'private party catering',
    siteConfig.addressCity,
  ].filter(Boolean),
  openGraph: {
    title: `Catering | ${siteConfig.businessName}`,
    description: `Catering services - ${siteConfig.description}`,
    images: [
      {
        url: `${SITE_URL}/Signature/atlantic-oysters.jpg`,
        width: 1600,
        height: 1067,
        alt: `Seasonal catering by ${siteConfig.businessName}`,
      },
    ],
  },
  alternates: {
    canonical: '/catering',
  },
};

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
