import React from "react";
import "./index.scss";
import dayjs from "dayjs";
export default function ThongTinComponent(props) {
  // console.log(props, "props ben thongtincopnt");
  let movie = props.movie;
  return (
    <div className="mainMaxWidth2">
      <div className="row">
        <div className="col-sm-6 col-xs-12 danhGia__reft">
          <div>
            <p className="danhGia__title">Ngày công chiếu</p>
          </div>
          <div>
            <p className="danhGia__content">
              {dayjs(`${movie.ngayKhoiChieu}`).format("DD.MM.YYYY")}
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12 danhGia__right">
          <div>
            <p className="danhGia__title">Nội dung</p>
          </div>
          <div>
            <p className="danhGia__content">{movie.moTa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
