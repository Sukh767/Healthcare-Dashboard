import React from "react"
import SimpleAppointmentCard from "./SimpleAppointmentCard"
import { upcomingScheduleData } from "../data/upcomingScheduleData.js"
import "../style/UpcomingSchedule.css"

const UpcomingSchedule = ()=> {
  return (
    <div className="upcoming-schedule">
      <h2 className="upcoming-schedule__title">The Upcoming Schedule</h2>

      <div className="upcoming-schedule__content">
        {upcomingScheduleData.map((dayGroup, index) => (
          <div key={index}>
            <h3 className="upcoming-schedule__day">{dayGroup.day}</h3>
            <div className="upcoming-schedule__grid">
              {dayGroup.appointments.map((appointment, aptIndex) => (
                <SimpleAppointmentCard
                  key={aptIndex}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                  color={appointment.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule;