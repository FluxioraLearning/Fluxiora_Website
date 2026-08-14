import { useState, useEffect } from 'react';
import logoHorizontal from '../assets/images/logo-horizontal.png';
import { navLinks } from '../data/homeData';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Handle scroll detection and accurate active link spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // If at top of the page, active is Home
      if (window.scrollY < 200) {
        setActiveLink('Home');
        return;
      }

      // If scrolled near bottom of page, active is Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveLink('Contact');
        return;
      }

      const sections = [
        { id: 'contact', label: 'Contact' },
        { id: 'about', label: 'About Us' },
        { id: 'upcoming', label: 'Courses' },
        { id: 'workshops', label: 'Workshops' },
      ];

      for (const { id, label } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element is in the active reading range of viewport
          if (rect.top <= 220 && rect.bottom >= 100) {
            setActiveLink(label);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.header__mobile-nav') && !e.target.closest('.header__hamburger')) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  // Smooth scroll handler with exact header offset
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link.label);
    if (mobileOpen) setMobileOpen(false);

    if (link.href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = link.href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        {/* Logo */}
        <a
          href="#home"
          className="header__logo"
          aria-label="Fluxiora Learning Home"
          onClick={(e) => handleNavClick(e, { label: 'Home', href: '#home' })}
        >
          <img src={logoHorizontal} alt="Fluxiora Learning" className="header__logo-img" />
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`header__nav-link${activeLink === link.label ? ' header__nav-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`header__hamburger${mobileOpen ? ' header__hamburger--open' : ''}`}
          aria-label="Toggle mobile navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`header__mobile-nav${mobileOpen ? ' header__mobile-nav--open' : ''}`} aria-hidden={!mobileOpen}>
        <nav className="header__mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`header__mobile-link${activeLink === link.label ? ' header__mobile-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
