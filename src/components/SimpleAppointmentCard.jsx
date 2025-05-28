import React from "react"
import "../style/SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ title, time, icon })=> {
  return (
    <div className={`simple-card bg-secondary-shade`}>
      <div className="simple-card__info text-secondary">
        <h4 className="simple-card__title text-secondary">{title}</h4>
        <p className="simple-card__time text-secondary">{time}</p>
      </div>
      <div className="simple-card__icon">{icon}</div>
    </div>
  )
}

export default SimpleAppointmentCard;
