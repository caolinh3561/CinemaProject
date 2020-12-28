import React from "react";

export default function Header(props) {
  const { step } = props;
  const renderUserInfor = () => {
    if (!localStorage.getItem("userMember")) return;
    const user = JSON.parse(localStorage.getItem("userMember")).taiKhoan;
    return (
      <h6>
        <i className="material-icons">account_circle</i>
        {user}
      </h6>
    );
  };

  return (
    <nav
      className="checkout__header"
      style={{ height: "90px" }} //backgroundColor: "orange",
    >
      <ul>
        <li className={step === 1 ? "li-item active" : "li-item"}>
          <span className="step">01</span> Chọn ghế & thanh toán
        </li>
        <li className={step === 2 ? "li-item active" : "li-item"}>
          <span className="step">02</span> Kết quả đặt vé
        </li>
      </ul>
      {renderUserInfor()}
    </nav>
  );
}
