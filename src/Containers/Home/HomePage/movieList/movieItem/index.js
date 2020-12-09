import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
class MovieItem extends Component {
  render() {
    // console.log("kiem trailer", this.props.movie);
    return (
      <div
        className="col-md-3 col-sm-6 my-4 movieItem clear"
        onClick={() =>
          this.props.history.push(`/movie/${this.props.movie.maPhim}`)
        }
      >
        <div className="card">
          <div className="showMovieItem">
            <img
              className="card-img-top "
              src={this.props.movie.hinhAnh}
              alt={this.props.movie.tenPhim}
              style={{ height: "100%", width: "100%" }}
            />
            <div className="hideMovieItem">
              <button>
                <img src="/img/icon-play-video.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card-body hideHover">
            <div className="infoMovieItem">
              <h5 className="card-title">
                {this.props.movie.tenPhim.length > 0 &&
                this.props.movie.tenPhim.length < 18
                  ? this.props.movie.tenPhim
                  : this.props.movie.tenPhim.slice(0, 18) + "..."}
              </h5>
              <p className="card-text">Danh gia: {this.props.movie.danhGia}</p>
            </div>
            <div className="btnItemMovie">
              <button>MUA VÉ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
