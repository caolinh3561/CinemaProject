import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    // console.log(this.props.movie.maCumRap); //// tao ne`
    console.log(this.props.movie.lstLichChieuTheoPhim);
    return (
      <div className="row">
        <img
          src={this.props.movie.hinhAnh}
          style={{ height: "75px", width: "75px" }}
          alt={this.props.movie.tenPhim}
        />
        <h6>{this.props.movie.tenPhim}</h6>
      </div>
    );
  }
}

export default MovieItem;
