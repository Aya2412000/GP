import React, { useState } from "react";

const TimeTable = () => {
  const [appointments, setAppointments] = useState([
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: false },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
  ]);

  const handleAppointment = (index) => {
    const newAppointments = [...appointments];
    newAppointments[index].available = !newAppointments[index].available;
    setAppointments(newAppointments);
  };

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Time</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.time}</td>
            <td>
              <button
                className={
                  appointment.available ? "btn btn-success" : "btn btn-danger"
                }
                onClick={() => handleAppointment(index)}
              >
                {appointment.available ? "Available" : "Booked"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimeTable;
