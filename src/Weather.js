import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <img src="#" />
      <br />
      <div>
        <small> 85° </small>
        <p className="linkF">
          F
        </p>
        |
        <p className="linkC">
          C
        </p>
      </div>
    </div>
  );
}