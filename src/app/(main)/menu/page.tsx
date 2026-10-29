import { Metadata } from 'next';
import { SITE_URL, siteConfig } from '@/config/site';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: `Menu - ${siteConfig.businessName}`,
  description: `Explore the full menu at ${siteConfig.businessName}. ${siteConfig.description}`,
  keywords: [...siteConfig.keywords, 'menu', 'order online'],
  openGraph: {
    title: `Menu | ${siteConfig.businessName}`,
    description: siteConfig.description,
    images: [
      {
        url: `${SITE_URL}/Signature/dry-aged-strip.jpg`,
        width: 1600,
        height: 1067,
        alt: `Dinner menu at ${siteConfig.businessName}`,
      },
    ],
  },
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-your-black to-your-orange/10">
      <MenuHeader />
      <MenuClient />
    </div>
  );
} 
