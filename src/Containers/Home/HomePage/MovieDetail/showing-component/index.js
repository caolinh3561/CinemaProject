import React, { useState } from "react";
import ThongTinComponent from "./thong-tin";
import DanhGiaComponent from "./danh-gia";
import "./index.scss";
import LichChieuComponent from "./lich-chieu";
export default function ShowingComponent(props) {
  // console.log(props, "props nè - showingComponent");
  let movie = props.movieDetail;
  const setShowing = (e) => {
    setState({
      showing: e,
    });
  };
  let [state, setState] = useState({ showing: "lichChieu" });
  const renderShowing = () => {
    switch (state.showing) {
      case "lichChieu":
        return <LichChieuComponent movie={movie} />;
      case "thongTin":
        return <ThongTinComponent movie={movie} />;
      default:
        return <DanhGiaComponent movie={movie} />;
    }
  };
  return (
    <div className="showing">
      <div className="showing__background">
        <div className="btnTitleMovie">
          <button
            className={`btnTitle mr-2 ${
              state.showing === "lichChieu" ? "btnActive" : ""
            }`}
            onClick={() => {
              setShowing("lichChieu");
            }}
          >
            Lịch Chiếu
          </button>
          <button
            className={`btnTitle mr-2 ${
              state.showing === "thongTin" ? "btnActive" : ""
            }`}
            onClick={() => {
              setShowing("thongTin");
            }}
          >
            Thông Tin
          </button>
          <button
            className={`btnTitle ${
              state.showing === "danhGia" ? "btnActive" : ""
            }`}
            onClick={() => {
              setShowing("danhGia");
            }}
          >
            Đánh giá
          </button>
        </div>
        <div className="showing__content">{renderShowing(state.showing)}</div>
      </div>
    </div>
  );
}
