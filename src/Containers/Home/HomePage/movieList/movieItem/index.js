import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { actGetMovieTrailerSource } from "./../../../Components/movieTrailerModal/modules/actions";
import "./index.scss";

class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      videoId: "",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  handlePlayTrailer = (url) => {
    // eslint-disable-next-line
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11) {
      var videoId = match[7];
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phim này hiện chưa có trailer...",
      });
      return;
    }
    this.setState({ videoId: videoId, isOpen: true });
  };

  handleClickDetailMovie = (e) => {
    if (e.target.className === "hideMovieItem") {
      this.props.history.push(`/movie/${this.props.movie.maPhim}`);
    }
  };

  render() {
    return (
      <>
        {/* <div className="col-md-3 col-sm-6 my-4 movieItem clear"> */}
        <div className=" movieItem clear">
          <div className="card">
            <div
              className="showMovieItem"
              onClick={(e) => {
                this.handleClickDetailMovie(e);
              }}
            >
              <img
                className="card-img-top"
                src={this.props.movie.hinhAnh}
                alt={this.props.movie.tenPhim}
                style={{ height: "100%", width: "100%" }}
              />
              <div className="hideMovieItem">
                <button
                  className="play__trailer"
                  onClick={() => {
                    this.handlePlayTrailer(this.props.movie.trailer);
                  }}
                >
                  <img src="/img/icon-play-video.png" alt="player__trailer" />
                </button>
              </div>
            </div>

            <div className="card-body hideHover">
              <div className="infoMovieItem">
                <h5 className="card-title">{this.props.movie.tenPhim}</h5>
                <p className="card-text">
                  Đánh giá: {this.props.movie.danhGia}
                </p>
              </div>
              <div className="btnItemMovie">
                <button
                  onClick={() =>
                    this.props.history.push(`/movie/${this.props.movie.maPhim}`)
                  }
                >
                  Đặt Vé
                </button>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          youtube={{
            autoplay: "true",
          }}
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    trailerURL: state.trailerMovieReducer.trailerURL,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actGetMovieTrailerSource: (videoId) => {
      dispatch(actGetMovieTrailerSource(videoId));
    },
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MovieItem);
