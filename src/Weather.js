import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <img src="#" />
      <br />
      <div>
        <small> 85° </small>
        <a href="#" className="linkF">
          {" "}
          F{" "}
        </a>
        |
        <a href="#" className="linkC">
          {" "}
          C{" "}
        </a>
      </div>
    </div>
  );
}