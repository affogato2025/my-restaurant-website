import { Instagram, Github, MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import ContactForm from '../contact/ContactForm';
import { MotionDiv } from '../MotionDiv';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import BusinessHours from '@/components/BusinessHours';

const developerLinks = [
  { label: 'Developer GitHub', icon: Github, url: siteConfig.developer.github },
  ...(siteConfig.developer.instagram ? [{ label: 'Personal Instagram', icon: Instagram, url: siteConfig.developer.instagram }] : []),
  { label: 'View More Projects', icon: ExternalLink, url: siteConfig.developer.portfolio },
];

const ConnectSection = () => {
  return (
    <section id="connect" className="py-16 bg-your-black text-your-cream relative border-y border-your-cream/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Grid - Content */}
          <div className="space-y-8">
            <MotionDiv
              type="fadeIn"
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-your-cream mb-4">
                Connect With Us
              </h2>
              <p className="text-your-cream/80 max-w-2xl">
                Have questions about our menu, catering services, or want to know where we'll be next? 
                Reach out to us through any of the channels below.
              </p>
            </MotionDiv>

            <MotionDiv
              type="slideIn"
              delay={0.2}
              className="space-y-8"
            >
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
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
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-your-wine-light mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-your-cream">Phone</p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsappDigits}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-your-cream/80 hover:text-your-wine-light transition-colors flex items-center gap-1 group"
                    >
                      <span>{siteConfig.phoneDisplay}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-your-wine-light mt-1 flex-shrink-0" />
                  <BusinessHours className="w-full max-w-md" />
                </div>
              </motion.div>

              {/* Developer portfolio links */}
              <div className="pt-8">
                <h3 className="text-xl font-extrabold text-your-wine-light mb-2">About the Developer</h3>
                <p className="text-your-cream/80 mb-6">Built by {siteConfig.developer.name}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {developerLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-your-cream hover:text-your-wine-light transition-colors"
                      aria-label={link.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </motion.a>
                    );
                  })}
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Right Grid - Contact Form */}
          <MotionDiv
            type="slideIn"
            delay={0.4}
            className="h-full"
          >
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

