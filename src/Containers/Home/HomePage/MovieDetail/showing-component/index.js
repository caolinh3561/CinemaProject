import React from "react";
import ThongTinComponent from "./thong-tin";
import DanhGiaComponent from "./danh-gia";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import LichChieuComponent from "./lich-chieu";
import { CSSTransitionGroup } from "react-transition-group";
export default function ShowingComponent(props) {
  // console.log(props, "props nè - showingComponent");
  let showing = useSelector((state) => state.movieDetailReducer.showing);
  const dispatch = useDispatch();
  let movie = props.movieDetail;
  const setShowing = (e) => {
    let action = { type: "UPDATE_SHOWING", payload: e };
    dispatch(action);
  };
  const renderShowing = () => {
    switch (showing) {
      case "lichChieu":
        return <LichChieuComponent movie={movie} />;
      case "thongTin":
        return <ThongTinComponent movie={movie} />;
      default:
        return <DanhGiaComponent movie={movie} />;
    }
  };
  return (
    <div id="showing__main" className="showing">
      <div className="showing__background">
        <div className="btnTitleMovie">
          <button
            className={`btnTitle mr-2 ${
              showing === "lichChieu" ? "btnActive" : ""
            }`}
            onClick={() => {
              setShowing("lichChieu");
            }}
          >
            Lịch Chiếu
          </button>
          <button
            className={`btnTitle mr-2 ${
              showing === "thongTin" ? "btnActive" : ""
            }`}
            onClick={() => {
              setShowing("thongTin");
            }}
          >
            Thông Tin
          </button>
          <button
            className={`btnTitle ${showing === "danhGia" ? "btnActive" : ""}`}
            onClick={() => {
              setShowing("danhGia");
            }}
          >
            Đánh giá
          </button>
        </div>
        <div className="showing__content">
          {/* <div className="cssAnimation__content">
            <CSSTransitionGroup
              transitionName="item"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={400}
            >
              {renderShowing(showing)}
            </CSSTransitionGroup>
          </div> */}
          {renderShowing(showing)}
        </div>
      </div>
    </div>
  );
}
