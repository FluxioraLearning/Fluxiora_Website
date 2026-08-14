import { ourVisionSteps } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './VisionStrip.css';

// SVG Icons matching out_vision_section_design.png exactly
const StepIcon = ({ type, color }) => {
  switch (type) {
    case 'book':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="9" y1="7" x2="16" y2="7" />
          <line x1="9" y1="11" x2="16" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </svg>
      );
    case 'practice':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <circle cx="12" cy="5" r="2.5" />
          <path d="M9 13v-3a3 3 0 0 1 6 0v3" />
          <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
          <line x1="4" y1="13" x2="20" y2="13" />
          <line x1="18" y1="13" x2="18" y2="21" />
          <line x1="6" y1="13" x2="6" y2="21" />
        </svg>
      );
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case 'certificate':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <line x1="7" y1="7" x2="13" y2="7" />
          <line x1="7" y1="10" x2="11" y2="10" />
          <circle cx="16" cy="17" r="3" />
          <path d="M15 20l-1 2 2-1 2 1-1-2" />
        </svg>
      );
    case 'codeLaptop':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <rect x="4" y="4" width="16" height="11" rx="1.5" />
          <path d="M9 8.5l-2 1.5 2 1.5M15 8.5l2 1.5-2 1.5" />
          <path d="M2 19h20" strokeWidth="2" />
        </svg>
      );
    case 'network':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <circle cx="12" cy="7" r="2.8" />
          <path d="M6 19v-1.5a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5V19" />
          <circle cx="5" cy="10" r="2" />
          <path d="M1.5 19v-1a2.5 2.5 0 0 1 2.5-2.5h.5" />
          <circle cx="19" cy="10" r="2" />
          <path d="M22.5 19v-1a2.5 2.5 0 0 0-2.5-2.5h-.5" />
        </svg>
      );
    case 'puzzle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <path d="M19.4 7.8c0-1.6-1.3-2.8-2.8-2.8H14.5a2.5 2.5 0 0 1-5 0H7.4c-1.6 0-2.8 1.3-2.8 2.8v2.1a2.5 2.5 0 0 1 0 5v2.1c0 1.6 1.3 2.8 2.8 2.8h2.1a2.5 2.5 0 0 0 5 0h2.1c1.6 0 2.8-1.3 2.8-2.8v-2.1a2.5 2.5 0 0 0 0-5V7.8z" />
        </svg>
      );
    case 'portfolio':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M2 13h20" />
          <circle cx="12" cy="13" r="1.5" fill={color} />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="vision-step__svg">
          <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
          <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
          <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
          <path d="M12 16v4M8 20h8" />
        </svg>
      );
    default:
      return null;
  }
};

export default function VisionStrip() {
  return (
    <section className="our-vision section-padding" id="vision" aria-label="Our Vision">
      {/* Decorative background dot patterns */}
      <div className="our-vision__dots our-vision__dots--left" aria-hidden="true" />
      <div className="our-vision__dots our-vision__dots--right" aria-hidden="true" />

      <div className="container">
        {/* Section Heading with Italic Subtitle */}
        <div className="our-vision__heading-wrap">
          <SectionHeading
            title="Our Vision"
            subtitle="The Path to Your Success"
          />
        </div>

        {/* 9-Step Roadmap Timeline */}
        <div className="our-vision__timeline-scroll">
          <div className="our-vision__timeline">
            {/* Background connecting gradient bar */}
            <div className="our-vision__connector-bar" aria-hidden="true" />

            {/* 9 Individual Steps */}
            {ourVisionSteps.map((stepItem, idx) => {
              const nextStep = ourVisionSteps[idx + 1];
              return (
                <div
                  key={stepItem.id}
                  className="vision-step"
                  style={{
                    '--step-color': stepItem.color,
                    '--step-glow': `${stepItem.color}33`,
                    '--next-color': nextStep ? nextStep.color : stepItem.color,
                  }}
                >
                  {/* Circle Node with Icon */}
                  <div className="vision-step__circle-wrap">
                    <div className="vision-step__circle">
                      <StepIcon type={stepItem.icon} color={stepItem.color} />
                    </div>
                  </div>

                  {/* Dotted vertical dropdown line */}
                  <div className="vision-step__dotted-line" aria-hidden="true" />

                  {/* Step Number Badge */}
                  <div className="vision-step__badge">
                    <span>{stepItem.step}</span>
                  </div>

                  {/* Step Text Content */}
                  <div className="vision-step__content">
                    <h3 className="vision-step__title">{stepItem.title}</h3>
                    <p className="vision-step__desc">{stepItem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
