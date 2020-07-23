import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" placeholder="city" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}