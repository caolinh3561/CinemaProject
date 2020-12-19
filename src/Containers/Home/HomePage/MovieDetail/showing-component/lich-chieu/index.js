import React from "react";
import "./index.scss";
import ShowingMovieComponent from "./showing-schedule";
export default function LichChieuComponent(props) {
  let movie = props.movie;
  return (
    <div className="mainMaxWidth2">
      <ShowingMovieComponent movie={movie} />
    </div>
  );
}
