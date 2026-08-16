import { useState } from 'react';
import workshopPoster from '../assets/images/workshop_poster.jpeg';
import SectionHeading from './SectionHeading';
import WorkshopRegistrationModal from './WorkshopRegistrationModal';
import './LiveWorkshops.css';

export default function LiveWorkshops() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const pdfUrl = '/workshop_molecular_docking.pdf';

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
              aria-label="View Molecular Docking Workshop Brochure PDF"
            >
              <img
                src={workshopPoster}
                alt="New Horizons of Drug Discovery: Molecular Docking"
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
                3 DAYS • 6 HOURS OF INSTRUCTION
              </span>
            </div>

            {/* Title */}
            <h3 className="live-workshop__title">
              New Horizons of Drug Discovery: <span className="live-workshop__title-accent">Molecular Docking</span>
            </h3>

            {/* Subtitle / Description */}
            <p className="live-workshop__description">
              An intensive three-day online workshop to learn the principles and modern techniques of molecular docking from fundamentals to AI-powered approaches.
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
                  <span className="live-workshop__meta-value">6 – 8 September 2026</span>
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
                  <span className="live-workshop__meta-value">7:00 PM – 9:00 PM (2hr per day)</span>
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
                    <span className="live-workshop__price-cut">₹399</span>
                    <span className="live-workshop__meta-value live-workshop__meta-value--price">
                      ₹299
                    </span>
                    <span className="live-workshop__per-participant">/ Per Participant</span>
                  </div>
                  <span className="live-workshop__early-tag">
                    ⚡ For early 50 participants only
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
                  <span className="live-workshop__meta-value">Mr. Utkarsh Tripathi (PhD Scholar, IIT Kanpur)</span>
                </div>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="live-workshop__highlights">
              <h4 className="live-workshop__highlights-title">What's Included:</h4>
              <ul className="live-workshop__highlights-list">
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Hands-on training on AutoDock, ChimeraX, PyRx & DiffDock</span>
                </li>
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Official E-Certificate of Participation provided to all participants</span>
                </li>
                <li>
                  <span className="live-workshop__check" aria-hidden="true">✓</span>
                  <span>Live interactive sessions with Q&A and doubt clarification</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons & Notice */}
            <div className="live-workshop__action-row">
              <button
                type="button"
                className="live-workshop__register-btn"
                onClick={() => setIsRegisterModalOpen(true)}
                aria-label="Open Registration Form for Molecular Docking Workshop"
              >
                <span>
                  Register Now — <span className="live-workshop__btn-cut">₹399</span> ₹299
                </span>
                <span className="live-workshop__btn-arrow">→</span>
              </button>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="live-workshop__brochure-btn"
                aria-label="View Molecular Docking Workshop Brochure PDF"
              >
                <span aria-hidden="true">📥</span> View Brochure (PDF)
              </a>
            </div>
            <div className="live-workshop__offers-notice">
              <span className="live-workshop__early-badge-pill">
                🏷️ Special Offer: ₹299 for early 50 participants only (Regular ₹399)
              </span>
              <span className="live-workshop__seats-notice">
                🔥 Limited seats available for live interactions!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Form-Styled Live Workshop Registration Modal */}
      <WorkshopRegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </section>
  );
}

