import SectionHeading from './SectionHeading';
import './IndustrialAI.css';

const buildingFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    title: 'Predictive Maintenance',
    desc: 'AI models to detect early warning signals and predict equipment failures before downtime occurs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
    title: 'Energy Optimization',
    desc: 'Intelligent analytics to identify energy inefficiencies and discover opportunities for better performance.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1" /></svg>
    ),
    title: 'AI Industrial Copilot',
    desc: 'An AI assistant to help engineers interact with data, understand trends and get instant insights.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
    ),
    title: 'Root Cause Analysis',
    desc: 'AI-driven analysis to investigate events, deviations and understand the real contributing factors.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
    ),
    title: 'Chemical Process Intelligence',
    desc: 'Process analytics for chemical industries to monitor performance, detect deviations and optimize operations.',
  },
];

const industries = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: 'Chemical\nIndustries' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, label: 'Fertilizer &\nAmmonia Plants' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: 'Petrochemical\nIndustries' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, label: 'Oil & Gas' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>, label: 'Refineries' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, label: 'Power &\nEnergy' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>, label: 'Process\nManufacturing' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, label: 'Industrial\nManufacturing' },
];

const workflowSteps = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>, label: 'Industrial Data' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, label: 'AI Analysis' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>, label: 'Predictive Insights' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>, label: 'Optimization' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>, label: 'Better Decisions' },
];

export default function IndustrialAI() {
  return (
    <section className="industrial-ai section-padding" id="industrial-ai" aria-label="Fluxiora Industrial AI Solutions">
      <div className="container">
        <SectionHeading
          title={<>Fluxiora <span className="iai-title-cyan">Industrial AI</span> Solutions</>}
          subtitle="Fluxiora Intelligence is developing an Industrial AI Platform that combines AI, Machine Learning, and Process Intelligence to help industries make smarter, data-driven decisions."
        />

        <div className="iai__panels">
          {/* LEFT PANEL */}
          <div className="iai__panel iai__panel--left">
            <div className="iai__panel-header">
              <div className="iai__panel-icon iai__panel-icon--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <div>
                <h3 className="iai__panel-title">What We're <span className="iai__accent">Building</span></h3>
                <p className="iai__panel-subtitle">We are building intelligent solutions that help industrial teams predict, analyze, optimize and improve their operations.</p>
              </div>
            </div>
            <ul className="iai__feature-list">
              {buildingFeatures.map((f, i) => (
                <li key={i} className="iai__feature-item">
                  <div className="iai__feature-icon">{f.icon}</div>
                  <div>
                    <h4 className="iai__feature-title">{f.title}</h4>
                    <p className="iai__feature-desc">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT PANEL */}
          <div className="iai__panel iai__panel--right">
            <div className="iai__right-top">
              <div className="iai__panel-header">
                <div className="iai__panel-icon iai__panel-icon--cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h3 className="iai__panel-title">Designed for <span className="iai__accent">Industrial Applications</span></h3>
                  <p className="iai__panel-subtitle">Our platform is being developed to support a wide range of process and manufacturing industries.</p>
                </div>
              </div>
              <div className="iai__industry-grid">
                {industries.map((ind, i) => (
                  <div key={i} className="iai__industry-item">
                    <div className="iai__industry-icon">{ind.icon}</div>
                    <span className="iai__industry-label">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="iai__workflow">
              <div className="iai__panel-header iai__panel-header--compact">
                <div className="iai__panel-icon iai__panel-icon--cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="iai__panel-title">How It Will <span className="iai__accent">Work</span></h3>
              </div>
              <div className="iai__workflow-steps">
                {workflowSteps.map((step, i) => (
                  <div key={i} className="iai__workflow-step-wrap">
                    <div className="iai__workflow-step">
                      <div className="iai__workflow-icon">{step.icon}</div>
                      <span className="iai__workflow-label">{step.label}</span>
                    </div>
                    {i < workflowSteps.length - 1 && <span className="iai__workflow-arrow">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COMING SOON BANNER */}
        <div className="iai__coming-soon">
          <div className="iai__cs-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h4 className="iai__cs-title">Coming Soon</h4>
            <p className="iai__cs-text">A new generation of Industrial Intelligence is being built.<br />Stay connected with Fluxiora Intelligence as we bring AI-powered solutions to the industrial world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
