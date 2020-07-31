import React from "react";
import styles from "../Style/App.module.css";

export function getDate() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Month = [
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
  const date = new Date();
  // const hour = date.toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  const day = String(date.getDate()).padStart(2, "0");
  const dayOfWeek = weekday[date.getDay()];
  const year = date.getFullYear();
  const month = Month[date.getMonth() + 1];
  console.log(date);
  return (
    <div>
      <h5 className={styles.date}>{dayOfWeek}</h5>
      {month} {day} {year}
    </div>
  );
}
