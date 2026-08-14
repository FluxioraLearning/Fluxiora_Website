import SectionHeading from './SectionHeading';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <section className="contact-us section-padding" id="contact" aria-label="Contact Us">
      <div className="container">
        <SectionHeading
          title="Contact Us"
          subtitle="Have questions about our workshops, certifications, or collaborations? Reach out directly to our team."
        />

        {/* Single Unified Contact Card */}
        <div className="contact-card__unified">
          {/* Top Section: Founder & Co-Founder Side-by-Side */}
          <div className="contact-unified__founders-row">
            {/* Founder: Ambar Pandey */}
            <div className="contact-unified__person">
              <h3 className="contact-unified__name">
                <span className="contact-unified__role" style={{ color: '#1a5cdc' }}>
                  Founder:
                </span>{' '}
                Ambar Pandey
              </h3>
              <div className="contact-unified__details">
                <div className="contact-unified__detail-row">
                  <span className="contact-unified__label">Email:</span>
                  <a
                    href="mailto:Pandeyambar12345@gmail.com"
                    className="contact-unified__link"
                    aria-label="Send email to Ambar Pandey at Pandeyambar12345@gmail.com"
                  >
                    Pandeyambar12345@gmail.com
                  </a>
                </div>
                <div className="contact-unified__detail-row">
                  <span className="contact-unified__label">Phone:</span>
                  <a
                    href="tel:7565952518"
                    className="contact-unified__link"
                    aria-label="Call Ambar Pandey at 7565952518"
                  >
                    7565952518
                  </a>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line between Founder & Co-Founder */}
            <div className="contact-unified__v-divider" aria-hidden="true" />

            {/* Co-Founder: Nishchay Tripathi */}
            <div className="contact-unified__person">
              <h3 className="contact-unified__name">
                <span className="contact-unified__role" style={{ color: '#00b4c8' }}>
                  Co-Founder:
                </span>{' '}
                Nishchay Tripathi
              </h3>
              <div className="contact-unified__details">
                <div className="contact-unified__detail-row">
                  <span className="contact-unified__label">Email:</span>
                  <a
                    href="mailto:nishchaytripathi.2006@gmail.com"
                    className="contact-unified__link"
                    aria-label="Send email to Nishchay Tripathi at nishchaytripathi.2006@gmail.com"
                  >
                    nishchaytripathi.2006@gmail.com
                  </a>
                </div>
                <div className="contact-unified__detail-row">
                  <span className="contact-unified__label">Phone:</span>
                  <a
                    href="tel:9335207070"
                    className="contact-unified__link"
                    aria-label="Call Nishchay Tripathi at 9335207070"
                  >
                    9335207070
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Divider Line between Founders and Organization */}
          <div className="contact-unified__h-divider" aria-hidden="true" />

          {/* Bottom Section: Organization Details */}
          <div className="contact-unified__org-row">
            <div className="contact-unified__org-col">
              <span className="contact-unified__org-label">Organization</span>
              <span className="contact-unified__org-val">Fluxiora Intelligence Private Limited</span>
            </div>

            <div className="contact-unified__org-col">
              <span className="contact-unified__org-label">Official Inquiries</span>
              <a
                href="mailto:fluxioratech@gmail.com"
                className="contact-unified__link contact-unified__link--accent"
                aria-label="Send email to fluxioratech@gmail.com"
              >
                fluxioratech@gmail.com
              </a>
            </div>

            <div className="contact-unified__org-col">
              <span className="contact-unified__org-label">Website</span>
              <a
                href="https://www.fluxioraintelligence.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-unified__link contact-unified__link--accent"
              >
                www.fluxioraintelligence.co.in ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
