'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/config/site';

// New animation variant for smooth fade/slide
const fadeSlide = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 0.9, y: 0 },
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Subtle zoom and fade effect
  const scale = 1.12;
  const opacity = 0.95;

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-your-black"
    >
      {/* Ken Burns Background Animation */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={shouldReduceMotion ? { scale: 1, x: 0, y: 0, opacity: 1 } : { scale, x: 20, y: -10, opacity }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Subtle pulsing overlay */}
        <div className="absolute inset-0 bg-your-black/5 animate-pulse-subtle pointer-events-none" />
        <Image
          src="/Signature/restaurant-at-dusk.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Animated Patterns - Subtle dot pattern */}
      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      
      {/* Main Content */}
      <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="w-full text-center">
          {/* Hero Title */}
          <motion.div
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <h1 className="mx-auto max-w-[20rem] sm:max-w-4xl text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              <span className="text-white block">
                <span className="block sm:inline">New American</span>{' '}
                <span className="block sm:inline">rooted in</span>
              </span>
              <span className="text-your-wine-light block mt-2 font-bold">
                <span className="block sm:inline">farm and coastal</span>{' '}
                <span className="block sm:inline">inspiration.</span>
              </span>
            </h1>
          </motion.div>

          {/* CTA Buttons - Revert to glass style */}
          <motion.div
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/#connect"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-your-orange px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-your-orange/90 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-your-cream focus-visible:ring-offset-2 focus-visible:ring-offset-your-black sm:w-auto"
            >
                <span>Reserve a Table</span>
                <ChevronRight size={20} className="text-white" />
            </Link>
            <a
              href={`mailto:${siteConfig.emailContact}?subject=${encodeURIComponent('The Dorset reservation enquiry')}`}
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/70 bg-your-black/10 px-6 py-3 font-semibold text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-your-black/20 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-your-cream focus-visible:ring-offset-2 focus-visible:ring-offset-your-black sm:w-auto"
            >
                Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={() => document.getElementById('farm-to-table')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' })}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 inline-flex min-h-11 min-w-11 -translate-x-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-label="Scroll to the restaurant story"
      >
        <motion.span animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }} transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 2 }}>
          <ChevronDown size={28} aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default HeroSection;
