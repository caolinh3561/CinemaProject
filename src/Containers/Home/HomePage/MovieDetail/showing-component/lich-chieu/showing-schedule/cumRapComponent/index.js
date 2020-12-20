import React, { useEffect } from "react";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { actGetHTCR } from "./modules/action";
import "./index.scss";
import LichChieuComponent from "./lichChieuComponent";
export default function CumRapComponent(props) {
  let movie = props.movie;
  console.log("movie nè", movie);
  const dispatch = useDispatch();
  // let heThongCumRap = useSelector(
  //   (state) => state.showingHTCRReducer.heThongCumRap
  // );
  let maHTR = useSelector((state) => state.showingHeThongRapReducer.maHTR);
  useEffect(() => {
    dispatch(actGetHTCR(maHTR));
  }, [dispatch, maHTR]);
  let listRapCoSuatChieu = [];

  // lọc những rạp có suất chiếu của phim
  if (movie && movie.lichChieu && movie.lichChieu.length > 0) {
    let checkAdult = (id) => {
      //hàm findIndex tìm vị trí
      return listRapCoSuatChieu.findIndex((item) => {
        return item === id;
      });
    };
    movie.lichChieu.forEach((lichChieuItem) => {
      let maCumRap = lichChieuItem.thongTinRap.maCumRap;
      let maHeThongRap = lichChieuItem.thongTinRap.maHeThongRap;
      // console.log("maCUmRap là: ", maCumRap);
      let ind = checkAdult(maCumRap);
      // console.log("index nè", ind);
      if (ind === -1 && maHeThongRap === maHTR) {
        listRapCoSuatChieu.push(maCumRap);
      }
    });
  }

  let render = () => {
    if (listRapCoSuatChieu && listRapCoSuatChieu.length > 0) {
      return listRapCoSuatChieu.map((item, index) => {
        // console.log("item nè", item);
        return (
          <li
            className="cumRap__item"
            key={index}
            style={{
              overflow: "hidden",
              // opacity: item.maCumRap === maCR ? 1 : 0.5,
            }}
          >
            <h6>{item}</h6>
            <LichChieuComponent movie={movie} maHTR={item} />
            {/* <p>{item.diaChi}</p> */}
          </li>
        );
      });
    } else {
      return (
        <div style={{ color: "black", fontSize: "1rem" }}>
          <p style={{ marginTop: "20px", textAlign: "center" }}>
            Không có suất chiếu
          </p>
        </div>
      );
    }
  };

  let renderDayTime = () => {
    let listDayTime = [];
    let checkIndexDayTime = (id) => {
      //hàm findIndex tìm vị trí
      return listDayTime.findIndex((item) => {
        return item === id;
      });
    };
    // let now = dayjs().format("DD/MM");
    movie.lichChieu.map((item) => {
      let dayCheck = dayjs(item.ngayChieuGioChieu).format("YYYY/MM/DD");
      let ind = checkIndexDayTime(dayCheck);
      if (ind === -1) {
        listDayTime.push(dayCheck);
      }
    });
    const oneDay = 24 * 60 * 60 * 1000;
    const lstLichChieuTheoPhimSorted = listDayTime.sort((a, b) =>
      dayjs(a).diff(dayjs(b))
    );
    let minDate = new Date(
      lstLichChieuTheoPhimSorted.reduce(function (a, b) {
        return a < b ? a : b;
      })
    );
    let maxDate = new Date(
      lstLichChieuTheoPhimSorted.reduce(function (a, b) {
        return a > b ? a : b;
      })
    );
    const diffDays = Math.round(Math.abs((minDate - maxDate) / oneDay));
    let listRender = [];
    for (let i = 0; i <= diffDays + 5; i++) {
      listRender.push(
        <li className="dayTimeItem text-center" key={i}>
          {/* <p style={{ fontSize: "18px", fontWeight: "600" }}></p> */}
          <button className="btn__day ">
            {dayjs(minDate).add(i, "day").format("DD/MM")}
          </button>
        </li>
      );
    }
    return listRender;
  };
  return (
    <ul className="listCumRap">
      <li className="listDayTime__content">
        <ul className="listDayTime">{renderDayTime()}</ul>
      </li>
      {render()}
    </ul>
  );
}
