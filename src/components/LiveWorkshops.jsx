import workshopPoster from '../assets/images/workshop_poster.jpeg';
import SectionHeading from './SectionHeading';
import './LiveWorkshops.css';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSclD1tzkMBr6e_XE__CMYPLCiTBkrtz5o-rurlMOqURONx5_g/viewform';

export default function LiveWorkshops() {
  const pdfUrl = '/ZHSC_Workshop_Brochure.pdf';

  return (
    <section className="live-workshops section-padding" id="workshops" aria-label="Live Workshops">
      <div className="container">
        <SectionHeading
          title="Live Workshops"
          subtitle="Join our exclusive interactive live sessions, learn by doing and connect with top experts."
          badge="● LIVE"
        />

        {/* Featured Live Workshop Container */}
        <div className="live-workshop__card">
          {/* Left Column: Workshop Poster (Clickable to open PDF) */}
          <div className="live-workshop__left">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="live-workshop__poster-wrap"
              title="Click to view & download workshop brochure (PDF)"
              aria-label="View Zinc-Ion Hybrid Supercapacitor Workshop Brochure PDF"
            >
              <img
                src={workshopPoster}
                alt="Zinc-Ion Hybrid Supercapacitor (ZHSC) Workshop Poster"
                className="live-workshop__poster-img"
                loading="lazy"
              />
              <div className="live-workshop__poster-badge">
                <span className="live-workshop__poster-badge-icon" aria-hidden="true">📄</span>
                <span>Click to View Brochure (PDF)</span>
              </div>
            </a>
          </div>

          {/* Center Divider Line */}
          <div className="live-workshop__divider" aria-hidden="true" />

          {/* Right Column: Workshop Details */}
          <div className="live-workshop__right">
            {/* Top Badges */}
            <div className="live-workshop__badges">
              <span className="live-workshop__badge live-workshop__badge--live">
                ● LIVE ONLINE WORKSHOP
              </span>
              <span className="live-workshop__badge live-workshop__badge--duration">
                2 DAYS • 4 HOURS OF INSTRUCTION
              </span>
            </div>

            {/* Title */}
            <h3 className="live-workshop__title">
              Zinc-Ion Hybrid <span className="live-workshop__title-accent">Supercapacitor (ZHSC)</span>
            </h3>

            {/* Subtitle / Description */}
            <p className="live-workshop__description">
              Fundamentals to Fabrication, Electrochemical Characterization and Data Interpretation. An intensive two-day online workshop with hands-on Origin software analysis.
            </p>

            {/* Key Event Details Grid */}
            <div className="live-workshop__meta-grid">
              {/* Date */}
              <div className="live-workshop__meta-item">
                <div className="live-workshop__meta-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="live-workshop__meta-text">
                  <span className="live-workshop__meta-label">Date</span>
                  <span className="live-workshop__meta-value">17 & 18 October 2026</span>
                </div>
              </div>

              {/* Time */}
              <div className="live-workshop__meta-item">
                <div className="live-workshop__meta-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="live-workshop__meta-text">
                  <span className="live-workshop__meta-label">Time</span>
                  <span className="live-workshop__meta-value">6:00 PM – 8:00 PM IST (2hr/day)</span>
                </div>
              </div>

              {/* Fees */}
              <div className="live-workshop__meta-item live-workshop__meta-item--price">
                <div className="live-workshop__meta-icon-wrap" aria-hidden="true">
                  <span className="live-workshop__currency-symbol">₹</span>
                </div>
                <div className="live-workshop__meta-text">
                  <span className="live-workshop__meta-label">Registration Fee</span>
                  <div className="live-workshop__price-row">
                    <span className="live-workshop__meta-value live-workshop__meta-value--price">
                      ₹249
                    </span>
                    <span className="live-workshop__per-participant">Only</span>
                  </div>
                  <span className="live-workshop__early-tag">
                    ⚡ Live Online Mode
                  </span>
                </div>
              </div>

              {/* Instructor */}
              <div className="live-workshop__meta-item">
                <div className="live-workshop__meta-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="live-workshop__meta-text">
                  <span className="live-workshop__meta-label">Instructor</span>
                  <span className="live-workshop__meta-value">Mr. Vineet Patel (Research Scholar, IIT Madras)</span>
                </div>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="live-workshop__highlights">
              <h4 className="live-workshop__highlights-title">What's Included:</h4>
              <ul className="live-workshop__highlights-list">
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Electrode fabrication & characterization techniques (CV, GCD, EIS)</span>
                </li>
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Data analysis and visualization using Origin software</span>
                </li>
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Official Certificate of Participation provided to all participants</span>
                </li>
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Live interactive sessions with Q&A and doubt clarification</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons & Notice */}
            <div className="live-workshop__action-row">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="live-workshop__register-btn"
                aria-label="Open Google Form for Zinc-Ion Hybrid Supercapacitor Workshop Registration"
              >
                <span>
                  Register Now — ₹249 Only
                </span>
                <span className="live-workshop__btn-arrow">→</span>
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="live-workshop__brochure-btn"
                aria-label="View Zinc-Ion Hybrid Supercapacitor Workshop Brochure PDF"
              >
                <span aria-hidden="true">📥</span> View Brochure (PDF)
              </a>
            </div>
            <div className="live-workshop__offers-notice">
              <span className="live-workshop__early-badge-pill">
                🏷️ Registration Fee: ₹249 Only (Comprehensive 2-Day Live Training)
              </span>
              <span className="live-workshop__seats-notice">
                🔥 Limited seats available for live interactions!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
