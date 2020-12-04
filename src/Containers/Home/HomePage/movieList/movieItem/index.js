import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class MovieItem extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6 my-2">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.movie.hinhAnh}
            alt={this.props.movie.tenPhim}
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.movie.tenPhim.length > 0 &&
              this.props.movie.tenPhim.length < 18
                ? this.props.movie.tenPhim
                : this.props.movie.tenPhim.slice(0, 18) + "..."}
            </h5>
            <p className="card-text">Danh gia: {this.props.movie.danhGia}</p>
            <button
              className="btn btn-success"
              onClick={() =>
                this.props.history.push(`/movie/${this.props.movie.maPhim}`)
              }
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
