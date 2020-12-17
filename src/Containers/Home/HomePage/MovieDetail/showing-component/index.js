import React, { useState } from "react";
import ThongTinComponent from "./danh-gia";
import "./index.scss";
import LichChieuComponent from "./lich-chieu";
import DanhGiaComponent from "./thong-tin";
export default function ShowingComponent() {
  const setShowing = (e) => {
    setState({
      showing: e,
    });
  };
  let [state, setState] = useState({ showing: "lichChieu" });
  const renderShowing = () => {
    switch (state.showing) {
      case "lichChieu":
        return <LichChieuComponent />;
      case "thongTin":
        return <ThongTinComponent />;
      default:
        return <DanhGiaComponent />;
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
