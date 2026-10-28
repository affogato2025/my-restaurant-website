import { ExternalLink, Github, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface SocialLinksProps {
  iconSize?: number;
  spacing?: string;
  iconColor?: string;
}

const SocialLinks = ({ iconSize = 18, spacing = "space-x-2", iconColor = "text-your-cream/70" }: SocialLinksProps) => {
  const socialLinks = [
    { label: 'Developer GitHub', href: siteConfig.developer.github, icon: <Github size={iconSize} /> },
    { label: 'Personal Instagram', href: siteConfig.developer.instagram, icon: <Instagram size={iconSize} /> },
    { label: 'View More Projects', href: siteConfig.developer.portfolio, icon: <ExternalLink size={iconSize} /> },
  ].filter((link): link is typeof link & { href: string } => Boolean(link.href));

  return (
    <div className={`flex ${spacing}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconColor} hover:text-your-wine-light transition-colors`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
