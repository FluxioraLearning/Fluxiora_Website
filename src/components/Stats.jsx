import { stats } from '../data/homeData';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats" aria-label="Platform Statistics">
      <div className="container">
        <div className="stats__inner">
          {stats.map((stat, idx) => (
            <div key={stat.id} className="stats__item-wrap">
              <div className="stats__item">
                <span className="stats__icon" aria-hidden="true">{stat.icon}</span>
                <div className="stats__text">
                  <span className="stats__value">{stat.value}</span>
                  <span className="stats__label">{stat.label}</span>
                </div>
              </div>
              {idx < stats.length - 1 && (
                <div className="stats__separator" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
