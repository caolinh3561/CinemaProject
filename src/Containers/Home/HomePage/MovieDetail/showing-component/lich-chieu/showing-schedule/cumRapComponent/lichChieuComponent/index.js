import React from "react";
import dayjs from "dayjs";
import { Button } from "@material-ui/core";
import "./index.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useHistory } from "react-router";
export default function LichChieuComponent(props) {
  const history = useHistory();
  const lichChieu = props.movie.lichChieu;
  const handleOnClick = (item) => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    console.log(user);
    console.log("item nè: ", item);
    if (user) {
      history.push({
        pathname: `/checkout/${item.maLichChieu}`,
        time: `${item.ngayChieuGioChieu}`,
      });
    } else {
      Swal.fire({
        title: "Bạn chưa đăng nhập!",
        text: "Hãy đăng nhập trước khi đặt vé.",
      });
      setTimeout(() => {
        history.push({
          pathname: "/login",
          state: {
            scheduleId: `${item.maLichChieu}`,
            time: `${item.ngayChieuGioChieu}`,
          },
        });
      }, 500);
    }
  };
  let renderLichChieu = () => {
    // let time = dayjs().format("HH:mm");
    return lichChieu.map((item) => {
      return (
        <Button
          // disabled={time < dayjs(item.ngayChieuGioChieu).format("HH:mm")}
          key={item.maLichChieu}
          className="btn__datVe"
          onClick={() => {
            handleOnClick(item);
          }}
        >
          {dayjs(item.ngayChieuGioChieu).format("HH:mm")} ~{" "}
          {dayjs(item.ngayChieuGioChieu).add("2", "hour").format("HH:mm")}
        </Button>
      );
    });
  };

  return <div className="renderLichChieu">{renderLichChieu()}</div>;
}
