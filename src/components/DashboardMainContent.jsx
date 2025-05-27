import React from "react";
import "../style/DashboardMainContent.css";
import { BellIcon, SearchIcon, Plus, User } from "lucide-react";

import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import CalenderView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <section className="dashboard-main__left">
        <div className="dashboard-main__header">
          <div className="dashboard-main__searchbar">
            <SearchIcon className="dashboard-main__search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <button className="dashboard-main__bell">
            <BellIcon fill="#1e2a78" />
          </button>
        </div>

        <div className="dashboard-main__middle">
          <div className="dashboard-main__anatomy">
            <AnatomySection />
          </div>
          <div className="dashboard-main__health-cards">
            <HealthStatusCards />
          </div>
        </div>

        <div className="dashboard-main__activity">
          <ActivityFeed />
        </div>
      </section>

      <section className="dashboard-main__right">
        <div className="dashboard-main__right-header">
          <div className="icon-profile">
          <User  />
          </div>
          <div className="icon-plus">
          <Plus />
          </div>
        </div>

        <div className="dashboard-main__calendar">
          <CalenderView/>
        </div>
        <div className="dashboard-main__schedule">
          <UpcomingSchedule />
        </div>
      </section>
    </main>
  );
};

export default DashboardMainContent;
