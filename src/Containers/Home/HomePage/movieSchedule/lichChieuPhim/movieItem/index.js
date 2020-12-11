import { Button } from "@material-ui/core";
import React, { Component } from "react";
import dayjs from "dayjs";
import "./index.scss";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  handleOnClick = (item) => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    if (user) {
      this.props.history.push(`/checkout/${item.maLichChieu}`);
    }
  };

  renderSuatchieu = () => {
    const { movie, now } = this.props;
    const { lstLichChieuTheoPhim } = movie;
    return lstLichChieuTheoPhim.map((item) => {
      if (dayjs(item.ngayChieuGioChieu).format("DD/MM/YYYY") === now)
        return (
          <Button
            key={item.maLichChieu}
            className="btn__datVe"
            onClick={() => {
              this.handleOnClick(item);
            }}
          >
            {dayjs(item.ngayChieuGioChieu).format("HH:mm")} ~{" "}
            {dayjs(item.ngayChieuGioChieu).add("2", "hour").format("HH:mm")}
          </Button>
        );
    });
  };
  renderMovie = () => {
    const { movie } = this.props;
    return (
      <div key={movie.maPhim} className="movie__item row">
        <img className="image__movie" src={movie.hinhAnh} alt={movie.tenPhim} />
        <div className="listSuatChieuPhim">
          <h6>{movie.tenPhim}</h6>
          <div className="row">{this.renderSuatchieu()}</div>
        </div>
      </div>
    );
  };

  render() {
    // console.log(this.props.movie.maCumRap); //// tao ne`
    // console.log(this.props.movie.lstLichChieuTheoPhim);

    return <>{this.renderMovie()}</>;
  }
}

export default withRouter(MovieItem);
