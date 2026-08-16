import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import logoHorizontal from '../assets/images/logo-horizontal.png';
import './InternshipFormModal.css';

const ENQUIRY_TYPES = [
  'Workshop Details & Schedule',
  'Internship Program & Cohort Enrollment',
  'College / Institutional Collaboration & MoU',
  'Certificate & LOR Verification',
  'Career & Mentorship Guidance',
  'General / Other Inquiries',
];

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
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
    if (!formData.enquiryType) {
      newErrors.enquiryType = 'This is a required question';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'This is a required question';
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
      enquiryType: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return createPortal(
    <div className="gf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="General Enquiry Form">
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
                  <h1 className="gf-form-title">Fluxiora Learning — Send Enquiry</h1>
                  <p className="gf-success-message">
                    Your response has been recorded.
                  </p>
                  <p className="gf-success-subtext">
                    Thank you for reaching out to Fluxiora Learning. Our support & advisory team will review your query and get back to you via Email or WhatsApp within 24 business hours.
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
                    Fluxiora Learning — General Enquiry & Support
                  </h1>

                  <p className="gf-form-description">
                    Have questions about our live workshops, cohort internships, certifications, or institutional partnerships? Submit your enquiry below and our team will get in touch with you promptly.
                  </p>

                  <div className="gf-divider" />

                  <div className="gf-account-strip">
                    <div className="gf-account-info">
                      <span className="gf-account-icon">👤</span>
                      <span><strong>Applying as:</strong> Inquirer &bull; Responses are submitted directly to Fluxiora Intelligence Private Limited</span>
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
                  <label className="gf-question-title" htmlFor="eq-fullName">
                    Full Name <span className="gf-required">*</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <input
                      id="eq-fullName"
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
                  <label className="gf-question-title" htmlFor="eq-email">
                    Email Address <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">We will send our official response and detailed information to this email.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="eq-email"
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
                  <label className="gf-question-title" htmlFor="eq-phone">
                    WhatsApp Contact Number <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">For quick resolution and direct communication.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="eq-phone"
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

              {/* 5. Nature of Enquiry */}
              <div
                className={`gf-card ${activeCard === 'enquiryType' ? 'gf-card--active' : ''} ${errors.enquiryType ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('enquiryType')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Topic / Category of Enquiry <span className="gf-required">*</span>
                  </span>
                  <div className="gf-radio-group">
                    {ENQUIRY_TYPES.map((type) => (
                      <label key={type} className="gf-radio-label">
                        <input
                          type="radio"
                          name="enquiryType"
                          value={type}
                          checked={formData.enquiryType === type}
                          onChange={(e) => handleChange('enquiryType', e.target.value)}
                          onFocus={() => setActiveCard('enquiryType')}
                          className="gf-radio-input"
                        />
                        <span className="gf-custom-radio" />
                        <span className="gf-radio-text">{type}</span>
                      </label>
                    ))}
                  </div>
                  {errors.enquiryType && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.enquiryType}
                    </div>
                  )}
                </div>
              </div>

              {/* 6. Message */}
              <div
                className={`gf-card ${activeCard === 'message' ? 'gf-card--active' : ''} ${errors.message ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('message')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="eq-message">
                    How can we help you? (Your Message / Query) <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">Please provide details so we can assist you effectively.</p>
                  <div className="gf-input-wrapper">
                    <textarea
                      id="eq-message"
                      rows="4"
                      className="gf-textarea"
                      placeholder="Your answer"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onFocus={() => setActiveCard('message')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.message && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.message}
                    </div>
                  )}
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
    </div>,
    document.body
  );
}
