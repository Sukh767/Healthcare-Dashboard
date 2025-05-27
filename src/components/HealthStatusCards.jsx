import React from "react";
import { healthStatusData } from "../data/healthData";
import "../style/HealthStatusCard.css"

export default function HealthStatusCards() {
  const getStatusColorClass = (status) => {
    switch (status) {
      case "good":
        return "health-card__progress--good";
      case "warning":
        return "health-card__progress--warning";
      case "critical":
        return "health-card__progress--critical";
      default:
        return "health-card__progress--default";
    }
  };

  return (
    <div className="health-cards">
      {healthStatusData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="health-card__header">
            <div className="health-card__icon">{item.icon}</div>
            <div className="health-card__info">
              <h3 className="health-card__title">{item.name}</h3>
              <p className="health-card__date">{item.date}</p>
            </div>
          </div>

          <div className="health-card__progress-bar">
            <div
              className={`health-card__progress ${getStatusColorClass(item.status)}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
