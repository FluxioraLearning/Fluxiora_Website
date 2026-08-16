import { useState, useEffect, useRef } from 'react';
import logoHorizontal from '../assets/images/logo-horizontal.png';
import './InternshipFormModal.css';

const ACADEMIC_STATUS = [
  'Undergraduate Student (B.Pharm / B.Tech / B.Sc)',
  'Postgraduate Student (M.Pharm / M.Tech / M.Sc)',
  'PhD / Research Scholar',
  'Faculty / Academician',
  'Industry Professional / Scientist',
  'Other',
];

const EXPERIENCE_LEVELS = [
  'Complete Beginner (No prior experience needed)',
  'Basic Knowledge (Know the theory, want practical hands-on)',
  'Intermediate / Advanced (Looking for AI-powered DiffDock & advanced workflows)',
];

export default function WorkshopRegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    department: '',
    academicStatus: '',
    experienceLevel: '',
    questions: '',
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
    if (!formData.institution.trim()) {
      newErrors.institution = 'This is a required question';
    }
    if (!formData.department.trim()) {
      newErrors.department = 'This is a required question';
    }
    if (!formData.academicStatus) {
      newErrors.academicStatus = 'This is a required question';
    }
    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'This is a required question';
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
      institution: '',
      department: '',
      academicStatus: '',
      experienceLevel: '',
      questions: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="gf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Workshop Registration Form">
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
                  <h1 className="gf-form-title">Live Workshop Registration — Molecular Docking</h1>
                  <p className="gf-success-message">
                    Your response has been recorded.
                  </p>
                  <p className="gf-success-subtext">
                    Thank you for registering for <strong>New Horizons of Drug Discovery: Molecular Docking</strong> (6 – 8 September 2026). Our team will send session joining instructions and live link access to your registered Email & WhatsApp.
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
                    Live Workshop Registration: New Horizons of Drug Discovery (Molecular Docking)
                  </h1>

                  <p className="gf-form-description">
                    <strong>Dates:</strong> 6 – 8 September 2026 &bull; <strong>Time:</strong> 7:00 PM – 9:00 PM (IST)<br />
                    <strong>Instructor:</strong> Mr. Utkarsh Tripathi (PhD Scholar, IIT Kanpur)<br />
                    <strong>Fee:</strong> ₹299 for early 50 participants (Regular ₹399) &bull; Includes Official E-Certificate of Participation & Hands-on Software Training (AutoDock, ChimeraX, PyRx & DiffDock).
                  </p>

                  <div className="gf-divider" />

                  <div className="gf-account-strip">
                    <div className="gf-account-info">
                      <span className="gf-account-icon">👤</span>
                      <span><strong>Applying as:</strong> Participant &bull; Responses are submitted directly to Fluxiora Intelligence Private Limited</span>
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
                  <label className="gf-question-title" htmlFor="wf-fullName">
                    Full Name <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">This exact name will appear on your official E-Certificate.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="wf-fullName"
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
                  <label className="gf-question-title" htmlFor="wf-email">
                    Email Address <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">Live workshop meeting links, software installation files and certificates will be sent here.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="wf-email"
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
                  <label className="gf-question-title" htmlFor="wf-phone">
                    WhatsApp Contact Number <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">For urgent workshop coordination and live session reminders.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="wf-phone"
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

              {/* 5. Institution / Organization */}
              <div
                className={`gf-card ${activeCard === 'institution' ? 'gf-card--active' : ''} ${errors.institution ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('institution')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="wf-institution">
                    College / University / Institute / Organization <span className="gf-required">*</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <input
                      id="wf-institution"
                      type="text"
                      className="gf-text-input"
                      placeholder="Your answer"
                      value={formData.institution}
                      onChange={(e) => handleChange('institution', e.target.value)}
                      onFocus={() => setActiveCard('institution')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.institution && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.institution}
                    </div>
                  )}
                </div>
              </div>

              {/* 6. Department / Specialization */}
              <div
                className={`gf-card ${activeCard === 'department' ? 'gf-card--active' : ''} ${errors.department ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('department')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="wf-department">
                    Department / Branch / Specialization <span className="gf-required">*</span>
                  </label>
                  <p className="gf-question-subtitle">e.g. Pharmacy, Biotechnology, Chemistry, Life Sciences, Chemical Engg, Bioinformatics, etc.</p>
                  <div className="gf-input-wrapper">
                    <input
                      id="wf-department"
                      type="text"
                      className="gf-text-input"
                      placeholder="Your answer"
                      value={formData.department}
                      onChange={(e) => handleChange('department', e.target.value)}
                      onFocus={() => setActiveCard('department')}
                    />
                    <div className="gf-input-underline" />
                  </div>
                  {errors.department && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.department}
                    </div>
                  )}
                </div>
              </div>

              {/* 7. Current Academic Status / Designation */}
              <div
                className={`gf-card ${activeCard === 'academicStatus' ? 'gf-card--active' : ''} ${errors.academicStatus ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('academicStatus')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Current Status / Qualification <span className="gf-required">*</span>
                  </span>
                  <div className="gf-radio-group">
                    {ACADEMIC_STATUS.map((status) => (
                      <label key={status} className="gf-radio-label">
                        <input
                          type="radio"
                          name="academicStatus"
                          value={status}
                          checked={formData.academicStatus === status}
                          onChange={(e) => handleChange('academicStatus', e.target.value)}
                          onFocus={() => setActiveCard('academicStatus')}
                          className="gf-radio-input"
                        />
                        <span className="gf-custom-radio" />
                        <span className="gf-radio-text">{status}</span>
                      </label>
                    ))}
                  </div>
                  {errors.academicStatus && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.academicStatus}
                    </div>
                  )}
                </div>
              </div>

              {/* 8. Prior Experience Level */}
              <div
                className={`gf-card ${activeCard === 'experienceLevel' ? 'gf-card--active' : ''} ${errors.experienceLevel ? 'gf-card--error' : ''}`}
                onClick={() => setActiveCard('experienceLevel')}
              >
                <div className="gf-card__inner">
                  <span className="gf-question-title">
                    Prior Experience with Molecular Docking / PyRx / ChimeraX <span className="gf-required">*</span>
                  </span>
                  <div className="gf-radio-group">
                    {EXPERIENCE_LEVELS.map((exp) => (
                      <label key={exp} className="gf-radio-label">
                        <input
                          type="radio"
                          name="experienceLevel"
                          value={exp}
                          checked={formData.experienceLevel === exp}
                          onChange={(e) => handleChange('experienceLevel', e.target.value)}
                          onFocus={() => setActiveCard('experienceLevel')}
                          className="gf-radio-input"
                        />
                        <span className="gf-custom-radio" />
                        <span className="gf-radio-text">{exp}</span>
                      </label>
                    ))}
                  </div>
                  {errors.experienceLevel && (
                    <div className="gf-error-msg">
                      <span className="gf-error-icon">⚠️</span> {errors.experienceLevel}
                    </div>
                  )}
                </div>
              </div>

              {/* 9. Questions for the Instructor (Optional) */}
              <div
                className={`gf-card ${activeCard === 'questions' ? 'gf-card--active' : ''}`}
                onClick={() => setActiveCard('questions')}
              >
                <div className="gf-card__inner">
                  <label className="gf-question-title" htmlFor="wf-questions">
                    Any specific queries or topics you would like to cover? <span className="gf-optional">(Optional)</span>
                  </label>
                  <div className="gf-input-wrapper">
                    <textarea
                      id="wf-questions"
                      rows="3"
                      className="gf-textarea"
                      placeholder="Your answer"
                      value={formData.questions}
                      onChange={(e) => handleChange('questions', e.target.value)}
                      onFocus={() => setActiveCard('questions')}
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
