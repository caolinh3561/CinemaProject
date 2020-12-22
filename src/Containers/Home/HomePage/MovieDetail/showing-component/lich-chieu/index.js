import React from "react";
import "./index.scss";
import ShowingMovieComponent from "./showing-schedule";
export default function LichChieuComponent(props) {
  let movie = props.movie;
  return (
    <div
      className="mainMaxWidth2"
      style={{ transition: "all 0.2s", padding: "0px auto" }}
    >
      <ShowingMovieComponent movie={movie} />
    </div>
  );
}
