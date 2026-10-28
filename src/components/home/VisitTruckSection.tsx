import { MapPin } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

const VisitTruckSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  useEffect(() => {
    const timer = setTimeout(() => { setHasAnimated(true); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-transparent via-your-orange/5 to-your-black relative overflow-hidden">
      {/* Decorative elements with parallax */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 bg-your-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ y: scrollYProgress ? scrollYProgress.get() * 20 : 0 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-your-orange/5 rounded-full translate-x-1/3 translate-y-1/3"
        style={{ y: scrollYProgress ? -scrollYProgress.get() * 20 : 0 }}
      />
      <motion.div
        className="absolute top-1/4 right-10 w-12 h-12 bg-your-orange/10 rounded-full"
        style={{ y: scrollYProgress ? scrollYProgress.get() * 10 : 0 }}
      />
      <motion.div
        className="absolute left-10 bottom-20 w-3 h-3 rounded-full bg-your-orange/40"
        animate={hasAnimated ? { y: 0, opacity: 0.6 } : { y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: hasAnimated ? 0 : Infinity, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute right-1/3 top-40 w-4 h-4 rounded-full bg-your-orange/30"
        animate={hasAnimated ? { y: 0, opacity: 0.5 } : { y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: hasAnimated ? 0 : Infinity, ease: "easeInOut", delay: 1 }}
        viewport={{ once: true }}
      />
      {/* Decorative background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-your-orange/10 via-your-orange/5 to-your-black/0 blur-2xl opacity-40 z-0 pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-your-cream mb-4">
            Visit The Dorset
          </h2>
          <div className="h-1 w-20 bg-your-orange mb-6"></div>
          <p className="max-w-3xl text-your-cream/90 text-lg">
            Join us at {siteConfig.addressDisplay} for dinner, cocktails and weekend brunch.
          </p>
        </motion.div>
        {/* Centered Map Card with Pin Overlay */}
        <div className="flex justify-center items-center w-full">
          <div className="relative w-full max-w-3xl">
            {/* Location pin overlay - move to top-right */}
            <div className="absolute -top-6 right-6 z-20 bg-your-ivory rounded-full shadow p-2 border-2 border-your-orange">
              <MapPin className="w-7 h-7 text-your-wine-light" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-your-ivory rounded-2xl shadow-2xl border border-your-orange/30 overflow-hidden w-full"
            >
              <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full">
                <iframe
                  title={`Map showing ${siteConfig.addressDisplay}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.addressDisplay)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitTruckSection;
