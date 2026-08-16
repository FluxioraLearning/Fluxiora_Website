import { useState, useEffect, useRef } from 'react';
import logoHorizontal from '../assets/images/logo-horizontal.png';
import './InternshipFormModal.css';

const UPCOMING_OPTIONS = [
  'MATLAB for Engineers (Engineering & Simulation)',
  'DWSIM for Chemical Engineering (Process Modeling)',
  'Python for Data Analysis (Data Science & Analytics)',
  'Artificial Intelligence & Deep Learning',
  'Cyber Security & Ethical Hacking',
  'All of the above',
];

const ACADEMIC_YEARS = [
  '1st / 2nd Year Student',
  '3rd / 4th Year (Final Year) Student',
  'Postgraduate / Master’s / PhD Scholar',
  'Working Professional / Industry Engineer',
  'Faculty / Researcher',
];

export default function PreRegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    selectedWorkshops: [],
    academicYear: '',
    suggestions: '',
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

  const handleCheckboxToggle = (option) => {
    setFormData((prev) => {
      const exists = prev.selectedWorkshops.includes(option);
      const updated = exists
        ? prev.selectedWorkshops.filter((item) => item !== option)
        : [...prev.selectedWorkshops, option];
      return { ...prev, selectedWorkshops: updated };
    });
    if (errors.selectedWorkshops) {
      setErrors((prev) => ({ ...prev, selectedWorkshops: null }));
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
    if (formData.selectedWorkshops.length === 0) {
      newErrors.selectedWorkshops = 'Please select at least one workshop';
    }
    if (!formData.academicYear) {
      newErrors.academicYear = 'This is a required question';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('.gf-card--error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

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
      selectedWorkshops: [],
      academicYear: '',
      suggestions: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="gf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Upcoming Workshops Pre-Registration Form">
      <div className="gf-modal-container" onClick={(e) => e.stopPropagation()}>
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
                  <h1 className="gf-form-title">Upcoming Workshops — Pre-Registration</h1>
                  <p className="gf-success-message">
                    Your response has been recorded.
                  </p>
                  <p className="gf-success-subtext">
                    Thank you for pre-registering! You will be among the first to receive notifications, early-bird slot reservations, and syllabus brochures when the upcoming batches launch.
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
              {/* 1. Header Card */}
              <div className={`gf-card gf-header-card ${activeCard === 'header' ? 'gf-card--active' : ''}`}>
                <div className="gf-header-accent-strip" />
                <div className="gf-card__inner">
                  <div className="gf-header-logo-row">
                    <img src={logoHorizontal} alt="Fluxiora Learning" className="gf-header-logo" />
                  </div>

                  <h1 className="gf-form-title">
                    Upcoming Workshops — Early Bird Pre-Registration
                  </h1>

                  <p className="gf-form-description">
                    Pre-register to get early access, priority seat reservations, and special early-bird discounts on upcoming workshops (MATLAB, DWSIM, Python Data Analysis, AI & Cyber Security).
                  </p>

                  <div className="gf-divider" />

                  <div className="gf-account-strip">
                    <div className="gf-account-info">
                      <span className="gf-account-icon">👤</span>
                      <span><strong>Applying as:</strong> Pre-Registered Learner &bull; Responses are submitted directly to Fluxiora Intelligence Private Limited</span>
                    </div>
                  </div>

                  <div className="gf-required-notice">
                    * Indicates required question
                  </div>
                </div>
              </div>

              {/* 2. Full Name */}
              <div
                className={`gf-card ${activeCard === 'fullName' ? 'gf-card--active' : ''} ${errors.fullName ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('fullName')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="pr-fullName">
                    Full Name <span className="gf-required">*</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <input
                      id="pr-fullName"
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

              {/* 3. Email Address */}
              <div
                className={`gf-card ${activeCard === 'email' ? 'gf-card--active' : ''} ${errors.email ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('email')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="pr-email">
                    Email Address <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">We will send launch dates and discount coupons to this email.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="pr-email"
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

              {/* 4. WhatsApp Number */}
              <div
                className={`gf-card ${activeCard === 'phone' ? 'gf-card--active' : ''} ${errors.phone ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('phone')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="pr-phone">
                    WhatsApp Contact Number <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">For instant notification when registration opens.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="pr-phone"
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

              {/* 5. College / Institute */}
              <div
                className={`gf-card ${activeCard === 'college' ? 'gf-card--active' : ''} ${errors.college ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('college')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="pr-college">
                    College / University & Branch / Degree <span className="gf-required">*</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <input
                      id="pr-college"
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

              {/* 6. Which workshops are you interested in? */}
              <div
                className={`gf-card ${activeCard === 'selectedWorkshops' ? 'gf-card--active' : ''} ${errors.selectedWorkshops ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('selectedWorkshops')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Which workshop(s) are you interested in attending? <span className="gf-required">*</span>
                  </span>
                  <p className="gf-question-subtitle">You can select one or more workshops.</p>
                  <div className="gf-radio-group">
                    {UPCOMING_OPTIONS.map((opt) => {
                      const isChecked = formData.selectedWorkshops.includes(opt);
                      return (
                        <label key={opt} className="gf-radio-label">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle(opt)}
                            onFocus={() => setActiveCard('selectedWorkshops')}
                            className="gf-radio-input"
                          />
                          <span
                            className="gf-custom-radio"
                            style={{
                              borderRadius: '4px',
                              backgroundColor: isChecked ? '#1a5cdc' : 'transparent',
                              borderColor: isChecked ? '#1a5cdc' : '#5f6368',
                              color: '#ffffff',
                              fontSize: '12px',
                              fontWeight: 'bold',
                            }}
                          >
                            {isChecked && '✓'}
                          </span>
                          <span className="gf-radio-text">{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.selectedWorkshops && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.selectedWorkshops}
                    </div>
                  )}
                </div>
              </div>

              {/* 7. Current Academic Status / Year */}
              <div
                className={`gf-card ${activeCard === 'academicYear' ? 'gf-card--active' : ''} ${errors.academicYear ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('academicYear')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Current Year of Study / Professional Status <span className="gf-required">*</span>
                  </span>
                  <div className="gf-radio-group">
                    {ACADEMIC_YEARS.map((yr) => (
                      <label key={yr} className="gf-radio-label">
                        <input
                          type="radio"
                          name="academicYear"
                          value={yr}
                          checked={formData.academicYear === yr}
                          onChange={(e) => handleChange('academicYear', e.target.value)}
                          onFocus={() => setActiveCard('academicYear')}
                          className="gf-radio-input"
                        />
                        <span className="gf-custom-radio" />
                        <span className="gf-radio-text">{yr}</span>
                      </label>
                    ))}
                  </div>
                  {errors.academicYear && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.academicYear}
                    </div>
                  )}
                </div>
              </div>

              {/* 8. Suggestions (Optional) */}
              <div
                className={`gf-card ${activeCard === 'suggestions' ? 'gf-card--active' : ''}`}
                onClick={() => setActiveCard('suggestions')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="pr-suggestions">
                    Any specific tool or topic you would like us to cover? <span className="gf-optional">(Optional)</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <textarea
                      id="pr-suggestions"
                      rows="3"
                      className="gf-textarea"
                      placeholder="Your answer"
                      value={formData.suggestions}
                      onChange={(e) => handleChange('suggestions', e.target.value)}
                      onFocus={() => setActiveCard('suggestions')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
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
    </div>
  );
}
