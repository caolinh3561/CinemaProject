import React, { Component } from "react";
import MovieSchedule from "./movieSchedule";
import MovieList from "./movieList";
import NewsComponent from "./news";
import MagazineComponent from "./magazine";
class HomePage extends Component {
  render() {
    return (
      <>
        <h1 className="my-4 text-center" style={{ color: "#f79400" }}>
          Phim đang chiếu
        </h1>
        <MovieList />
        <MovieSchedule />
        <MagazineComponent />
        <NewsComponent />
      </>
    );
  }
}

export default HomePage;
