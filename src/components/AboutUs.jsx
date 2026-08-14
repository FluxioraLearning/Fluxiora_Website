import logoHorizontal from '../assets/images/logo-horizontal.png';
import SectionHeading from './SectionHeading';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-us section-padding" id="about" aria-label="About Us">
      <div className="container">
        <SectionHeading
          title="About Us"
          subtitle="Discover our mission, vision and passion for empowering future innovators."
        />

        {/* Overlapping Dual-Card Layout matching about_section_design.png */}
        <div className="about-us__composition">
          {/* Background Soft-Blue Card */}
          <div className="about-us__bg-card">
            {/* Left Foreground White Floating Logo Card */}
            <div className="about-us__logo-card">
              <img
                src={logoHorizontal}
                alt="Fluxiora Learning"
                className="about-us__logo-img"
                loading="lazy"
              />
            </div>

            {/* Right Text Content */}
            <div className="about-us__text-content">
              <p className="about-us__paragraph">
                Fluxiora Learning is a practical technical learning platform by Fluxiora Intelligence Private Limited, focused on engineering, AI, research and industrial technologies through workshops, courses, projects, certifications and expertled learning.
              </p>

              {/* Decorative cyan/blue line with dot */}
              <div className="about-us__dec-line-wrap" aria-hidden="true">
                <span className="about-us__dec-line" />
                <span className="about-us__dec-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
