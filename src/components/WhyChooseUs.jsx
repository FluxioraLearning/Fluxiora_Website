import { useState } from 'react';
import { whyChoosePoints, testimonials } from '../data/homeData';
import './WhyChooseUs.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__quote-icon" aria-hidden="true">"</div>
      <p className="testimonial-card__text">{testimonial.quote}</p>
      <div className="testimonial-card__author">
        <div
          className="testimonial-card__avatar"
          style={{ background: `linear-gradient(135deg, ${testimonial.color}44, ${testimonial.color})` }}
          aria-hidden="true"
        >
          <span>{testimonial.initials}</span>
        </div>
        <div className="testimonial-card__author-info">
          <span className="testimonial-card__name">{testimonial.name}</span>
          <span className="testimonial-card__role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleDot = (idx) => setActiveTestimonial(idx);

  return (
    <section className="why-choose-us section-padding" aria-label="Why Choose Fluxiora Learning">
      <div className="container">
        <div className="why-choose-us__grid">
          {/* Left column */}
          <div className="why-choose-us__left">
            <h2 className="why-choose-us__heading">
              Why Learners Choose<br />
              <span className="why-choose-us__heading-accent">Fluxiora Learning?</span>
            </h2>

            <ul className="why-choose-us__list" aria-label="Key benefits">
              {whyChoosePoints.map((point, idx) => (
                <li key={idx} className="why-choose-us__list-item">
                  <span className="why-choose-us__check" aria-hidden="true">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a href="#workshops" className="why-choose-us__btn">
              Join Our Community →
            </a>
          </div>

          {/* Right column — Testimonials */}
          <div className="why-choose-us__right">
            <h3 className="why-choose-us__testimonials-heading">What Our Learners Say</h3>

            {/* Show all 3 cards on desktop, carousel on mobile */}
            <div className="why-choose-us__testimonials-grid">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>

            {/* Mobile carousel dots */}
            <div className="why-choose-us__dots" aria-label="Testimonial navigation">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`why-choose-us__dot${activeTestimonial === idx ? ' why-choose-us__dot--active' : ''}`}
                  onClick={() => handleDot(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
