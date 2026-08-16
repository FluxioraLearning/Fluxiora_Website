import logoHorizontal from '../assets/images/logo-horizontal.png';
import { quickLinks, resourceLinks, socialLinks } from '../data/homeData';
import './Footer.css';

const ENQUIRY_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSct-wDwIiNHZiPXttWs7en_9NlOfdiDgVIFhG7it0w-lfO2BA/viewform';

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
    wa: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.24 16C12.83 16.26 13.28 16.41 13.64 16.53C14.23 16.72 14.77 16.69 15.2 16.63C15.68 16.56 16.67 16.03 16.88 15.45C17.08 14.86 17.08 14.36 17.02 14.25C16.96 14.15 16.8 14.09 16.56 13.97C16.32 13.85 15.12 13.26 14.9 13.18C14.67 13.1 14.51 13.06 14.35 13.3C14.19 13.55 13.73 14.09 13.59 14.25C13.45 14.41 13.31 14.43 13.07 14.31C12.83 14.19 11.81 13.86 10.6 12.78C9.66 11.94 9.03 10.9 8.85 10.59C8.67 10.28 8.83 10.11 8.96 9.98C9.07 9.87 9.21 9.69 9.33 9.55C9.45 9.41 9.5 9.3 9.58 9.14C9.66 8.98 9.62 8.84 9.56 8.72C9.5 8.6 9.03 7.46 8.84 6.99C8.65 6.54 8.46 6.6 8.31 6.59C8.18 6.59 8.01 6.59 7.85 6.59L8.53 7.33Z" />
      </svg>
    ),

  };
  return icons[type] || null;
};

export default function Footer() {
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
              <a
                href={ENQUIRY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-v2__enquiry-btn"
                aria-label="Open Enquiry Google Form"
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
              </a>
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
    </footer>
  );
}
