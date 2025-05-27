import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import SimpleAppointmentCard from "./components/SimpleAppointmentCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="app__content">
        <div className="app__grid">
          <div className="app__section app__section--overview">
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
