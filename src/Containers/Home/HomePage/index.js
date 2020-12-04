import React, { Component } from "react";
import MovieSchedule from "./movieSchedule";
import MovieList from "./movieList";

class HomePage extends Component {
  render() {
    return (
      <>
        <h1 className="my-4 text-center text-success">Phim đang chiếu</h1>
        <MovieList />
        <MovieSchedule />
      </>
    );
  }
}

export default HomePage;
