import React from "react";
import ReactDOM from "react";
import "./style.css";

const getMonth = function () {
  return new Date().getMonth();
};

const getSeasons = function (lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  }
  if (month > 2 && month < 9) {
    return lat < 0 ? "Winter" : "Summer";
  }
};

const DisplaySeason = (props) => {
  if (getSeasons(props.lat, getMonth()) === "Summer") {
    return (
      <div>
        <i class="loading sun icon sun1"></i>
        <p className="sunText">Let's hit the beach!</p>
        <i class="loading sun icon sun2"></i>
      </div>
    );
  } else if (getSeasons(props.lat, getMonth()) === "Winter") {
    return (
      <div>
        <i class="loading snowflake icon sun1"></i>
        <p className="sunText">Burr,it's chilly!</p>
        <i class=" loading snowflake icon sun2"></i>
      </div>
    );
  }
};

export default DisplaySeason;
//<i class="snowflake icon"></i>
//<i class="sun icon"></i>quyoshcha iconi
