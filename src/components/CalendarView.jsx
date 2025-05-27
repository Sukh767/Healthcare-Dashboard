import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../style/CalenderView.css"
import calendarData from "../data/calendarData.js"

const CalendarView = () => {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  const appointmentCards = [
    { title: "Dentist", time: "09:00-11:00", doctor: "Dr Cameron Williamson", icon: "🦷", color: "card-blue" },
    { title: "Physiotherapy Appointment", time: "11:00-12:00", doctor: "Dr Kevin Djores", icon: "🏃", color: "card-purple" },
  ]

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2 className="calendar-title">October 2021</h2>
        <div className="calendar-nav">
          <button><ChevronLeft className="icon" /></button>
          <button><ChevronRight className="icon" /></button>
        </div>
      </div>

      <div className="calendar-week">
        <div className="calendar-days">
          {daysOfWeek.map(day => (
            <div key={day} className="day-label">{day}</div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarData.map((date, i) => (
            <div key={i} className={`date-number ${date.day === "28" ? "highlighted" : ""}`}>{date.day}</div>
          ))}
        </div>

        <div className="calendar-slots">
          {calendarData.map((date, i) => (
            <div key={i} className="slot-group">
              {date.appointments.map((apt, j) => (
                <div key={j} className={`slot ${apt.style}`}>{apt.time}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-cards">
        {appointmentCards.map((card, i) => (
          <div key={i} className={`card ${card.color}`}>
            <div>
              <h3>{card.title}</h3>
              <p>{card.time}</p>
              <p>{card.doctor}</p>
            </div>
            <div className="icon-large">{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarView
