'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown, Leaf, Waves, Sparkles, Github, Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import BusinessHours from '@/components/BusinessHours';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInUpDelay = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay }
  });

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <motion.div 
          className="absolute inset-0 z-0 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Venue/dining-room-evening.webp"
            alt={`A candlelit dining room setting for ${siteConfig.businessName}`}
            fill
            className="object-cover object-[center_58%] scale-[1.25] transform-gpu md:scale-100"
            priority
          />
        </motion.div>
        <div className="relative z-20 container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-left text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="block text-white mb-2">Rooted in Farm,</span>
              <span className="block text-white">Coast &amp; Craft</span>
            </h1>
            <p className="max-w-3xl text-lg md:text-xl lg:text-2xl font-sans font-semibold text-white leading-relaxed mb-8">
              Seasonal New American cooking in the heart of Greenwich Village.
            </p>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex text-your-wine-light items-center cursor-pointer">
                <span className="mr-2">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Culinary Journey Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-your-orange/5 to-your-black relative overflow-hidden">
        {/* Decorative Elements */}
        <svg className="absolute right-1 top-1/4 w-40 h-40 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#FFD700" strokeWidth="4" fill="none" />
          <path d="M50 10 Q60 30 50 50 Q40 70 50 90" stroke="#FFD700" strokeWidth="2" fill="none" />
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-your-orange/15 via-your-orange/5 to-your-black/0 blur-2xl opacity-40 z-0"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div className="flex flex-col items-center mb-12 text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-your-cream mb-4">Our Culinary Point of View</h2>
            <div className="h-1 w-20 bg-your-orange mb-6"></div>
            <p className="max-w-4xl text-your-cream/70 text-lg">New American cooking shaped by the season, the farm and the Atlantic coast.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-6">A New York Table, Shaped by Farm &amp; Coast</h3>
              <p className="text-your-cream/90 mb-6 text-lg md:text-xl">
                {siteConfig.businessName} brings seasonal New American cooking to Greenwich Village, drawing inspiration from local farms and the Atlantic coast. Our kitchen balances timeless technique with thoughtful creativity, allowing each ingredient to remain recognizable and expressive.
              </p>
              <p className="text-your-cream/90 text-lg md:text-xl">
                Our menus move with the seasons, pairing carefully sourced produce, pasture-raised meats and pristine seafood with warm, considered hospitality. Every plate is made with intention and served without unnecessary formality.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src="/Venue/interior-floral-detail.png"
                  alt="Warm woodwork and seasonal flowers in an intimate dining room"
                  width={600}
                  height={750}
                  className="w-full aspect-[4/5] object-cover object-center rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Food Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-your-orange/5 to-your-black relative overflow-hidden">
        {/* Decorative circles */}
        <motion.div 
          className="absolute top-0 left-0 w-24 h-24 bg-your-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-48 h-48 bg-your-orange/5 rounded-full translate-x-1/3 translate-y-1/3"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-your-orange/10 rounded-full" />
        <div className="absolute left-10 bottom-20 w-3 h-3 rounded-full bg-your-orange/40" />
        <div className="absolute right-1/3 top-40 w-4 h-4 rounded-full bg-your-orange/30" />

        <div className="container mx-auto px-4 max-w-6xl relative">
          <motion.div className="flex flex-col items-center mb-12 text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-your-cream mb-4">Our Food Philosophy</h2>
            <div className="h-1 w-20 bg-your-orange mb-6"></div>
            <p className="max-w-3xl text-your-cream/70 text-lg">
              Three ideas guide every plate: seasonality, coastal freshness and thoughtful craft.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div className="bg-your-ivory border border-your-cream/15 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all" {...fadeInUpDelay(0.1)}>
              <div className="h-2 w-full bg-gradient-to-r from-your-orange to-your-black"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-your-ivory rounded-full flex items-center justify-center mr-4">
                    <Leaf aria-hidden="true" className="w-6 h-6 text-your-wine-light" />
                  </div>
                  <h3 className="text-xl font-bold text-your-cream">Seasonal Sourcing</h3>
                </div>
                <p className="text-your-cream/80">
                  Produce is selected at its peak, allowing the menu to evolve naturally throughout the year.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-your-ivory border border-your-cream/15 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all" {...fadeInUpDelay(0.2)}>
              <div className="h-2 w-full bg-gradient-to-r from-your-orange to-your-black"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-your-ivory rounded-full flex items-center justify-center mr-4">
                    <Waves aria-hidden="true" className="w-6 h-6 text-your-wine-light" />
                  </div>
                  <h3 className="text-xl font-bold text-your-cream">Coastal Freshness</h3>
                </div>
                <p className="text-your-cream/80">
                  Atlantic seafood and bright coastal ingredients bring clarity and balance to every course.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-your-ivory border border-your-cream/15 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all" {...fadeInUpDelay(0.3)}>
              <div className="h-2 w-full bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-your-ivory rounded-full flex items-center justify-center mr-4">
                    <Sparkles aria-hidden="true" className="w-6 h-6 text-your-wine-light" />
                  </div>
                  <h3 className="text-xl font-bold text-your-cream">Thoughtful Craft</h3>
                </div>
                <p className="text-your-cream/80">
                  Timeless cooking techniques meet a modern sensibility, with restraint, precision and warmth.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quality Commitment */}
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold font-display mb-6">Our Quality Commitment</h3>
              <p className="text-your-cream mb-6 text-lg">
                Every plate at {siteConfig.businessName} is built with care, using ingredients chosen for flavor, provenance and their place in the season.
              </p>
              <ul className="space-y-4 font-bold">
                <li className="flex items-center text-your-cream/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-your-wine-light mr-3 flex-shrink-0">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>Seasonal produce selected at peak flavor</span>
                </li>
                <li className="flex items-center text-your-cream/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-your-wine-light mr-3 flex-shrink-0">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>Pasture-raised meats from trusted producers</span>
                </li>
                <li className="flex items-center text-your-cream/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-your-wine-light mr-3 flex-shrink-0">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>Atlantic seafood and bright coastal ingredients</span>
                </li>
                <li className="flex items-center text-your-cream/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-your-wine-light mr-3 flex-shrink-0">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>Stocks, sauces and preparations developed in-house</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/Venue/chef-quality-focus.png"
                alt="A chef carefully finishing a dish under the pass light"
                width={600}
                height={600}
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-transparent via-your-orange/5 to-your-black relative overflow-hidden">
        {/* Decorative circles */}
        <motion.div 
          className="absolute top-0 left-0 w-24 h-24 bg-your-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-48 h-48 bg-your-orange/5 rounded-full translate-x-1/3 translate-y-1/3"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="absolute top-1/4 right-10 w-12 h-12 bg-your-orange/10 rounded-full" />
        <div className="absolute left-10 bottom-20 w-3 h-3 rounded-full bg-your-orange/40" />
        <div className="absolute right-1/3 top-40 w-4 h-4 rounded-full bg-your-orange/30" />

        <div className="container mx-auto px-4 max-w-6xl relative">
          <motion.div className="flex flex-col items-center mb-12 text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-your-cream mb-4">Hospitality with Intention</h2>
            <div className="h-1 w-20 bg-your-orange mb-6"></div>
            <p className="max-w-3xl text-your-cream/70 text-lg">
              From the kitchen to the dining room, every detail is designed to feel considered, generous and genuinely welcoming.
            </p>
          </motion.div>

          <motion.div className="mt-16 flex justify-center" {...fadeInUp}>
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="bg-your-ivory border border-your-cream/15 rounded-xl shadow-md overflow-hidden flex flex-col items-center min-h-[600px] mb-10"
                {...fadeInUpDelay(0.2)}
              >
                <div className="w-[calc(100%-2rem)] max-w-xl h-[360px] rounded-xl overflow-hidden mt-8 mb-4 border border-your-cream/15">
                  <Image
                    src="/Venue/hospitality-candlelit-table.png"
                    alt="An intimate candlelit dining room prepared for attentive evening service"
                    width={660}
                    height={843}
                    className="w-full h-full object-cover object-[center_62%]"
                    loading="lazy"
                  />
                </div>
                <div className="px-6 pt-6 pb-4 text-center">
                  <h3 className="text-xl font-display font-bold text-your-cream mb-1">Warm, Considered Service</h3>
                  <p className="text-your-wine-light font-medium mb-3">The Dorset experience</p>
                  <p className="text-your-cream">
                    We believe hospitality should be attentive without feeling formal. Our team is here to guide the experience, share the story behind the menu and make every table feel at ease from the first welcome to the final course.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gradient-to-b from-transparent via-your-orange/5 to-your-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div className="flex flex-col items-center mb-12 text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-your-cream mb-4">Inside The Dorset</h2>
            <div className="h-1 w-20 bg-your-orange mb-6"></div>
            <p className="max-w-3xl text-your-cream/70 text-lg">
              A glimpse of the room, the craft and the seasonal plates that shape an evening with us.
            </p>
          </motion.div>

          <motion.div className="mt-16" {...fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" {...fadeInUpDelay(0.1)}>
                <Image
                  src="/Gallery/seasonal-atlantic-fish.jpg"
                  alt="Pan-seared Atlantic fish with roasted potatoes and seasonal garnish"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" {...fadeInUpDelay(0.2)}>
                <Image
                  src="/Venue/interior-floral-detail.png"
                  alt="Seasonal flowers and warm wood details"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" {...fadeInUpDelay(0.3)}>
                <Image
                  src="/Gallery/coast-citrus-cocktail.jpg"
                  alt="A citrus-forward coastal cocktail with a dark salt rim"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" {...fadeInUpDelay(0.4)}>
                <Image
                  src="/Gallery/seasonal-green-salad.jpg"
                  alt="A seasonal green salad with fresh vegetables and crumbled cheese"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" {...fadeInUpDelay(0.5)}>
                <Image
                  src="/Signature/atlantic-oysters.jpg"
                  alt="Atlantic oysters with house mignonette"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" {...fadeInUpDelay(0.6)}>
                <Image
                  src="/Signature/jurassic-gin-fizz.jpg"
                  alt="A Jurassic Coast Gin Fizz cocktail"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit The Dorset Section */}
      <section className="py-20 bg-your-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <motion.div className="flex flex-col items-center mb-12 text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-your-cream mb-4">Visit The Dorset</h2>
            <div className="h-1 w-20 bg-your-wine-light mb-6"></div>
            <p className="max-w-3xl text-your-cream/80 text-lg">
              Seasonal New American dining in Greenwich Village
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div className="space-y-6" {...fadeInUpDelay(0.2)}>
              <h3 className="text-xl font-display font-extrabold mb-6 text-your-wine-light">Contact Information</h3>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-your-wine-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-your-cream">Location</p>
                  <a 
                    href={siteConfig.mapsLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-your-cream/80 hover:text-your-wine-light transition-colors flex items-center gap-1 group"
                  >
                    <span>{siteConfig.addressDisplay}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-your-wine-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-your-cream">Phone</p>
                  <a 
                    href={`tel:${siteConfig.phoneE164}`}
                    className="text-your-cream/80 hover:text-your-wine-light transition-colors flex items-center gap-1 group"
                  >
                    <span>{siteConfig.phoneDisplay}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-your-wine-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-your-cream">Email</p>
                  <a 
                    href={`mailto:${siteConfig.emailContact}`}
                    className="text-your-cream/80 hover:text-your-wine-light transition-colors flex items-center gap-1 group"
                  >
                    <span>{siteConfig.emailContact}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-your-wine-light mt-1 flex-shrink-0" />
                <BusinessHours className="w-full max-w-md" />
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-extrabold text-your-wine-light mb-2">About the Developer</h3>
                <p className="text-your-cream/80 mb-6">Built by {siteConfig.developer.name}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <a href={siteConfig.developer.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-your-cream hover:text-your-wine-light transition-colors"><Github className="w-5 h-5" />Developer GitHub</a>
                  {siteConfig.developer.instagram && <a href={siteConfig.developer.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-your-cream hover:text-your-wine-light transition-colors"><Instagram className="w-5 h-5" />Personal Instagram</a>}
                  <a href={siteConfig.developer.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-your-cream hover:text-your-wine-light transition-colors"><ExternalLink className="w-5 h-5" />View More Projects</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-8">
              <motion.div 
                className="bg-your-ivory border border-your-cream/15 rounded-xl shadow-md overflow-hidden"
                {...fadeInUpDelay(0.3)}
              >
                <div className="h-[400px]">
                  <iframe
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
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
