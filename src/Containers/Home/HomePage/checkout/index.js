import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";
import { actBookingTickets, actGetTicketRoom } from "./modules/actions";

export default function CheckOut() {
  const ticketRoom = useSelector((state) => state.ticketRoomReducer.ticketRoom);
  const dispatch = useDispatch();
  const { scheduleId } = useParams();
  const [warning, setWarning] = useState(true);
  const [state, setstate] = useState([]);
  const [datVe, setDatVe] = useState({
    maLichChieu: "",
    taiKhoanNguoiDung: "",
    danhSachVe: [],
  });
  const [listGheDangChon, setListGheDangChon] = useState([]);

  // lấy thông tin phòng chiếu và thông tin người đặt vé
  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("userMember")).taiKhoan;
    const datVeClone = {
      ...datVe,
      maLichChieu: scheduleId,
      taiKhoanNguoiDung: username,
    };
    setDatVe(datVeClone);
    dispatch(actGetTicketRoom(scheduleId));
    // setTimeout(() => {
    //   alert("TIME UP!!!");
    //   window.location.reload();
    // }, 10000);
  }, []);
  // lấy danh sách ghế
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
            tenGhe:
              "B" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 2 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "B" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 3 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "C" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 3 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "C" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 4 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "D" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 4 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "D" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 5 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "E" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 5 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "E" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 6 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "F" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 6 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "F" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 7 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "G" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 7 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "G" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 8 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "H" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 8 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "H" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 9 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "I" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 9 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "I" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 10 && item.daDat === false) {
          return {
            ...item,
            dangChon: false,
            tenGhe:
              "K" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        } else if (+item.stt / 16 <= 10 && item.daDat === true) {
          return {
            ...item,
            dangChon: true,
            tenGhe:
              "K" +
              `0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2),
          };
        }
      });
      setstate(DSG);
    }
  }, [dispatch, ticketRoom]);

  //check Ghế
  useEffect(() => {
    let isCheck = isValidCheckoutStep2();
    if (isCheck) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [listGheDangChon]);

  const isValidCheckoutStep1 = (item) => {
    // return false -> cho phép đặt vé
    // check ghế trống đầu tiên của 2 dãy phụ
    if (
      (item.stt % 16 === 2 || item.stt % 16 === 14) &&
      state[+item.stt - 2].dangChon === false
    ) {
      if (
        state[+item.stt].dangChon === true &&
        state[+item.stt + 1].dangChon === true
      )
        return false;
      else {
        alert("Bạn không thể bỏ trống ghế đầu tiên của dãy!");
        // setWarning(true);
        return true;
      }
    } else if (
      (item.stt % 16 === 3 || item.stt % 16 === 15) &&
      state[+item.stt].dangChon === false
    ) {
      if (
        state[+item.stt - 3].dangChon === true &&
        state[+item.stt - 2].dangChon === true
      )
        return false;
      else {
        alert("Bạn không thể bỏ trống ghế đầu tiên của dãy!");
        // setWarning(true);
        return true;
      }
    } else if (item.stt % 16 === 6 && state[+item.stt - 2].dangChon === false) {
      for (let i = +item.stt; i <= +item.stt + 5; i++) {
        if (state[i].dangChon === false) {
          alert("Bạn không thể bỏ trống ghế đầu tiên của dãy!");
          return true;
        }
      }
      return false;
    } else if (item.stt % 16 === 11 && state[+item.stt].dangChon === false) {
      for (let i = +item.stt - 7; i <= +item.stt - 2; i++) {
        if (state[i].dangChon === false) {
          alert("Bạn không thể bỏ trống ghế đầu tiên của dãy!");
          return true;
        }
      }
      return false;
    }
  };
  const isValidCheckoutStep2 = () => {
    //check listGhe/ tìm ghế trống ở giữa
    if (listGheDangChon.length < 1) return true;
    if (listGheDangChon.length > 10) {
      alert("Bạn không thể đặt trên 10 ghế cùng lúc!");
      return true;
    }
    let isCheck = false;
    for (let i = 0; i < listGheDangChon.length; i++) {
      isCheck = isValidCheckoutStep1(listGheDangChon[i]);

      if (isCheck) return true;
    }

    if (listGheDangChon.length > 1) {
      for (let i = 0; i < listGheDangChon.length - 1; i++) {
        if (
          listGheDangChon[i].stt % 16 === 3 ||
          listGheDangChon[i].stt % 16 === 4 ||
          listGheDangChon[i].stt % 16 === 11 ||
          listGheDangChon[i].stt % 16 === 12
        ) {
          continue;
        }
        if (
          listGheDangChon[i].stt - listGheDangChon[i + 1].stt === -2 &&
          listGheDangChon[i].tenGhe.charAt(0) ===
            listGheDangChon[i + 1].tenGhe.charAt(0) &&
          state[+listGheDangChon[i].stt].dangChon === false
        ) {
          alert("Bạn không thể để trống 1 ghế ở giữa!");
          return true;
        }
        // if (
        //   (state[+listGheDangChon[i].stt].dangChon === false &&
        //     state[+listGheDangChon[i].stt + 1].dangChon === true) ||
        //   (state[+listGheDangChon[i].stt - 2].dangChon === false &&
        //     state[+listGheDangChon[i].stt - 3].dangChon === true)
        // ) {
        //   alert("Bạn không thể để trống 1 ghế ở giữa!");
        //   return true;
        // }
      }
    }

    return false;
  };

  const handleAddorRemoveSeat = (item) => {
    if (item.dangChon) {
      let cloneListGhe = [...listGheDangChon];
      let index = cloneListGhe.findIndex((ghe) => ghe.maGhe === item.maGhe);
      cloneListGhe.splice(index, 1);
      cloneListGhe.sort((a, b) => a.stt - b.stt);
      setListGheDangChon(cloneListGhe);
    } else {
      let cloneListGhe = [...listGheDangChon];
      cloneListGhe.push(item);
      cloneListGhe.sort((a, b) => a.stt - b.stt);
      setListGheDangChon(cloneListGhe);
    }
  };

  const changeStatusOfSeatsList = (item) => {
    let cloneState = [...state];
    cloneState[+item.stt - 1].dangChon = !item.dangChon;
    setstate(cloneState);
  };

  const handleButtonChange = (item) => {
    handleAddorRemoveSeat(item);
    changeStatusOfSeatsList(item);
  };

  const renderSeats = () => {
    if (ticketRoom && ticketRoom.danhSachGhe) {
      console.log(ticketRoom);

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
                color: "#582819",
                backgroundColor:
                  item.dangChon === true ? "rgb(77 232 26)" : "orange",
              }}
            >
              {item.dangChon ? item.tenGhe.slice(-2) : ""}
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
                color: "#582819",
                backgroundColor: item.dangChon ? "rgb(77 232 26)" : "darkgray",
              }}
            >
              {item.dangChon ? item.tenGhe.slice(-2) : ""}
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

  const renderDSGhe = () => {
    if (listGheDangChon.length > 0) {
      let count = listGheDangChon.length;
      return listGheDangChon.map((item, index) => {
        if (index === count - 1) {
          return (
            <span key={item.stt} className="ml-1" style={{ color: "#f79400" }}>
              {item.tenGhe}
            </span>
          );
        } else {
          return (
            <span key={item.stt} className="ml-1" style={{ color: "#f79400" }}>
              {item.tenGhe},
            </span>
          );
        }
      });
    }
  };

  const handleOnSubmit = () => {
    let thongTinDatVe = { ...datVe };
    let danhSachGheDat = [];
    for (let i = 0; i < listGheDangChon.length; i++) {
      let item = {
        maGhe: listGheDangChon[i].maGhe,
        giaVe: listGheDangChon[i].giaVe,
      };
      danhSachGheDat.push(item);
    }
    thongTinDatVe.danhSachVe = danhSachGheDat;
    // console.log(thongTinDatVe);
    dispatch(actBookingTickets(thongTinDatVe));
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

          <h5>{tenPhim}</h5>
          <p>{tenCumRap}</p>
          <p>
            {ngayChieu} - {gioChieu} - {tenRap}
          </p>
          <hr />
          {listGheDangChon.length !== 0 && (
            <div className="listGheDangChon__render">
              Ghế: {renderDSGhe()}
              <hr />
            </div>
          )}

          <form>
            <label className="d-block">Email:</label>
            <input style={{ width: "100%" }} type="email" />
            <label className="d-block">Số ĐT:</label>
            <input style={{ width: "100%" }} type="tel" />
          </form>
          <hr />
          <div className="payType" style={{ minHeight: "200px" }}>
            <h6>Hình thức thanh toán</h6>
          </div>
        </div>
        <hr />
        <Button
          onClick={() => {
            handleOnSubmit();
          }}
          disabled={warning}
          fullWidth
          className="btnDatVe"
        >
          Đặt vé
        </Button>
      </>
    );
  };

  const renderThongTinRap = () => {
    if (ticketRoom && ticketRoom.thongTinPhim) {
      return (
        <div className="infor__left row">
          <img
            src={ticketRoom.thongTinPhim.hinhAnh}
            style={{ height: 80, marginRight: 15 }}
            alt="logo"
          />
          <div className="infor__theater">
            <h6>{ticketRoom.thongTinPhim.tenCumRap}</h6>
            <p>
              {ticketRoom.thongTinPhim.gioChieu}
              {" - "}
              {ticketRoom.thongTinPhim.tenRap}
            </p>
          </div>
        </div>
      );
    } else return null;
  };

  return (
    <div
      className="row"
      style={{
        // backgroundImage: "url('assets/img/background/carousel_1.jpg')",
        width: "100%",
        // height: "400px",
        margin: 0,
      }}
    >
      <div className="col-lg-9" style={{ padding: 0 }}>
        <nav
          className="checkout__header"
          style={{ height: "90px" }} //backgroundColor: "orange",
        >
          This is Header!
        </nav>
        <div className="wapper">
          <div className="theater__infor" style={{ height: "90px" }}>
            {renderThongTinRap()}
          </div>
        </div>
        <div
          className="seats__booking"
          style={{ paddingBottom: 30 }} //, backgroundColor: "brown"
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
          height: "100vh",
          // backgroundColor: "gray",
          padding: 0,
        }}
      >
        {renderThongTinDatVe()}
      </div>
    </div>
  );
}
