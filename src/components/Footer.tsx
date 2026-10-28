'use client';
import Link from 'next/link';
import { Github, Instagram, ExternalLink, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import BusinessHours from '@/components/BusinessHours';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setNewsletterMessage('Please enter your email address.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);
    setNewsletterMessage('Opening your email app. Send the prepared email to complete your subscription.');

    // Open email client with newsletter subscription request
    const subject = encodeURIComponent('Newsletter Subscription Request');
    const body = encodeURIComponent(`Please subscribe this email to your newsletter: ${email.trim()}`);
    window.location.href = `mailto:${siteConfig.emailContact}?subject=${subject}&body=${body}`;
    
    setEmail(''); // Clear the input
    setIsSubscribing(false);
  };

  return <footer className="bg-your-black text-your-cream pt-12 pb-2 border-t border-your-cream/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="max-w-xs space-y-2">
              <p className="text-your-cream/80">
                Join our newsletter for the latest updates and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="mt-2" noValidate>
                <div className="relative w-64">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubscribing}
                    className="w-full px-4 py-3 pr-12 bg-your-black/5 border border-your-cream/35 rounded-xl text-your-cream placeholder:text-your-cream/55 focus:outline-none focus:border-your-wine-light focus:ring-2 focus:ring-your-wine-light/40 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    aria-label="Subscribe by email"
                    className="absolute inset-y-0 right-2 min-h-11 min-w-11 flex items-center justify-center text-your-cream/80 hover:text-your-wine-light focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-your-wine-light"></div>
                    ) : (
                      <Send size={20} />
                    )}
                  </button>
                </div>
              </form>
              <p className="mt-2 min-h-5 text-sm text-your-cream/80" role="status" aria-live="polite">
                {newsletterMessage}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-extrabold mb-4 text-your-wine-light">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-your-cream/80 hover:text-your-wine-light transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-your-cream/80 hover:text-your-wine-light transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-your-cream/80 hover:text-your-wine-light transition-colors duration-200">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-your-cream/80 hover:text-your-wine-light transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-extrabold mb-4 text-your-wine-light">Get in Touch</h3>
            <ul className="space-y-3 text-your-cream/80">
              <li className="flex items-center">
                <MapPin size={18} className="text-your-wine-light mr-2 flex-shrink-0" />
                <a 
                  href={siteConfig.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-your-wine-light transition-colors"
                >
                  {siteConfig.addressDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-your-wine-light mr-2 flex-shrink-0" />
                <a href={`mailto:${siteConfig.emailContact}`} className="hover:text-your-wine-light transition-colors">{siteConfig.emailContact}</a>
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-your-wine-light mr-2 flex-shrink-0"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
                <a href={`https://wa.me/${siteConfig.whatsappDigits}`} className="hover:text-your-wine-light transition-colors">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-your-wine-light mr-2 mt-0.5 flex-shrink-0" />
                <BusinessHours compact className="w-full" />
              </li>
            </ul>
          </div>

          {/* Developer portfolio links */}
          <div>
            <h3 className="text-lg font-display font-extrabold mb-4 text-your-wine-light">About the Developer</h3>
            <p className="mb-4 text-your-cream/80">Built by {siteConfig.developer.name}</p>
            <ul className="space-y-3 text-your-cream/80">
              <li><a href={siteConfig.developer.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-your-wine-light transition-colors"><Github size={18} />Developer GitHub</a></li>
              {siteConfig.developer.instagram && <li><a href={siteConfig.developer.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-your-wine-light transition-colors"><Instagram size={18} />Personal Instagram</a></li>}
              <li><a href={siteConfig.developer.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-your-wine-light transition-colors"><ExternalLink size={18} />View More Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6 mb-2 md:mb-2">
          <Link href="/" className="inline-block">
            <h2 className="flex items-center justify-center w-[85vw] mx-auto">
              <span className="font-brand text-[8vw] md:text-[10vw] text-your-wine-light leading-none">{siteConfig.brandWordPrimary} </span>
              <span className="font-brand text-[8vw] md:text-[10vw] font-bold ml-3 tracking-tight text-your-cream leading-none">{siteConfig.brandWordSecondary}</span>
            </h2>
          </Link>
        </div>
        <div className="border-t border-your-cream/15 mt-1 pt-3 pb-4 flex flex-col md:flex-row justify-between items-center text-your-cream/60 text-sm">
          <p className="mb-1 md:mb-0">Built by <a href={siteConfig.developer.github} target="_blank" rel="noopener noreferrer" className="text-your-wine-light hover:text-your-cream transition-colors">{siteConfig.developer.name}</a></p>
          <p>© {currentYear} {siteConfig.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
