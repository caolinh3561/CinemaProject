import React, { Component } from "react";
import MovieItem from "./movieItem";
import { connect } from "react-redux";
import { getMovies } from "./modules/action";

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    const { movieList, loading, err } = this.props;

    if (err) {
      // TODO: <ErrorMessage />
      return <p>{err || "Something went wrong"}</p>;
    }

    if (loading) {
      // TODO: <Loading />
      return <p>Loading...!!!</p>;
    }
    return (
      <div className="container">
        <div className="row">
          {movieList.slice(1, 9).map((item, index) => {
            return <MovieItem key={index} movie={item} />;
          })}
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
