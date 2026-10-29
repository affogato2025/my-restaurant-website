'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp } from '@/utils/motion.variants';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

const cateringMedia = [
  { src: '/Venue/private-dining-guests.webp', alt: 'Guests gathered in a warmly lit private dining room' },
  { src: '/Venue/candlelit-garden-table.webp', alt: 'An intimate candlelit table prepared for dinner' },
  { src: '/Venue/garden-dining-room.webp', alt: 'A garden dining room set for a daytime gathering' },
  { src: '/Venue/garden-cocktails.webp', alt: 'Cocktails served before a garden gathering' },
  { src: '/Venue/interior-floral-detail.webp', alt: 'Seasonal floral details in a warm dining room' },
  { src: '/Venue/dining-room-evening.webp', alt: 'A candlelit dining room prepared for the evening' },
];

const Catering = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const handleQuoteClick = () => {
    router.push('/#connect');
  };

  // Preload all carousel images for smoother transitions
  useEffect(() => {
    cateringMedia.forEach(item => {
      const img = new window.Image();
      img.src = item.src;
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView || shouldReduceMotion) return;

    const timeout = window.setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % cateringMedia.length);
    }, 4500);
    return () => window.clearTimeout(timeout);
  }, [current, inView, shouldReduceMotion]);
  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + cateringMedia.length) % cateringMedia.length);
  };
  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % cateringMedia.length);
  };

  // Animation variants for staggering list items
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const listItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-your-black w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70svh] flex items-center justify-center overflow-hidden bg-your-black">
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={shouldReduceMotion ? { scale: 1, x: 0, y: 0 } : { scale: 1.05, x: 20, y: -10 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="/Venue/private-dining-guests.webp"
            alt="Guests gathered in a warmly lit private dining room"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 z-[1] opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="w-full text-center">
            <motion.div
              variants={fadeInUp}
              initial={shouldReduceMotion ? 'visible' : 'hidden'}
              animate={shouldReduceMotion ? 'visible' : undefined}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-display font-bold tracking-tight leading-tight">
                <span className="text-your-wine-light block">
                  <span className="block sm:inline">Gatherings,</span>{' '}
                  <span className="block sm:inline">The Dorset Way</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial={shouldReduceMotion ? 'visible' : 'hidden'}
              animate={shouldReduceMotion ? 'visible' : undefined}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white font-sans font-semibold leading-relaxed max-w-10xl mx-auto mb-4"
            >
              Seasonal menus, thoughtful service and memorable hospitality for every occasion.
            </motion.p>

          </div>
        </div>
      </section>                                      

      {/* Page Content */}
      <div className="max-w-7xl mx-auto mt-2 px-4 py-16 space-y-20">
        {/* Catering Carousel Section */}
        <section ref={sectionRef} className="pt-6 pb-12 md:pt-10 md:pb-20 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl relative z-10">
            {/* Text Column */}
            <div className="relative w-full min-w-0 max-w-full text-center md:w-1/2 md:text-left">
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-gradient-to-br from-your-orange/15 via-your-orange/5 to-your-black/0 rounded-full blur-2xl opacity-60 -z-10" />

              <h3 className="text-3xl md:text-4xl font-display font-bold text-your-wine-light mb-4 drop-shadow-sm">
                Catering Services
              </h3>

              <p className="text-lg md:text-xl text-your-cream mb-4 font-medium">
              From intimate dinners to corporate gatherings and milestone celebrations, <span className="font-brand font-bold text-your-wine-light">{siteConfig.businessName}</span> shapes seasonal menus around the occasion. Farm-led ingredients, coastal inspiration and attentive hospitality come together in every detail.
              </p>
              <p className="text-lg md:text-xl text-your-cream mb-4 font-medium">
              Tell us how you want the gathering to feel, and we will build the menu and service around it.
              </p>

              <motion.ul
                variants={listContainer}
                initial={shouldReduceMotion ? false : 'hidden'}
                animate="visible"
                className="list-disc pl-5 text-your-cream space-y-3 text-base md:text-lg font-medium"
              >
                <motion.li variants={listItem}>
                  Seasonal menus tailored to the occasion and guest count.
                </motion.li>
                <motion.li variants={listItem}>
                  Plated dinners, cocktail receptions and private celebrations.
                </motion.li>
                <motion.li variants={listItem}>
                  Vegetarian and dietary accommodations with advance notice.
                </motion.li>
                <motion.li variants={listItem}>
                  Thoughtful planning and attentive service from the first conversation to the final course.
                </motion.li>
              </motion.ul>
            </div>
            {/* Carousel Column */}
            <div className="w-full min-w-0 md:w-1/2 flex justify-center items-center relative">
              <div className="w-full max-w-[800px] h-[420px] sm:h-[520px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-your-ivory flex items-center justify-center relative">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div key={current} custom={direction} initial={shouldReduceMotion ? false : { opacity: 0, x: direction > 0 ? 120 : -120 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction > 0 ? -120 : 120 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, type: 'spring' }} className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={cateringMedia[current].src}
                      alt={cateringMedia[current].alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                  <button type="button" onClick={handlePrev} aria-label="Previous catering image" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-your-ivory/90 p-3 text-your-wine-light shadow transition-colors hover:bg-your-orange hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-your-cream">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button type="button" onClick={handleNext} aria-label="Next catering image" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-your-ivory/90 p-3 text-your-wine-light shadow transition-colors hover:bg-your-orange hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-your-cream">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <p className="sr-only" aria-live="polite">
                  Catering image {current + 1} of {cateringMedia.length}: {cateringMedia[current].alt}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Private Events Enquiry */}
        <section className="text-center">
          <h2 className="text-3xl font-display font-bold text-your-cream mb-4">
            Private Events &amp; Catering Enquiries
          </h2>
          <p className="text-your-cream mb-4 text-2xl font-medium font-semibold max-w-3xl mx-auto">
            Every gathering is different, so each proposal is tailored to your menu, guest count and service needs.
          </p>
          <p className="text-your-cream/70 text-lg font-medium max-w-7xl mx-auto mb-4">
            Share the occasion, preferred date and group size with us. We will follow up to shape a seasonal menu and service plan around your event.
          </p>  

          <p className="text-your-cream/70 text-lg font-medium max-w-3xl mx-auto">
            Fill out the{' '}
            <Link href="/#connect" className="text-your-wine-light underline hover:opacity-80 font-semibold">
              Connect With Us
            </Link>{' '}
            form to begin your catering enquiry.
          </p>
        </section>

         {/* Contact Information and Quote Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Information */}
            <section className="bg-your-ivory rounded-xl border border-your-cream/15 shadow-lg pt-12 pb-12 px-6 h-full flex flex-col space-y-6">
              <h2 className="text-3xl font-display font-bold text-your-cream mb-8 text-center">
                Connect With Us
              </h2>

              {/* Phone & Email side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center space-x-4">
                  <Phone className="h-6 w-6 text-your-wine-light" />
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="text-your-cream/80 hover:text-your-wine-light font-medium text-lg"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-your-wine-light" />
                  <a
                    href={`mailto:${siteConfig.emailContact}`}
                    className="text-your-cream/80 hover:text-your-wine-light font-medium text-lg"
                  >
                    {siteConfig.emailContact}
                  </a>
                </div>
              </div>

              {/* Centered Location */}
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="h-6 w-6 text-your-wine-light" />
                <a
                  href={siteConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-your-cream/80 hover:text-your-wine-light text-center font-medium text-lg"
                >
                  {siteConfig.addressDisplay}
                </a>
              </div>
            </section>

            {/* Get a Quote CTA */}
            <section className="pt-12 pb-12 rounded-xl bg-your-orange overflow-hidden flex items-center justify-center h-full">
              <div className="relative z-10 max-w-xl mx-auto px-6 md:px-10 text-center space-y-4">
                <h3 className="text-3xl font-display text-white font-bold">
                  Request a Proposal
                </h3>
                <p className="text-white text-lg font-semibold leading-relaxed">
                Tell us about your event and we will help shape the right menu and service plan.
                </p>
                <PulsatingButton
                  onClick={handleQuoteClick}
                  pulseColor="rgba(255,255,255,0.5)"
                  duration="4s"
                  className="mx-auto block px-6 py-3 bg-your-ivory text-your-cream font-semibold rounded-xl shadow-lg"
                >
                  Start an Enquiry
                </PulsatingButton>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default Catering; 
