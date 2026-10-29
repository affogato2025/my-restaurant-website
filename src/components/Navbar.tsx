'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const focusClass = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-your-wine-light';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation and scroll
  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === path) {
      // If we're already on the page, scroll to top immediately
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    } else {
      // If we're navigating to a different page, navigate first
      router.push(path);
      // The useScrollToTopOnNavClick hook will handle scrolling to top
    }
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Removed payment page check since we no longer have payment pages
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-your-black/90 text-your-cream backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-lg py-3' : 'py-4'}`}>
      <div className="container relative mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-start">
          <Link
            href="/menu"
            className={`font-display font-bold uppercase tracking-[0.12em] text-sm px-2 py-2 rounded-md text-your-cream hover:text-your-wine-light transition-colors duration-300 ${focusClass}`}
            aria-current={pathname === '/menu' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/menu');
            }}
          >
            Menu
          </Link>
          <Link
            href="/catering"
            className={`font-display font-bold uppercase tracking-[0.12em] text-sm px-2 py-2 rounded-md text-your-cream hover:text-your-wine-light transition-colors duration-300 ${focusClass}`}
            aria-current={pathname === '/catering' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/catering');
            }}
          >
            Catering
          </Link>
        </nav>

        {/* Centered Logo/Title */}
        <div className="flex-1 flex min-w-0 justify-center">
          <Link
            href="/"
            className={`flex items-center rounded-md font-brand text-your-cream ${focusClass}`}
            aria-current={pathname === '/' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
          >
            <span className="font-brand text-xl sm:text-2xl md:text-3xl text-your-wine-light">{siteConfig.brandWordPrimary}</span>
            <span className="font-brand text-xl sm:text-2xl md:text-3xl ml-2 tracking-tight text-your-cream">{siteConfig.brandWordSecondary}</span>
          </Link>
        </div>

        {/* Right Nav */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-end">
          <Link
            href="/about"
            className={`font-display font-bold uppercase tracking-[0.12em] text-sm px-2 py-2 rounded-md text-your-cream hover:text-your-wine-light transition-colors duration-300 ${focusClass}`}
            aria-current={pathname === '/about' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/about');
            }}
          >
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
          <button
            className={`min-h-11 min-w-11 inline-flex items-center justify-center rounded-full text-your-cream hover:bg-your-black/10 hover:text-your-wine-light transition-colors duration-300 ${focusClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated Order */}
      {isMobileMenuOpen && <div id="mobile-navigation" className="md:hidden absolute top-full left-0 right-0 bg-your-black/98 text-your-cream backdrop-blur-md shadow-xl border-t border-your-cream/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="/"
              className={`min-h-11 px-4 py-3 font-bold hover:bg-your-orange/10 rounded-lg transition-colors text-your-cream hover:text-your-wine-light ${focusClass}`}
              aria-current={pathname === '/' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`min-h-11 px-4 py-3 font-bold hover:bg-your-orange/10 rounded-lg transition-colors text-your-cream hover:text-your-wine-light ${focusClass}`}
              aria-current={pathname === '/menu' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/menu');
              }}
            >
              Menu
            </Link>
            <Link
              href="/catering"
              className={`min-h-11 px-4 py-3 font-bold hover:bg-your-orange/10 rounded-lg transition-colors text-your-cream hover:text-your-wine-light ${focusClass}`}
              aria-current={pathname === '/catering' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/catering');
              }}
            >
              Catering
            </Link>
            <Link
              href="/about"
              className={`min-h-11 px-4 py-3 font-bold hover:bg-your-orange/10 rounded-lg transition-colors text-your-cream hover:text-your-wine-light ${focusClass}`}
              aria-current={pathname === '/about' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/about');
              }}
            >
              About Us
            </Link>
          </nav>
        </div>}
    </header>;
};

export default Navbar;
