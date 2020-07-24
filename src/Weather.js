import React from "react";
import "./Weather.css";
import axios from "axios"

export default function Weather() {
  return (
    <div className="Weather">
      <br />
      <div>
        <small> 85° </small> F|C
      </div>
    </div>
  );
}