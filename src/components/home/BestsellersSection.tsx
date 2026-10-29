import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import BestsellerCard from '@/components/BestsellerCard';
import { SpinningText } from '@/components/magicui/spinning-text';
import { fadeInUp } from '@/utils/motion.variants';
import AnimatedCardGrid, { AnimatedCard } from '@/components/AnimatedCardGrid';

const BestsellersSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Set hasAnimated to true after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000); // Wait for initial animation to complete
    
    return () => clearTimeout(timer);
  }, []);

  // Representative licensed photography; source details live in public/Signature/IMAGE_CREDITS.md.
  const bestsellers = [{
    id: 1,
    title: 'Dry-Aged New York Strip',
    description: 'Local grass-fed beef, roasted roots and red wine jus.',
    price: '$42',
    imageSrc: '/Signature/dry-aged-strip.jpg',
    category: 'From the farm'
  }, {
    id: 2,
    title: 'Half-Dozen Atlantic Oysters',
    description: 'Fresh Atlantic oysters with house mignonette and cocktail sauce.',
    price: '$22',
    imageSrc: '/Signature/atlantic-oysters.jpg',
    category: 'From the coast'
  }, {
    id: 3,
    title: 'Jurassic Coast Gin Fizz',
    description: 'London dry gin, sea salt, lemon and a soft botanical finish.',
    price: '$16',
    imageSrc: '/Signature/jurassic-gin-fizz.jpg',
    category: 'From the cellar'
  }];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-transparent via-your-burgundy/5 to-your-black pb-16 pt-8 md:pb-20 md:pt-12 lg:pb-24 lg:pt-16"
    >
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
        className="absolute top-1/4 left-10 w-12 h-12 bg-your-orange/10 rounded-full"
        style={{ y: scrollYProgress ? scrollYProgress.get() * 10 : 0 }}
      />
      
      <motion.div 
        className="absolute left-10 bottom-20 w-3 h-3 rounded-full bg-your-orange/40"
        animate={hasAnimated ? { 
          y: 0,
          opacity: 0.6
        } : { 
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: hasAnimated ? 0 : Infinity,
          ease: "easeInOut"
        }}
        viewport={{ once: true }}
      ></motion.div>
      
      <motion.div 
        className="absolute right-1/3 top-40 w-4 h-4 rounded-full bg-your-orange/30"
        animate={hasAnimated ? { 
          y: 0,
          opacity: 0.5
        } : { 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: hasAnimated ? 0 : Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        viewport={{ once: true }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center h-full">
          {/* Title with enhanced animation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-your-cream font-display leading-tight">
              <motion.span
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="block mb-2"
              >
                The Dorset Signatures
              </motion.span>
            </h2>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-your-cream/70 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Three expressions of our kitchen: pasture-raised ingredients, pristine Atlantic seafood
              and cocktails shaped by herbs, citrus and the coast.
            </motion.p>
          </motion.div>

          {/* Bestseller Cards Grid */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mt-8 md:mt-4"
          >
            <AnimatedCardGrid columns={{ sm: 1, md: 3, lg: 3 }} gap={8} staggerDelay={0.15}>
              {bestsellers.map((item) => (
                <AnimatedCard key={item.id}>
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: '0 16px 48px rgba(105, 28, 50, 0.28)' }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="overflow-hidden rounded-xl border border-your-cream/15 bg-your-ivory shadow-lg transition-all duration-300 hover:border-your-wine-light/40 hover:shadow-2xl">
                      <div className="p-0">
                        <div className="relative">
                          <SpinningText className="text-your-wine-light bg-transparent text-[0.6rem]">
                            farm • coast • cellar • farm • coast • cellar •
                          </SpinningText>
                          <BestsellerCard {...item} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </AnimatedCardGrid>
          </motion.div>

          {/* View Menu Button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-12 text-center"
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-your-orange hover:bg-your-orange/90 text-white rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-your-wine-light"
            >
              View Full Menu
              <ChevronRight size={18} className="shrink-0 text-white" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection; 
