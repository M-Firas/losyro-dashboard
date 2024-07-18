import React, { useState } from "react";
import "./Setters.css";

// Calendar
import { Calendar } from "rsuite";
import "rsuite/Calendar/styles/index.css";

const Setters = () => {
  const [date, setDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="setters--container">
      <div className="calendar">
        <div className="calender--header">
          <div className="header--left">
            <p>{monthNames[date.getMonth()]}</p>
            <button onClick={handlePreviousMonth}>
              <img src="/icons/arrowLeft.svg" alt="" />
            </button>
            <button onClick={handleNextMonth}>
              <img src="/icons/arrowRight.svg" alt="" />
            </button>
          </div>
          <div className="header--right">{date.getFullYear()}</div>
        </div>

        <div className="calendar--content">
        <Calendar  value={date} onChange={setDate} />
        <div className="setter--info">
          <div className="info--item">
          <p>Setter 22  :  20%</p>
          </div>
          <div className="info--item">
          <p>Setter 23  :  20%</p>
          </div>
          <div className="info--item">
          <p>Setter 24  :  20%</p>
          </div>
          <div className="info--item">
          <p>Setter 25  :  20%</p>
          </div>
          <div className="info--item">
          <p>Setter 26  :  20%</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Setters;
