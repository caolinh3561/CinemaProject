import React from "react";
import "./index.scss";
import HeThongRapComponent from "./heThongRapComponent";
import CumRapComponent from "./cumRapComponent";
export default function ShowingMovieComponent(props) {
  let movie = props.movie;
  return (
    <div className="d-flex">
      <div className="showingHTR__content">
        <HeThongRapComponent />
      </div>
      <div>
        <CumRapComponent movie={movie} />
      </div>
    </div>
  );
}
