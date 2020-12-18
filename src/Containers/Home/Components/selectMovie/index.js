import { Button } from "@material-ui/core";
import Axios from "axios";
import dayjs from "dayjs";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Select from "react-select";
import { compose } from "redux";
import "./index.scss";
// import MenuList from "./CustomMenuList/menuList";

class SelectMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      maRap: "",
      ngayXem: "",
      suatChieu: "",
      scheduleMovieInfor: null,
      scheduleMovie: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.maPhim.value &&
      this.state.maPhim.value !== prevState.maPhim.value
    ) {
      Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.state.maPhim.value}`,
        data: this.state.maPhim.value,
      })
        .then((res) => {
          this.setState({
            maRap: "",
            ngayXem: "",
            suatChieu: "",
            scheduleMovieInfor: res.data,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    if (
      this.state.maRap.value &&
      this.state.maRap.value !== prevState.maRap.value
    ) {
      this.setState({ ngayXem: "", suatChieu: "" });
    }
    if (
      this.state.ngayXem.value &&
      this.state.ngayXem.value !== prevState.ngayXem.value
    ) {
      this.setState({ suatChieu: "" });
    }
  }
  handleMovieChange = (item) => {
    this.setState({ maPhim: item });
    // console.log(item.value);
  };
  renderMovieList = () => {
    const { movieList } = this.props;
    let movieNameList = [];
    // console.log(movieList);
    if (!movieList || movieList.length <= 0) return;
    movieList
      .slice()
      .reverse()
      .forEach((item) => {
        movieNameList.push({
          value: `${item.maPhim}`,
          label: `${item.tenPhim}`,
        });
        // <option key={item.maPhim} value={item.maPhim}>
        //   {item.tenPhim}
        // </option>
      });
    // console.log(movieNameList);
    return movieNameList;
  };
  handleTheaterChange = (item) => {
    if (item.value !== null) {
      this.setState({ maRap: item });

      const { scheduleMovieInfor } = this.state;
      const giDay = scheduleMovieInfor.heThongRapChieu
        .find((x) => x.maHeThongRap === item.maHTR)
        .cumRapChieu.find((x) => x.maCumRap === item.value);
      this.setState({ scheduleMovie: giDay });
    }
  };
  renderTheaterList = () => {
    const { scheduleMovieInfor } = this.state;
    let movieTheaterList = [];
    if (!scheduleMovieInfor) {
      movieTheaterList.push({ value: null, label: "Mời chọn phim trước!" });
    } else {
      scheduleMovieInfor.heThongRapChieu.forEach((itemHTR) => {
        itemHTR.cumRapChieu.forEach((itemCR) => {
          movieTheaterList.push({
            value: `${itemCR.maCumRap}`,
            label: `${itemCR.tenCumRap}`,
            maHTR: `${itemHTR.maHeThongRap}`,
          });
        });
      });
    }
    return movieTheaterList;
  };

  handleTimeChange = (time) => {
    if (time.value === null) return;
    this.setState({ ngayXem: time });
  };

  renderTimeList = () => {
    const now = dayjs();
    let timeList = [];
    if (!this.state.maPhim || !this.state.maRap) {
      timeList.push({ value: null, label: "Mời chọn phim và rạp trước!" });
    } else {
      for (let i = 0; i < 5; i++) {
        if (i === 0) {
          timeList.push({
            value: `${now.format("DD/MM/YYYY")}`,
            label: "Hôm Nay",
          });
        } else if (i === 1)
          timeList.push({
            value: `${now.add(i, "day").format("DD/MM/YYYY")}`,
            label: "Ngày Mai",
          });
        else
          timeList.push({
            value: `${now.add(i, "day").format("DD/MM/YYYY")}`,
            label: `${now.add(i, "day").format("DD/MM/YYYY")}`,
          });
      }
    }
    return timeList;
  };

  handleScheduleMovieChange = (item) => {
    if (item.value === null) return;
    this.setState({ suatChieu: item });
  };

  renderScheduleMovie = () => {
    const now = dayjs();
    let scheduleMovieList = [];

    if (this.state.maPhim && this.state.maRap && this.state.ngayXem) {
      const scheduleMovieValid = this.state.scheduleMovie.lichChieuPhim.filter(
        (item) => {
          return (
            dayjs(item.ngayChieuGioChieu).format("DD/MM/YYYY") ===
              this.state.ngayXem.value &&
            dayjs(item.ngayChieuGioChieu).diff(now) > 0
          );
        }
      );
      scheduleMovieValid.forEach((item) => {
        scheduleMovieList.push({
          value: `${item.maLichChieu}`,
          label: `${dayjs(item.ngayChieuGioChieu).format("HH:mm")}`,
        });
      });
      if (scheduleMovieList.length > 0) return scheduleMovieList;
      else {
        scheduleMovieList.push({
          value: null,
          label: "Không có suất chiếu nào!",
        });
        return scheduleMovieList;
      }
    }
    scheduleMovieList.push({
      value: null,
      label: "Mời chọn phim, rạp và ngày xem trước!",
    });
    return scheduleMovieList;
  };

  handleOrder = () => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    if (!user) {
      alert("Vui lòng đăng nhập trước khi đặt vé!");
      this.props.history.push("/login");
    } else {
      this.props.history.push(`/checkout/${this.state.suatChieu.value}`);
    }
  };

  render() {
    const { maPhim, maRap, ngayXem, suatChieu } = this.state;
    return (
      <div className="select__content">
        <div className="selectFilm" style={{ width: "30%" }}>
          <Select
            isSearchable
            placeholder="Chọn Phim..."
            // components={{ MenuList }}
            value={maPhim}
            onChange={this.handleMovieChange}
            options={this.renderMovieList()}
          />
        </div>
        <div className="selectTheater" style={{ width: "22%" }}>
          <Select
            isSearchable={maPhim !== "" ? true : false}
            // isDisabled={!maPhim}
            placeholder="Chọn Rạp..."
            // components={{ MenuList }}
            value={maRap}
            onChange={this.handleTheaterChange}
            options={this.renderTheaterList()}
          />
        </div>
        <div className="selectTime" style={{ width: "calc(48% / 3)" }}>
          <Select
            isSearchable={false}
            // isDisabled={!maPhim}
            placeholder="Ngày Xem..."
            // components={{ MenuList }}
            value={ngayXem}
            onChange={this.handleTimeChange}
            options={this.renderTimeList()}
          />
        </div>
        <div
          className="selectScheduleMoviee"
          style={{ width: "calc(48% / 3)" }}
        >
          <Select
            isSearchable={false}
            // isDisabled={!maPhim}
            placeholder="Suất Chiếu..."
            // components={{ MenuList }}
            value={suatChieu}
            onChange={this.handleScheduleMovieChange}
            options={this.renderScheduleMovie()}
          />
        </div>
        <div className="datVeContainer" style={{ width: "calc(48% / 3)" }}>
          <Button
            className="btn-datVe"
            disabled={!suatChieu}
            variant="contained"
            onClick={() => {
              this.handleOrder();
            }}
          >
            Đặt vé
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.moviesReducer.movieList,
  };
};
export default compose(withRouter, connect(mapStateToProps, null))(SelectMovie);
