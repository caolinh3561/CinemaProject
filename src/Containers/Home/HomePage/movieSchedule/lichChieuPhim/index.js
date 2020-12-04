import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetScheduleMovie } from "./modules/actions";
import MovieItem from "./movieItem";

class LichChieuPhimComponent extends Component {
  componentDidMount = () => {
    // console.log(this.props.maHTR);
    this.props.actGetScheduleMovie(this.props.maHTR, "GP01");
  };
  componentDidUpdate(prevProps) {
    if (this.props.maHTR !== prevProps.maHTR) {
      this.props.actGetScheduleMovie(this.props.maHTR, "GP01");
    }
  }
  // ham render ra danhSachPhim (lichChieuTheoHTR[0].lstCumRap.maCumRap = props)
  getMovieList = () => {
    let movieList = [];
    let { lichChieuTheoHTR, maCumRap } = this.props;
    if (lichChieuTheoHTR && lichChieuTheoHTR !== null && maCumRap !== null) {
      movieList = lichChieuTheoHTR[0].lstCumRap;

      console.log(movieList, "movieList");
      return movieList.map((item, index) => {
        return item.maCumRap === maCumRap ? item.danhSachPhim : null;
      });
    }
  };
  renderMovies = () => {
    const movieList = this.getMovieList();
    if (movieList && movieList.length > 0) {
      let lastMovieList = movieList.filter((item) => {
        return item !== null;
      });
      if (lastMovieList[0] && lastMovieList[0] !== null) {
        return lastMovieList[0].map((item) => {
          return <MovieItem key={item.maPhim} movie={item} />;
        });
      }
      // return movieList.map((item) => {
      //   if (item !== null) {
      //     return item.map((res, index) => {
      //       return <MovieItem key={index} movie={res} />;
      //     });
      //   }
      // });
    }
  };
  render() {
    return <>{this.renderMovies()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    lichChieuTheoHTR: state.lichChieuPhimReducer.lichChieuTheoHTR,
    maHTR: state.hTCRReducer.maHTR,
    maCumRap: state.lichChieuPhimReducer.maCumRap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetScheduleMovie: (maHTR, maNhom) => {
      dispatch(actGetScheduleMovie(maHTR, maNhom));
    },
    actGetMaCumRap: (data) =>
      dispatch({ type: "GET_MA_CUM_RAP", payload: data }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LichChieuPhimComponent);
