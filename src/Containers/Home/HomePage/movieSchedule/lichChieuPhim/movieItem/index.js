import { Button } from "@material-ui/core";
import React, { Component } from "react";
import dayjs from "dayjs";
import "./index.scss";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class MovieItem extends Component {
  handleOnClick = (item) => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    if (user) {
      this.props.history.push({
        pathname: `/checkout/${item.maLichChieu}`,
        time: `${item.ngayChieuGioChieu}`,
      });
    } else {
      Swal.fire({
        title: "Bạn chưa đăng nhập!",
        text: "Hãy đăng nhập trước khi đặt vé.",
      });
      setTimeout(() => {
        this.props.history.push({
          pathname: "/login",
          state: {
            scheduleId: `${item.maLichChieu}`,
            time: `${item.ngayChieuGioChieu}`,
          },
        });
      }, 500);
    }
  };

  renderSuatchieu = () => {
    const { movie } = this.props;
    const { lstLichChieuTheoPhim } = movie;
    let date = dayjs().format("DD/MM/YYYY");
    let time = dayjs().format("HH:mm");
    const lstLichChieuTheoPhimSorted = lstLichChieuTheoPhim.sort((a, b) =>
      dayjs(a.ngayChieuGioChieu).diff(dayjs(b.ngayChieuGioChieu))
    );
    return lstLichChieuTheoPhimSorted.map((item) => {
      if (
        dayjs(item.ngayChieuGioChieu).format("DD/MM/YYYY") === date &&
        time < dayjs(item.ngayChieuGioChieu).format("HH:mm")
      )
        return (
          <Button
            // disabled={time > dayjs(item.ngayChieuGioChieu).format("HH:mm")}
            key={item.maLichChieu}
            className="btn__datVe"
            onClick={() => {
              this.handleOnClick(item);
            }}
          >
            <span>{dayjs(item.ngayChieuGioChieu).format("HH:mm")}</span> ~{" "}
            <small>
              {dayjs(item.ngayChieuGioChieu).add("2", "hour").format("HH:mm")}
            </small>
          </Button>
        );
      return null;
    });
  };
  renderMovie = () => {
    const { movie } = this.props;
    return (
      <>
        <div key={movie.maPhim} className="movie__item">
          <div className="movie__infor row">
            <img
              className="image__movie"
              src={movie.hinhAnh}
              alt={movie.tenPhim}
            />
            <div className="information">
              <h6>{movie.tenPhim}</h6>
            </div>
          </div>
          <div className="listSuatChieuPhim">{this.renderSuatchieu()}</div>
        </div>
      </>
    );
  };

  render() {
    return <>{this.renderMovie()}</>;
  }
}

export default withRouter(MovieItem);
