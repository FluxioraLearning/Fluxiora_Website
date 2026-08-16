import { useState } from 'react';
import logoHorizontal from '../assets/images/logo-horizontal.png';
import { quickLinks, resourceLinks, socialLinks } from '../data/homeData';
import EnquiryModal from './EnquiryModal';
import './Footer.css';

const SocialIcon = ({ type }) => {
  const icons = {
    in: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    ig: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function Footer() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <footer className="footer-v2" aria-label="Site Footer">
      {/* Decorative Matrix Dots */}
      <div className="footer-v2__dots footer-v2__dots--top-right" aria-hidden="true" />
      <div className="footer-v2__dots footer-v2__dots--bottom-left" aria-hidden="true" />

      <div className="container footer-v2__inner">
        <div className="footer-v2__grid">
          {/* Column 1: Brand & Feature Highlights */}
          <div className="footer-v2__col footer-v2__col--brand">
            <a href="#home" className="footer-v2__logo-link" aria-label="Fluxiora Learning Home">
              <img src={logoHorizontal} alt="Fluxiora Learning" className="footer-v2__logo" />
            </a>

            <p className="footer-v2__tagline">LEARN • INNOVATE • GROW</p>

            <p className="footer-v2__brand-desc">
              Empowering learners, builders and future innovators through practical knowledge.
            </p>

            <div className="footer-v2__features">
              <div className="footer-v2__feature-item">
                <div className="footer-v2__feature-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <span>Practical Learning</span>
              </div>

              <div className="footer-v2__feature-item">
                <div className="footer-v2__feature-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <span>Expert Guidance</span>
              </div>

              <div className="footer-v2__feature-item">
                <div className="footer-v2__feature-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <span>Future Ready</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-v2__col">
            <h4 className="footer-v2__heading">Quick Links</h4>
            <div className="footer-v2__heading-line" aria-hidden="true" />
            <ul className="footer-v2__link-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-v2__link">
                    <span className="footer-v2__link-arrow" aria-hidden="true">&rsaquo;</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-v2__col">
            <h4 className="footer-v2__heading">Resources</h4>
            <div className="footer-v2__heading-line" aria-hidden="true" />
            <ul className="footer-v2__link-list">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-v2__link">
                    <span className="footer-v2__link-arrow" aria-hidden="true">&rsaquo;</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us & Send Enquiry */}
          <div className="footer-v2__col footer-v2__col--right">
            <h4 className="footer-v2__heading">Follow Us</h4>
            <div className="footer-v2__heading-line" aria-hidden="true" />

            {/* Social icons row */}
            <div className="footer-v2__socials">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-v2__social-btn"
                  aria-label={s.label}
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon type={s.icon} />
                </a>
              ))}
            </div>

            {/* Send Enquiry Button */}
            <div className="footer-v2__enquiry-wrap">
              <button
                type="button"
                className="footer-v2__enquiry-btn"
                onClick={() => setIsEnquiryOpen(true)}
                aria-label="Open Enquiry Form"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" />
                </svg>
                <span>Send Enquiry</span>
                <span className="footer-v2__enquiry-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-v2__bottom">
        <div className="container footer-v2__bottom-inner">
          <div className="footer-v2__copyright">
            <span className="footer-v2__copy-icon" aria-hidden="true">&copy;</span>
            <span>2026 Fluxiora Learning. All rights reserved.</span>
          </div>
          <div className="footer-v2__made-with">
            <span className="footer-v2__heart-icon" aria-hidden="true">🤍</span>
            <span>Made with passion for learners</span>
          </div>
        </div>
      </div>

      {/* Solid Teal Bottom Bar */}
      <div className="footer-v2__bottom-bar" aria-hidden="true" />

      {/* Google Form-Styled Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </footer>
  );
}

