import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  return <div className="DateTime">Last Updated:{day}</div>;
}