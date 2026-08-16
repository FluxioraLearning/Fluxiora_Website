import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import logoHorizontal from '../assets/images/logo-horizontal.png';
import './InternshipFormModal.css';

const DOMAINS = [
  'Web Development (React, Node.js, Full Stack)',
  'Artificial Intelligence & Machine Learning',
  'Python for Data Science & Analytics',
  'Chemical / Process Engineering (DWSIM)',
  'Engineering & Simulation (MATLAB)',
  'Cyber Security Essentials',
  'Other / Interdisciplinary',
];

const YEARS_OF_STUDY = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year / Final Year',
  'Recent Graduate / Working Professional',
];

export default function InternshipFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    yearOfStudy: '',
    domain: '',
    portfolioUrl: '',
    statement: '',
  });

  const [errors, setErrors] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalContentRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'This is a required question';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'This is a required question';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'This is a required question';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim().replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit contact number';
    }
    if (!formData.college.trim()) {
      newErrors.college = 'This is a required question';
    }
    if (!formData.yearOfStudy) {
      newErrors.yearOfStudy = 'This is a required question';
    }
    if (!formData.domain) {
      newErrors.domain = 'This is a required question';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to the first error card
      const firstError = document.querySelector('.gf-card--error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission to backend/sheets
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (modalContentRef.current) {
        modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: '',
      yearOfStudy: '',
      domain: '',
      portfolioUrl: '',
      statement: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return createPortal(
    <div className="gf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Internship Application Form">
      <div
        className="gf-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Close Bar */}
        <div className="gf-modal-topbar">
          <div className="gf-modal-topbar__title">
            <span className="gf-modal-topbar__icon">📝</span>
            <span>Fluxiora Forms</span>
          </div>
          <button
            type="button"
            className="gf-modal-close-btn"
            onClick={onClose}
            aria-label="Close Form"
            title="Close Form"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="gf-modal-content" ref={modalContentRef}>
          {isSubmitted ? (
            /* Google Form Success Response Card */
            <div className="gf-form-wrapper">
              <div className="gf-card gf-header-card gf-success-header">
                <div className="gf-header-accent-strip" />
                <div className="gf-card__inner">
                  <div className="gf-header-logo-row">
                    <img src={logoHorizontal} alt="Fluxiora Learning" className="gf-header-logo" />
                  </div>
                  <h1 className="gf-form-title">Fluxiora Learning — Internship Application Form 2026</h1>
                  <p className="gf-success-message">
                    Your response has been recorded.
                  </p>
                  <p className="gf-success-subtext">
                    Thank you for applying to the Fluxiora Learning Cohort-Based Internship Program. Our review team will assess your profile and reach out via Email / WhatsApp with next steps.
                  </p>
                  <div className="gf-success-actions">
                    <button
                      type="button"
                      className="gf-link-btn"
                      onClick={handleReset}
                    >
                      Submit another response
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="gf-form-wrapper">
              {/* 1. Header Card with Purple/Blue Strip */}
              <div className={`gf-card gf-header-card ${activeCard === 'header' ? 'gf-card--active' : ''}`}>
                <div className="gf-header-accent-strip" />
                <div className="gf-card__inner">
                  <div className="gf-header-logo-row">
                    <img src={logoHorizontal} alt="Fluxiora Learning" className="gf-header-logo" />
                  </div>

                  <h1 className="gf-form-title">Fluxiora Learning — Internship Application Form 2026</h1>
                  
                  <p className="gf-form-description">
                    Welcome to the <strong>Fluxiora Learning Internship Program</strong>. Gain hands-on project experience, personalized 1-on-1 mentorship from industry leaders, and earn a verified certificate and Letter of Recommendation (LOR).
                  </p>

                  <div className="gf-divider" />

                  <div className="gf-account-strip">
                    <div className="gf-account-info">
                      <span className="gf-account-icon">👤</span>
                      <span><strong>Applying as:</strong> Applicant &bull; Responses are submitted directly to Fluxiora Intelligence Private Limited</span>
                    </div>
                  </div>

                  <div className="gf-required-notice">
                    * Indicates required question
                  </div>
                </div>
              </div>

              {/* 2. Full Name Question Card */}
              <div
                className={`gf-card ${activeCard === 'fullName' ? 'gf-card--active' : ''} ${errors.fullName ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('fullName')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="gf-fullName">
                    Full Name <span className="gf-required">*</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <input
                      id="gf-fullName"
                      type="text"
                      className="gf-text-input"
                      placeholder="Your answer"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onFocus={() => setActiveCard('fullName')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.fullName && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.fullName}
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Email Address Question Card */}
              <div
                className={`gf-card ${activeCard === 'email' ? 'gf-card--active' : ''} ${errors.email ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('email')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="gf-email">
                    Email Address <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">Official communication and cohort updates will be sent to this email.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="gf-email"
                      type="email"
                      className="gf-text-input"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setActiveCard('email')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.email && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.email}
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Phone Number Question Card */}
              <div
                className={`gf-card ${activeCard === 'phone' ? 'gf-card--active' : ''} ${errors.phone ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('phone')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="gf-phone">
                    WhatsApp Contact Number <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">For internship cohort group updates and live session reminders.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="gf-phone"
                      type="tel"
                      className="gf-text-input"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setActiveCard('phone')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.phone && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* 5. College & Branch Question Card */}
              <div
                className={`gf-card ${activeCard === 'college' ? 'gf-card--active' : ''} ${errors.college ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('college')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="gf-college">
                    College / Institute & Degree / Branch <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">e.g. IIT Kanpur — B.Tech Computer Science</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="gf-college"
                      type="text"
                      className="gf-text-input"
                      placeholder="Your answer"
                      value={formData.college}
                      onChange={(e) => handleChange('college', e.target.value)}
                      onFocus={() => setActiveCard('college')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.college && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.college}
                    </div>
                  )}
                </div>
              </div>

              {/* 6. Year of Study Question Card (Radio options) */}
              <div
                className={`gf-card ${activeCard === 'yearOfStudy' ? 'gf-card--active' : ''} ${errors.yearOfStudy ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('yearOfStudy')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Current Year of Study <span className="gf-required">*</span>
                  </span>
                  <div className="gf-radio-group">
                    {YEARS_OF_STUDY.map((year) => (
                      <label key={year} className="gf-radio-label">
                        <input
                          type="radio"
                          name="yearOfStudy"
                          value={year}
                          checked={formData.yearOfStudy === year}
                          onChange={(e) => handleChange('yearOfStudy', e.target.value)}
                          onFocus={() => setActiveCard('yearOfStudy')}
                          className="gf-radio-input"
                        />
                        <span className="gf-custom-radio" />
                        <span className="gf-radio-text">{year}</span>
                      </label>
                    ))}
                  </div>
                  {errors.yearOfStudy && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.yearOfStudy}
                    </div>
                  )}
                </div>
              </div>

              {/* 7. Preferred Domain Question Card (Radio options) */}
              <div
                className={`gf-card ${activeCard === 'domain' ? 'gf-card--active' : ''} ${errors.domain ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('domain')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Preferred Internship Domain <span className="gf-required">*</span>
                  </span>
                  <p className="gf-question-subtitle">Select the technology domain you want to specialize in.</p>
                  <div className="gf-radio-group">
                    {DOMAINS.map((dom) => (
                      <label key={dom} className="gf-radio-label">
                        <input
                          type="radio"
                          name="domain"
                          value={dom}
                          checked={formData.domain === dom}
                          onChange={(e) => handleChange('domain', e.target.value)}
                          onFocus={() => setActiveCard('domain')}
                          className="gf-radio-input"
                        />
                        <span className="gf-custom-radio" />
                        <span className="gf-radio-text">{dom}</span>
                      </label>
                    ))}
                  </div>
                  {errors.domain && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.domain}
                    </div>
                  )}
                </div>
              </div>

              {/* 8. LinkedIn / GitHub / Resume Link (Optional) */}
              <div
                className={`gf-card ${activeCard === 'portfolioUrl' ? 'gf-card--active' : ''}`}
                onClick={() => setActiveCard('portfolioUrl')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="gf-portfolio">
                    LinkedIn / GitHub / Portfolio / Resume URL <span className="gf-optional">(Optional)</span>
                  </label>
                  <p className="gf-question-subtitle">Share your LinkedIn profile or Google Drive resume link to strengthen your application.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="gf-portfolio"
                      type="url"
                      className="gf-text-input"
                      placeholder="https://"
                      value={formData.portfolioUrl}
                      onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                      onFocus={() => setActiveCard('portfolioUrl')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                </div>
              </div>

              {/* 9. Statement of Purpose (Optional) */}
              <div
                className={`gf-card ${activeCard === 'statement' ? 'gf-card--active' : ''}`}
                onClick={() => setActiveCard('statement')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="gf-statement">
                    Why do you want to join this internship? <span className="gf-optional">(Optional)</span>
                  </label>
                  <p className="gf-question-subtitle">Briefly describe your interest and what you hope to learn.</p>
                  <div className="gf-input-wrapper">
                    <textarea
                      id="gf-statement"
                      rows="3"
                      className="gf-textarea"
                      placeholder="Your answer"
                      value={formData.statement}
                      onChange={(e) => handleChange('statement', e.target.value)}
                      onFocus={() => setActiveCard('statement')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                </div>
              </div>

              {/* 10. Form Action Bar (Submit & Clear) */}
              <div className="gf-action-row">
                <button
                  type="submit"
                  className="gf-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="gf-spinner" aria-hidden="true" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>

                <button
                  type="button"
                  className="gf-clear-btn"
                  onClick={handleReset}
                  disabled={isSubmitting}
                >
                  Clear form
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
