import logoSquare from '../assets/images/logo-square.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero Section">
      <div className="hero__container container">
        {/* Left Content */}
        <div className="hero__content">
          <span className="hero__eyebrow">LEARN &bull; INNOVATE &bull; GROW</span>

          <h1 className="hero__heading">
            <span className="hero__heading-blue">Fluxiora </span>
            <span className="hero__heading-cyan">Learning</span>
          </h1>

          <p className="hero__description">
            Fluxiora Learning is a community-driven platform empowering learners, builders
            and future innovators through practical knowledge, hands-on workshops and
            real-world projects.
          </p>

          <p className="hero__description hero__description--secondary">
            Whether you&rsquo;re a student, developer or professional, we help you learn
            faster, build smarter and grow together.
          </p>

          <div className="hero__actions">
            <a href="#workshops" className="hero__btn hero__btn--primary">
              Explore Workshops <span className="hero__btn-arrow">→</span>
            </a>
            <a href="#about" className="hero__btn hero__btn--secondary">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual" aria-hidden="true">
          {/* Decorative background blobs */}
          <div className="hero__blob hero__blob--circle" />
          <div className="hero__blob hero__blob--blue" />
          <div className="hero__blob hero__blob--cyan" />

          {/* Tech dots pattern */}
          <div className="hero__dots">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="hero__dot" />
            ))}
          </div>

          {/* Logo card floating composition */}
          <div className="hero__logo-card">
            <img src={logoSquare} alt="Fluxiora Learning" className="hero__logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
