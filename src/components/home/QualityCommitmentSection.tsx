import { Calendar, Users, PartyPopper, ChefHat } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CateringAndEvents = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  useEffect(() => {
    const timer = setTimeout(() => { setHasAnimated(true); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Calendar className="w-8 h-8 text-your-wine-light" />,
      title: "Private Dining",
      description: "Gather around a seasonal menu shaped by local farms, Atlantic seafood and the pace of your occasion."
    },
    {
      icon: <Users className="w-8 h-8 text-your-wine-light" />,
      title: "Corporate Events",
      description: "Host clients and teams with polished service, flexible formats and a menu built for the room."
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-your-wine-light" />,
      title: "Celebrations",
      description: "Mark birthdays, anniversaries and milestones with warm hospitality and thoughtful seasonal cooking."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-your-wine-light" />,
      title: "Bespoke Menus",
      description: "Work with our kitchen on a menu tailored to your event, including vegetarian, vegan and gluten-free choices."
    }
  ];

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
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-your-cream">
            Catering & Events
          </h2>
          <p className="text-your-cream/70 max-w-2xl mx-auto">
            From intimate dinners to full-room celebrations, The Dorset brings seasonal New American cooking
            and attentive service to every gathering.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-your-ivory border border-your-cream/15 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-2 md:mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-1 md:mb-2 text-center text-your-cream">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-your-cream/70 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/catering"
            className="inline-flex items-center justify-center px-8 py-4 bg-your-orange hover:bg-your-orange/90 text-white rounded-full 
              font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Book Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CateringAndEvents;
