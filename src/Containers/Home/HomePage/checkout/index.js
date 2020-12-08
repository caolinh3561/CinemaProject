import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { actGetTicketRoom } from "./modules/actions";

export default function CheckOut() {
  const ticketRoom = useSelector((state) => state.ticketRoomReducer.ticketRoom);
  const dispatch = useDispatch();
  const [state, setstate] = useState([]);

  useEffect(() => {
    dispatch(actGetTicketRoom());
  }, [dispatch]);
  useEffect(() => {
    if (ticketRoom && ticketRoom.danhSachGhe) {
      let DSG = [...ticketRoom.danhSachGhe];
      DSG = DSG.map((item) => {
        if (+item.stt / 16 <= 1) {
          return { ...item, dangChon: false, tenGhe: `A${item.tenGhe}` };
        } else if (+item.stt / 16 <= 2) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `B${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 3) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `C${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 4) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `D${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 5) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `E${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 6) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `F${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 7) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `G${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 8) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `H${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 9) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `I${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        } else if (+item.stt / 16 <= 10) {
          return {
            ...item,
            dangChon: false,
            tenGhe: `K${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`,
          };
        }
      });
      setstate(DSG);
    }
    return () => {
      // cleanup
    };
  }, [dispatch, ticketRoom]);

  const handleButtonChange = (stt, dangChon) => {
    if (
      dangChon === false &&
      ((stt % 16 == 2 && state[stt - 2].dangChon === false) ||
        (stt % 16 == 3 && state[stt].dangChon === false) ||
        (stt % 16 == 14 && state[stt - 2].dangChon === false) ||
        (stt % 16 == 15 && state[stt].dangChon === false) ||
        (stt % 16 == 6 && state[stt - 2].dangChon === false) ||
        (stt % 16 == 11 && state[stt].dangChon === false))
    ) {
      alert("Bạn không thể bỏ trống ghế đầu mỗi dãy!");
    }
    let cloneState = [...state];
    cloneState[stt - 1].dangChon = !dangChon;
    setstate(cloneState);
  };

  const renderSeats = () => {
    if (ticketRoom && ticketRoom.danhSachGhe) {
      console.log(state);
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
                handleButtonChange(item.stt, item.dangChon);
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
                handleButtonChange(item.stt, item.dangChon);
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
        className="col-lg-3"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: 600,
          backgroundColor: "gray",
          padding: 0,
        }}
      ></div>
    </div>
  );
}
