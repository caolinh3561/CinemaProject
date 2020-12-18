import React, { Component } from "react";
import MovieItem from "./movieItem";
import { connect } from "react-redux";
import { getMovies } from "./modules/action";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    const { movieList, loading, err } = this.props;
    // console.log(movieList);
    if (err) {
      // TODO: <ErrorMessage />
      return <p>{err || "Something went wrong"}</p>;
    }

    if (loading) {
      // TODO: <Loading />
      return <p>Loading...!!!</p>;
    }
    // var settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   arrows: true,
    //   row: 2,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // };

    return (
      <div className="container py-5">
        <div className="row">
          {movieList
            .slice()
            .reverse()
            .slice(0, 8)
            .map((item, index) => {
              return <MovieItem key={index} movie={item} />;
            })}
          {/* <Slider className="" {...settings}>
          <div className="row">
            {" "}
            {movieList.slice(0, 8).map((item, index) => {
              return <MovieItem key={index} movie={item} />;
            })}
          </div>
        </Slider> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.moviesReducer.movieList,
    loading: state.moviesReducer.loading,
    err: state.moviesReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (data) => {
      dispatch(getMovies(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
