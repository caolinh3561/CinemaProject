import { Button } from "@material-ui/core";
import React from "react";

import InforItem from "./inforItem/inforItem";
export default function InforTicket(props) {
  const { infor } = props;

  const renderListOfTicket = () => {
    if (!infor) return;
    return infor.thongTinDatVe
      .slice()
      .reverse()
      .map((item) => {
        return <InforItem key={item.maVe} item={item} />;
      });
  };

  return (
    <div className="ticket__content">
      <Button
        onClick={() => {
          props.handleSelect("inforAccount");
        }}
        className="btn__comeback"
      >
        <i className="material-icons">keyboard_return</i>
      </Button>

      <h3 className="text-center m-4">Danh Sách Vé Đã Đặt</h3>
      <ul className="listOfTicket p-2 m-0">
        <li className="row">
          <p className="col-sm-4" style={{ fontSize: "1.2rem" }}>
            Thời gian đặt vé
          </p>
          <p className="col-sm-8" style={{ fontSize: "1.2rem" }}>
            Tên Phim và thông tin chi tiết
          </p>
        </li>
        {renderListOfTicket()}
      </ul>
    </div>
  );
}
