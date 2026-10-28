import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HomeFoodCarouselSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    void video.play().catch(() => {
      // Keep the first frame visible if the browser blocks autoplay.
    });
  }, [shouldReduceMotion]);

  return (
    <section id="farm-to-table" className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-your-orange/5 to-your-black py-12 md:py-20">
      <img src="/Ingredients/mint-removebg-preview.png" alt="" aria-hidden="true" className="pointer-events-none absolute left-8 top-8 z-0 h-[80px] w-[80px] select-none rotate-12 opacity-10" />
      <img src="/Ingredients/cinamon-removebg-preview.png" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-8 right-8 z-0 h-[90px] w-[90px] -rotate-12 select-none opacity-10" />
      <svg aria-hidden="true" className="absolute right-1 top-1/4 z-0 h-40 w-40 opacity-10" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke="#691C32" strokeWidth="4" />
        <path d="M50 10 Q60 30 50 50 Q40 70 50 90" stroke="#691C32" strokeWidth="2" />
      </svg>
      <div className="absolute left-1/2 top-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-your-orange/15 via-your-orange/5 to-your-black/0 opacity-40 blur-2xl" />

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:gap-16">
        <motion.div
          className="relative flex w-full items-center justify-center md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-your-ivory shadow-2xl md:h-[600px]">
            <video
              ref={videoRef}
              autoPlay={!shouldReduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Seasonal ingredients and thoughtful cooking at The Dorset"
              className="h-full w-full object-cover object-center"
            >
              <source src="/videos/menu-background.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full text-center md:w-1/2 md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <div className="absolute -left-10 -top-10 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-your-orange/15 via-your-orange/5 to-your-black/0 opacity-60 blur-2xl" />
          <h3 className="mb-4 text-3xl font-bold leading-tight text-your-cream drop-shadow-sm md:text-4xl">
            Made with Care, From Farm &amp; Coast to your Table
          </h3>
          <p className="text-lg font-medium leading-relaxed text-your-cream/80 md:text-xl">
            Savor the spirit of the Jurassic Coast in every bite. At <span className="font-brand font-bold text-your-wine-light">The Dorset</span>, we balance timeless cooking techniques with thoughtful creativity, sourcing seasonal local produce, pasture-raised meats and pristine coastal seafood. From the first sear on the grill to the balanced aromatics of our craft cocktails, every plate and drink is rooted in nature, made with intention and served with warmth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
