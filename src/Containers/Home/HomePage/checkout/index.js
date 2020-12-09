import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";
import { actGetTicketRoom } from "./modules/actions";

export default function CheckOut() {
  const ticketRoom = useSelector((state) => state.ticketRoomReducer.ticketRoom);
  const dispatch = useDispatch();
  const { scheduleId } = useParams();
  const [warning, setWarning] = useState(false);
  const [state, setstate] = useState([]);
  const [datVe, setDatVe] = useState({
    maLichChieu: "",
    taiKhoanNguoiDung: "",
    danhSachVe: [],
  });
  const [listGheDangChon, setListGheDangChon] = useState([]);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("userMember")).taiKhoan;
    const datVeClone = {
      ...datVe,
      maLichChieu: scheduleId,
      taiKhoanNguoiDung: username,
    };
    setDatVe(datVeClone);
    dispatch(actGetTicketRoom(scheduleId));
  }, []);
  useEffect(() => {
    if (ticketRoom && ticketRoom.danhSachGhe) {
      let DSG = [...ticketRoom.danhSachGhe];
      DSG = DSG.map((item) => {
        if (+item.stt / 16 <= 1 && item.daDat === false) {
          return { ...item, dangChon: false, tenGhe: `A${item.tenGhe}` };
        } else if (+item.stt / 16 <= 1 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `A${item.tenGhe}`,
          };
        } else if (+item.stt / 16 <= 2 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `B${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 2 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `B${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 3 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `C${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 3 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `C${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 4 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `D${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 4 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `D${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 5 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `E${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 5 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `E${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 6 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `F${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 6 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `F${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 7 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `G${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 7 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `G${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 8 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `H${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 8 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `H${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 9 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `I${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 9 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `I${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 10 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `I${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 10 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe: `I${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        }
      });
      setstate(DSG);
      // console.log(datVe);
    }
  }, [dispatch, ticketRoom]);

  const handleButtonChange = (item) => {
    setWarning(false);
    if (!item.dangChon) {
      if (
        (+item.stt % 16 === 2 && state[+item.stt - 2].dangChon === false) ||
        (+item.stt % 16 === 3 && state[+item.stt].dangChon === false) ||
        (+item.stt % 16 === 14 && state[+item.stt - 2].dangChon === false) ||
        (+item.stt % 16 === 15 && state[+item.stt].dangChon === false) ||
        (+item.stt % 16 === 6 && state[+item.stt - 2].dangChon === false) ||
        (+item.stt % 16 === 11 && state[+item.stt].dangChon === false)
      ) {
        alert("Bạn không thể bỏ trống ghế đầu của mỗi dãy!");
        setWarning(true);
      }

      if (
        (state[+item.stt].dangChon === false &&
          state[+item.stt + 1].dangChon === true &&
          state[+item.stt + 1].daDat === false) ||
        (state[+item.stt - 2].dangChon === false &&
          state[+item.stt - 3].dangChon === true &&
          state[+item.stt - 3].daDat === false)
      ) {
        alert("Bạn không thể bỏ trống 1 ghế ở giữa!");
        setWarning(true);
      }

      let cloneListGhe = [...listGheDangChon];
      cloneListGhe.push(item);
      cloneListGhe.sort((a, b) => a.stt - b.stt);
      setListGheDangChon(cloneListGhe);
    } else {
      if (
        state[+item.stt].dangChon === true &&
        state[+item.stt - 2].dangChon === true
      ) {
        alert("Bạn không thể bỏ trống 1 ghế ở giữa!");
        setWarning(true);
      }

      let cloneListGhe = [...listGheDangChon];

      let index = cloneListGhe.findIndex((ghe) => ghe.maGhe === item.maGhe);
      cloneListGhe.splice(index, 1);
      cloneListGhe.sort((a, b) => a.stt - b.stt);
      setListGheDangChon(cloneListGhe);
    }
    let cloneState = [...state];
    cloneState[+item.stt - 1].dangChon = !item.dangChon;
    setstate(cloneState);
  };

  const renderSeats = () => {
    console.log(listGheDangChon);
    if (ticketRoom && ticketRoom.danhSachGhe) {
      return state.map((item) => {
        if (item.daDat === true) {
          return (
            <Button
              key={item.stt}
              disabled
              style={{ backgroundColor: "dimgray" }}
            >
              X
            </Button>
          );
        } else if (item.loaiGhe === "Vip") {
          return (
            <Button
              onClick={() => {
                handleButtonChange(item);
              }}
              key={item.stt}
              style={{
                backgroundColor: item.dangChon === true ? "#00c000" : "orange",
              }}
            >
              {/* <StopSharpIcon style={{ color: green[500] }} fontSize="large" /> */}
            </Button>
          );
        } else {
          return (
            <Button
              onClick={() => {
                handleButtonChange(item);
              }}
              key={item.stt}
              style={{
                backgroundColor: item.dangChon ? "#00c000" : "darkgray",
              }}
            >
              {/* <StopSharpIcon fontSize="large" /> */}
            </Button>
          );
        }
      });
    }
  };

  const renderGiaVe = () => {
    if (listGheDangChon.length === 0) return 0;
    let tongGiaVe = 0;
    for (let i = 0; i < listGheDangChon.length; i++) {
      tongGiaVe += listGheDangChon[i].giaVe;
    }
    return tongGiaVe.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  };

  const renderThongTinDatVe = () => {
    if (!ticketRoom || !ticketRoom.thongTinPhim) return;
    const {
      tenPhim,
      ngayChieu,
      gioChieu,
      tenRap,
      tenCumRap,
    } = ticketRoom.thongTinPhim;

    return (
      <>
        <div className="ticketRoom__info" style={{ padding: "0 15px" }}>
          <h1 className="text-center" style={{ color: "#f79400" }}>
            {renderGiaVe()}
          </h1>
          <hr />
          <h5>{tenPhim}</h5>
          <p>{tenCumRap}</p>
          <p>
            {ngayChieu} - {gioChieu} - {tenRap}
          </p>
          <hr />
          <form>
            <label className="d-block">Email:</label>
            <input style={{ width: "100%" }} type="email" />
            <label className="d-block">Số ĐT:</label>
            <input style={{ width: "100%" }} type="tel" />
          </form>
          <hr />
          <div className="payType">
            <h6>Hình thức thanh toán</h6>
          </div>
        </div>
        <hr />
        <Button fullWidth className="btnDatVe">
          Đặt vé
        </Button>
      </>
    );
  };

  return (
    <div
      className="row"
      style={{
        // backgroundImage: "url('assets/img/background/carousel_1.jpg')",
        width: "100%",
        height: "600px",
        margin: 0,
      }}
    >
      <div className="col-lg-9" style={{ padding: 0 }}>
        <nav style={{ backgroundColor: "orange", height: "90px" }}>
          This is Header!
        </nav>
        <div className="theater__infor" style={{ height: "90px" }}></div>
        <div
          className="seats__booking"
          style={{ height: "100%", backgroundColor: "brown" }}
        >
          <img
            className="screen__img"
            style={{ width: "90%", height: 80, marginLeft: "5%" }}
            src="./../img/screen.png"
            alt=""
          />
          <div className="listOfSeat">
            {renderSeats()}
            <div className="row0">
              <span className="span__item">1</span>
              <span className="span__item">2</span>
              <span className="span__item">3</span>
              <span className="span__item">4</span>
              <span className="span__item"></span>
              <span className="span__item">5</span>
              <span className="span__item">6</span>
              <span className="span__item">7</span>
              <span className="span__item">8</span>
              <span className="span__item">9</span>
              <span className="span__item">10</span>
              <span className="span__item">11</span>
              <span className="span__item">12</span>
              <span className="span__item"></span>
              <span className="span__item">13</span>
              <span className="span__item">14</span>
              <span className="span__item">15</span>
              <span className="span__item">16</span>
            </div>
            <div className="column0">
              <span className="column__item"></span>
              <span className="column__item">A</span>
              <span className="column__item">B</span>
              <span className="column__item">C</span>
              <span className="column__item">D</span>
              <span className="column__item">E</span>
              <span className="column__item">F</span>
              <span className="column__item">G</span>
              <span className="column__item">H</span>
              <span className="column__item">I</span>
              <span className="column__item">K</span>
            </div>
            <div className="lane1"></div>
            <div className="lane2"></div>
          </div>
          <div className="expland__seats">
            <Button style={{ backgroundColor: "darkgray" }}>
              {/* <StopSharpIcon fontSize="large" /> */}
            </Button>
            <small>Ghế thường</small>
            <Button style={{ backgroundColor: "orange" }}>
              {/* <StopSharpIcon style={{ color: green[500] }} fontSize="large" /> */}
            </Button>
            <small>Ghế Vip</small>
            <Button style={{ backgroundColor: "#00c000" }}>
              {/* <StopSharpIcon fontSize="large" /> */}
            </Button>
            <small>Ghế đang chọn</small>
            <Button disabled style={{ backgroundColor: "dimgray" }}>
              X
            </Button>
            <small>Ghế đã được đặt</small>
          </div>
        </div>
      </div>

      <div
        className="col-lg-3 checkout__right"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: 580,
          // backgroundColor: "gray",
          padding: 0,
        }}
      >
        {renderThongTinDatVe()}
      </div>
    </div>
  );
}
