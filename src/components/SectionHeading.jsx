import './SectionHeading.css';

/**
 * Reusable section heading with decorative cyan lines.
 * @param {string} title - Main heading text
 * @param {string} [subtitle] - Optional subtitle text
 * @param {string} [badge] - Optional badge element (JSX)
 */
export default function SectionHeading({ title, subtitle, badge, centered = true }) {
  return (
    <div className={`section-heading${centered ? ' section-heading--centered' : ''}`}>
      <div className="section-heading__title-row">
        <span className="section-heading__line" aria-hidden="true" />
        <h2 className="section-heading__title">
          {title}
          {badge && <span className="section-heading__badge">{badge}</span>}
        </h2>
        <span className="section-heading__line" aria-hidden="true" />
      </div>
      {subtitle && (
        <p className="section-heading__subtitle">{subtitle}</p>
      )}
    </div>
  );
}
