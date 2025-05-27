import React from 'react';
import '../style/ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <section className="activity">
      <div className="activity__header">
        <h2 className="activity__title">Activity</h2>
        <p className="activity__subtitle">3 appointments on this week</p>
      </div>

      <div className="activity__chart">
        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar activity__bar--cyan" style={{ height: '35px' }}></div>
            <div className="activity__bar activity__bar--blue" style={{ height: '20px' }}></div>
          </div>
          <div className="activity__day-label">Mon</div>
        </div>

        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar activity__bar--cyan" style={{ height: '45px' }}></div>
            <div className="activity__bar activity__bar--blue" style={{ height: '30px' }}></div>
            <div className="activity__bar activity__bar--purple" style={{ height: '15px' }}></div>
          </div>
          <div className="activity__day-label">Tues</div>
        </div>

        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar" style={{ height: '25px' }}></div>
            <div className="activity__bar activity__bar--cyan" style={{ height: '15px' }}></div>
          </div>
          <div className="activity__day-label">Wed</div>
        </div>

        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar activity__bar--cyan" style={{ height: '40px' }}></div>
            <div className="activity__bar activity__bar--blue" style={{ height: '35px' }}></div>
            <div className="activity__bar" style={{ height: '20px' }}></div>
          </div>
          <div className="activity__day-label">Thurs</div>
        </div>

        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar" style={{ height: '30px' }}></div>
            <div className="activity__bar activity__bar--blue" style={{ height: '25px' }}></div>
          </div>
          <div className="activity__day-label">Fri</div>
        </div>

        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar activity__bar--cyan" style={{ height: '50px' }}></div>
            <div className="activity__bar" style={{ height: '35px' }}></div>
            <div className="activity__bar activity__bar--purple" style={{ height: '20px' }}></div>
          </div>
          <div className="activity__day-label">Sat</div>
        </div>

        <div className="activity__day-group">
          <div className="activity__bars">
            <div className="activity__bar activity__bar--cyan" style={{ height: '30px' }}></div>
            <div className="activity__bar" style={{ height: '18px' }}></div>
          </div>
          <div className="activity__day-label">Sun</div>
        </div>
      </div>
    </section>
  );
};

export default ActivityFeed;
