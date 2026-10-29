'use client';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { fadeInUp } from '@/utils/motion.variants';

const MenuHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const springConfig = { stiffness: 50, damping: 20, mass: 1 };
  const springProgress = useSpring(scrollYProgress, springConfig);

  const scale = useTransform(springProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(springProgress, [0, 1], [1, 0.7]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    void video.play().catch(() => {
      // The poster image remains visible if the browser blocks autoplay.
    });
  }, [shouldReduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70svh] flex items-center justify-center overflow-hidden bg-your-black"
    >
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 will-change-transform"
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        <Image
          src="/Signature/dry-aged-strip.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <video
          ref={videoRef}
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload={shouldReduceMotion ? 'none' : 'metadata'}
          poster="/Signature/dry-aged-strip.jpg"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center motion-reduce:hidden"
        >
          <source src="/videos/menu-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/45"></div>
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-[0.12em] leading-tight">
              <span className="text-white block">Dinner Menu</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base font-bold tracking-wide text-white/80 sm:text-lg">
              New American rooted in farm and coastal inspiration.
            </p>
          </motion.div>

                    

        </div>
      </div>
    </section>
  );
};

export default MenuHeader;
