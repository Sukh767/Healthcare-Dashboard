import React from "react"
import "../style/SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ title, time, icon, color })=> {
  return (
    <div className={`simple-card ${color}`}>
      <div className="simple-card__info">
        <h4 className="simple-card__title">{title}</h4>
        <p className="simple-card__time">{time}</p>
      </div>
      <div className="simple-card__icon">{icon}</div>
    </div>
  )
}

export default SimpleAppointmentCard;
