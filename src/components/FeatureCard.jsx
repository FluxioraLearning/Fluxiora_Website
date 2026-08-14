import { featureCards } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './FeatureCard.css';

function FeatureCard({ icon, title, description, offset, delay, animClass }) {
  return (
    <div
      className={`feature-card feature-card--${offset || 'low'} ${animClass || ''}`}
      style={{
        '--base-y': offset === 'high' ? '-24px' : '0px',
        '--anim-delay': delay || '0s',
      }}
    >
      <div className="feature-card__icon-halo" aria-hidden="true">
        <div className="feature-card__icon-wrapper">
          <img
            src={icon}
            alt={title}
            className="feature-card__img-icon"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <div className="feature-card__title-line" aria-hidden="true" />
      <p className="feature-card__description">{description}</p>
    </div>
  );
}

export default function WhatWeProvide() {
  return (
    <section className="what-we-provide section-padding" id="provide" aria-label="What We Provide">
      {/* Decorative background dot patterns */}
      <div className="what-we-provide__dots what-we-provide__dots--left" aria-hidden="true" />
      <div className="what-we-provide__dots what-we-provide__dots--right" aria-hidden="true" />

      <div className="container">
        <SectionHeading
          title="What We Provide & Our Vision"
          subtitle="Empowering learners with practical knowledge, real-world exposure and a vision for a better future."
        />
        <div className="feature-cards__grid-wrap">
          <div className="feature-cards__grid">
            {featureCards.map((card, idx) => (
              <FeatureCard
                key={card.id}
                {...card}
                animClass={idx % 2 === 0 ? 'feature-card--orbit-cw' : 'feature-card--orbit-ccw'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
