import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetMovieDetail } from "./modules/action";
import LoadingComponent from "../../Components/loading";
import HeaderComponent from "../../Components/header/header";
import NewsComponent from "../news";
import FooterComponent from "Containers/Home/Components/footer";
import "./index.scss";
import dayjs from "dayjs";
import CircularDeterminate from "./circle-component";
class MovieDetailComponent extends Component {
  componentDidMount() {
    this.props.actGetMovieDetail(this.props.match.params.id);
  }
  randomNumber() {
    return Math.round(Math.random() * (10 - 1) + 1);
  }
  renderStarReview() {
    // console.log("7/2", 7 / 2);
    // console.log("7%2", 7 % 2);
    // console.log("8/2", 8 / 2);
    // console.log("8%2", 8 % 2);
    let { movieDetail } = this.props;
    let amountStar = movieDetail.danhGia;
    // let amountStar = -1;
    let arr = [];
    if (amountStar && amountStar === 1) {
      return <img src="/img/star1.2.png" alt="" />;
    }
    if (amountStar && amountStar % 2 === 0 && amountStar > 0) {
      console.log("so chẵn");
      let a = amountStar / 2;
      for (let i = 0; i < a; i++) {
        arr.push(<img key={i} src="/img/star1.png" alt="" />);
      }
      return arr;
    }
    if (amountStar && amountStar % 2 !== 0 && amountStar > 0) {
      var a = amountStar / 2 - 0.5;
      for (let i = 0; i < a; i++) {
        arr.push(<img key={i} src="/img/star1.png" alt="" />);
      }
      arr.push(<img key={6} src="/img/star1.2.png" alt="" />);
      return arr;
    }
    return <span>Chưa có đánh giá</span>;
  }
  renderMovieDetail = () => {
    let { movieDetail } = this.props;
    if (movieDetail && movieDetail !== null) {
      return (
        <div className="movie__detail">
          <div
            className="movie__background"
            style={{
              backgroundImage: `url(${movieDetail.hinhAnh})`,
            }}
          ></div>
          <div className="movie__backgroundPlus"></div>
          <div className="row movie__content mainMaxWidth2">
            {" "}
            <div className="col-sm-3 col-xs-4 filmPoster">
              <img className="img-fluid" src={movieDetail.hinhAnh} alt="" />
            </div>
            <div className="col-sm-6">
              <div>
                <span className="showtimeMovie">
                  {dayjs(`${movieDetail.ngayKhoiChieu}`).format("DD.MM.YYYY")}
                </span>
              </div>
              <div>
                <span className="nameMovie">{movieDetail.tenPhim}</span>
              </div>
              <div>
                <span className="dcrtnMovie">{movieDetail.moTa}</span>
              </div>
              <button className="btnMovieDetail">Mua vé</button>
            </div>
            <div className="col-sm-2 reviewScore">
              <CircularDeterminate movie={this.props.movieDetail} />
              <div className="starReview">{this.renderStarReview()}</div>
              <div className="numberReview">
                {this.randomNumber()} người đánh giá
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    let { loading, err } = this.props;
    if (loading) {
      return (
        <>
          <HeaderComponent />
          <LoadingComponent />
        </>
      );
    }
    if (err) {
      return <h5>Something was wrong</h5>;
    }
    return (
      <>
        <HeaderComponent />
        <div className="movieDetail__wrapper">
          <>{this.renderMovieDetail()}</>
        </div>
        <NewsComponent />
        <FooterComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading,
    err: state.movieDetailReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetMovieDetail: (id) => {
      dispatch(actGetMovieDetail(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailComponent);
