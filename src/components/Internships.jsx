import SectionHeading from './SectionHeading';
import './Internships.css';

const INTERNSHIP_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdPnvpbPZcizM_vGWJxzdxx8CI2kxHGLA6_cKs2Ye0cDZ8M9A/viewform';

const internshipPerks = [
  {
    icon: '📜',
    title: 'Verified Certificate & LOR',
    desc: 'Receive an official verified completion certificate and performance-based Letter of Recommendation.',
  },
  {
    icon: '💻',
    title: 'Hands-On Live Projects',
    desc: 'Work on real-world projects and build a portfolio that stands out to recruiters and industry leaders.',
  },
  {
    icon: '👨‍🏫',
    title: '1-on-1 Expert Mentorship',
    desc: 'Regular doubt-clearing sessions, live guidance and code reviews from experienced industry mentors.',
  },
  {
    icon: '🚀',
    title: 'Career & Placement Support',
    desc: 'Resume optimization, LinkedIn profile review, and interview preparation support for your career growth.',
  },
];

export default function Internships() {
  return (
    <section className="internships section-padding" id="internships" aria-label="Internship Programs">
      <div className="container">
        <SectionHeading
          title="Internships"
          subtitle="Kickstart your career with practical hands-on live projects, personalized mentorship and verified industry credentials."
          badge="● ENROLLING NOW"
        />

        {/* Perks Grid */}
        <div className="internships__perks-grid">
          {internshipPerks.map((perk, index) => (
            <div key={index} className="internships__perk-card">
              <div className="internships__perk-icon" aria-hidden="true">
                {perk.icon}
              </div>
              <div className="internships__perk-content">
                <h4 className="internships__perk-title">{perk.title}</h4>
                <p className="internships__perk-desc">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout & Apply Banner */}
        <div className="internships__cta-banner">
          <div className="internships__cta-content">
            <div className="internships__cta-badge">⚡ Cohort Applications Open</div>
            <h3 className="internships__cta-heading">
              Ready to Gain Practical Industry Experience?
            </h3>
            <p className="internships__cta-text">
              Join our internship programs to work on industry-relevant assignments, get mentored by experts, and accelerate your tech career.
            </p>
          </div>
          <div className="internships__cta-action">
            <a
              href={INTERNSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="internships__cta-btn"
              aria-label="Apply for Internship via Google Form"
            >
              <span>Apply for Internship</span>
              <span className="internships__btn-arrow">→</span>
            </a>
            <span className="internships__cta-subtext">Limited slots available per cohort</span>
          </div>
        </div>
      </div>
    </section>
  );
}
