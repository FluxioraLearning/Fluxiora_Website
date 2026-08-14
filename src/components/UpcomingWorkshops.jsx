import { upcomingWorkshops } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './UpcomingWorkshops.css';

export default function UpcomingWorkshops() {
  return (
    <section className="upcoming-workshops section-padding" id="upcoming" aria-label="Upcoming Workshops">
      <div className="container">
        <SectionHeading
          title="Upcoming Workshops"
          subtitle="Exciting new hands-on workshops coming soon. Stay tuned!"
        />

        <div className="upcoming-workshops__timeline">
          {upcomingWorkshops.map((ws, idx) => {
            const isImage = typeof ws.icon === 'string' && (ws.icon.includes('/') || ws.icon.includes('.png') || ws.icon.includes('.webp'));

            return (
              <div key={ws.id} className="upcoming-workshops__item-wrap">
                {/* Workshop Card */}
                <div
                  className="upcoming-workshops__card"
                  style={{ '--item-color': ws.color }}
                >
                  <div
                    className="upcoming-workshops__icon-wrap"
                    style={{ background: `${ws.color}14`, borderColor: `${ws.color}35` }}
                  >
                    {isImage ? (
                      <img
                        src={ws.icon}
                        alt={ws.title}
                        className="upcoming-workshops__img"
                        loading="lazy"
                      />
                    ) : (
                      <span className="upcoming-workshops__icon" aria-hidden="true">
                        {ws.icon}
                      </span>
                    )}
                  </div>
                  <div className="upcoming-workshops__info">
                    <span className="upcoming-workshops__tag" style={{ color: ws.color }}>
                      {ws.tag || 'Upcoming'}
                    </span>
                    <h3 className="upcoming-workshops__title">{ws.title}</h3>
                    <div className="upcoming-workshops__badge-wrap">
                      <span className="upcoming-workshops__badge">
                        ● Coming Soon
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connector dots & line (between cards) */}
                {idx < upcomingWorkshops.length - 1 && (
                  <div className="upcoming-workshops__connector" aria-hidden="true">
                    <span className="upcoming-workshops__connector-dot" />
                    <span className="upcoming-workshops__connector-line" />
                    <span className="upcoming-workshops__connector-dot" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="upcoming-workshops__action">
          <a
            href="#contact"
            className="upcoming-workshops__view-btn"
            aria-label="Pre-Register for upcoming workshops"
          >
            Pre-Register / Inquire Now →
          </a>
        </div>
      </div>
    </section>
  );
}
