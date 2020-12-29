import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import "./index.scss";
import ticket__bg from "assets/img/background/black_bg.jpg";
import infor__bg5 from "assets/img/background/gray_bg.jpg";
import bg from "assets/img/background/rs__background.jpg";

import certified from "assets/img/background/certified.png";
import dayjs from "dayjs";

export default function Result() {
  const ketQuaDatVe = useSelector(
    (state) => state.ticketRoomReducer.ketQuaDatVe
  );

  console.log(ketQuaDatVe);
  if (!ketQuaDatVe) return <></>;
  const { thongTinPhim, danhSachGhe } = ketQuaDatVe;

  const stringTime = () => {
    let dateParts = thongTinPhim.ngayChieu.split("/");
    let dateObject = dayjs(`${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`);
    return dayjs(dateObject).format("dddd, D MMMM YYYY");
  };

  const durationTime = () => {
    let durationTime = dayjs(`2000-01-01T${thongTinPhim.gioChieu}`).add(
      708,
      "minute"
    );
    console.log(durationTime);
    return `${dayjs(durationTime).format("HH:mm")} ~ ${dayjs(durationTime)
      .add(2, "hour")
      .format("HH:mm")} / 2 giờ`;
  };

  const renderDSG = () => {
    let listGhe = [];
    danhSachGhe.forEach((item) => {
      listGhe.push(item.tenGhe);
    });
    return listGhe.join(", ");
  };

  const renderPrice = () => {
    let tongGiaVe = 0;
    tongGiaVe = danhSachGhe.reduce((a, b) => {
      return a + b.giaVe;
    }, 0);
    tongGiaVe =
      tongGiaVe.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
    if (danhSachGhe.length > 1) {
      let giaVe =
        danhSachGhe[0].giaVe
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
      return `${tongGiaVe} (${giaVe}/seat)`;
    } else return tongGiaVe;
  };

  const renderTypeOfMovie = () => {
    const firstChar = thongTinPhim.tenPhim.charCodeAt(0);
    if (firstChar <= 70) return <span className="c13">C13</span>;
    else return <span className="p">P</span>;
  };

  return (
    <>
      <Header step={2} />
      <div
        className="result__content"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="result__wapper"
          style={{ backgroundImage: `url(${infor__bg5})` }}
        >
          <div
            className="header__ticket"
            style={{ backgroundImage: `url(${ticket__bg})` }}
          >
            <h6 className="header__title">
              <i className="star__icon material-icons">star</i>Cinema Ticket
              <i className="star__icon material-icons">star</i>
            </h6>
          </div>
          <div className="result__infor">
            <h5 className="tenPhim">
              {renderTypeOfMovie()}
              {thongTinPhim.tenPhim}
            </h5>
            <p className="thoiGianChieu">{stringTime()}</p>
            <p className="duration">{durationTime()}</p>
            <div className="row p-0 mt-4">
              <div className="col-sm-7 mb-3">
                <p className="infor__title">Theater</p>
                <p className="infor__text">{thongTinPhim.tenCumRap}</p>
              </div>
              <div className="col-sm-5 mb-3">
                <p className="infor__title">Cinema room</p>
                <p className="infor__text">{thongTinPhim.tenRap}</p>
              </div>
              <div className="col-sm-7 mb-3">
                <p className="infor__title">Seats</p>
                <p className="infor__text">{renderDSG()}</p>
              </div>
              <div className="col-sm-5 mb-3">
                <p className="infor__title">Price</p>
                <p className="infor__text">{renderPrice()}</p>
              </div>
              <div className="col-sm-7 mb-3">
                <p className="infor__title">Popcorn and drinks</p>
                <p className="infor__text">None</p>
              </div>
            </div>
          </div>
          <div
            className="sold__stamp"
            style={{ backgroundImage: `url(${certified})` }}
          ></div>
        </div>
      </div>
    </>
  );
}
