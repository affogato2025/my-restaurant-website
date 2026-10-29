'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import HomeFoodCarouselSection from '@/components/home/HomeFoodCarouselSection';

const QualityCommitmentSection = dynamic(() => import('@/components/home/QualityCommitmentSection'));
const CustomerReviewsSection = dynamic(() => import('@/components/home/CustomerReviewsSection'));
const ConnectSection = dynamic(() => import('@/components/home/ConnectSection'));
const VisitDorsetSection = dynamic(() => import('@/components/home/VisitDorsetSection'));

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  // Reset scroll position and handle scroll events
  useEffect(() => {
    // If there's no hash in URL, scroll to top on mount
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <main className="min-h-screen relative" style={{ position: 'relative' }}>
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' })}
        className={`fixed bottom-20 right-4 z-40 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-your-orange p-3 text-white shadow-lg transition-colors hover:bg-your-orange/90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-your-cream sm:bottom-24 sm:right-8 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-label="Back to top"
        aria-hidden={!isScrolled}
        tabIndex={isScrolled ? 0 : -1}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>

      {/* Ensure all top-level sections have relative positioning for scroll/animation */}
      <div className="relative" style={{ position: 'relative' }}>
        <HeroSection />
        <HomeFoodCarouselSection />
        <BestsellersSection />
        <QualityCommitmentSection />
        <CustomerReviewsSection />
        <VisitDorsetSection />
        <ConnectSection />
      </div>
    </main>
  );
};

export default Index;
