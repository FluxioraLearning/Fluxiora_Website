import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section" aria-label="Call to Action">
      <div className="container">
        <div className="cta-section__inner">
          {/* Left: Text */}
          <div className="cta-section__content">
            <h2 className="cta-section__heading">
              Ready to Build a Better Tomorrow?
            </h2>
            <p className="cta-section__description">
              Join Fluxiora Learning and turn your curiosity into career success.
            </p>
            <a href="#workshops" className="cta-section__btn">
              Get Started Today →
            </a>
          </div>

          {/* Right: Illustration (SVG inline) */}
          <div className="cta-section__illustration" aria-hidden="true">
            {/* Professional inline SVG illustration of a developer */}
            <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="cta-section__svg">
              {/* Background decorative circles */}
              <circle cx="180" cy="110" r="90" fill="rgba(255,255,255,0.08)" />
              <circle cx="180" cy="110" r="60" fill="rgba(255,255,255,0.08)" />

              {/* Laptop body */}
              <rect x="60" y="100" width="140" height="88" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <rect x="68" y="108" width="124" height="68" rx="4" fill="rgba(255,255,255,0.12)" />

              {/* Screen code lines */}
              <rect x="76" y="118" width="60" height="5" rx="2.5" fill="rgba(0,180,200,0.7)" />
              <rect x="76" y="128" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.5)" />
              <rect x="76" y="138" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.35)" />
              <rect x="76" y="148" width="70" height="5" rx="2.5" fill="rgba(0,180,200,0.5)" />
              <rect x="76" y="158" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />

              {/* Laptop base/keyboard */}
              <rect x="40" y="188" width="180" height="10" rx="5" fill="rgba(255,255,255,0.25)" />

              {/* Person seated */}
              {/* Head */}
              <circle cx="185" cy="62" r="22" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              {/* Body */}
              <path d="M163 84 Q185 92 207 84 L207 110 Q185 118 163 110 Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

              {/* Plants / leaves decoration */}
              <ellipse cx="30" cy="180" rx="16" ry="28" fill="rgba(0,180,200,0.25)" transform="rotate(-15 30 180)" />
              <ellipse cx="20" cy="175" rx="10" ry="22" fill="rgba(0,180,200,0.18)" transform="rotate(10 20 175)" />
              <ellipse cx="240" cy="175" rx="14" ry="26" fill="rgba(0,180,200,0.22)" transform="rotate(12 240 175)" />

              {/* Small floating elements */}
              <circle cx="50" cy="80" r="6" fill="rgba(255,255,255,0.3)" />
              <circle cx="230" cy="60" r="5" fill="rgba(255,255,255,0.25)" />
              <circle cx="240" cy="130" r="4" fill="rgba(0,180,200,0.5)" />
              <circle cx="35" cy="120" r="3" fill="rgba(255,255,255,0.4)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
