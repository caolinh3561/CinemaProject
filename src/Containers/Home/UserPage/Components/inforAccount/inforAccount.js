import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ChangePasswordComponent from "./components/changePasswordComponent";
import InforAccountComponent from "./components/inforAccountComponent";
import UpdateInforComponent from "./components/updateInforComponent";

export default function InforAccount(props) {
  const { user } = props;
  const [key, setKey] = useState("inforAccount");
  const history = useHistory();

  const renderComponent = () => {
    switch (key) {
      case "inforAccount":
        return <InforAccountComponent user={user} />;
      case "updateInfor":
        return <UpdateInforComponent user={user} />;
      case "changePassword":
        return <ChangePasswordComponent user={user} />;
      default:
        return;
    }
  };

  const handleSelect = (value) => {
    setKey(value);
  };

  const handleLogout = () => {
    localStorage.removeItem("userMember");
    history.push("/");
  };

  return (
    <div className="user__content row">
      {/* <h3>Thông Tin Tài Khoản</h3> */}
      <div
        className="sideBar col-sm-4"
        style={{ borderRight: "1px solid #868686" }}
      >
        <nav>
          <ul>
            <li
              onClick={() => {
                handleSelect("inforAccount");
              }}
              className={
                key === "inforAccount" ? "li-item text-white" : "li-item"
              }
            >
              Thông tin tài khoản
            </li>
            <li
              onClick={() => {
                handleSelect("updateInfor");
              }}
              className={
                key === "updateInfor" ? "li-item text-white" : "li-item"
              }
            >
              Cập nhật thông tin
            </li>
            <li
              onClick={() => {
                handleSelect("changePassword");
              }}
              className={
                key === "changePassword" ? "li-item text-white" : "li-item"
              }
            >
              Thay đổi mật khẩu
            </li>
            <li
              onClick={() => {
                props.handleSelect("inforTicket");
              }}
              className="li-item"
            >
              Lịch sử đặt vé
            </li>
            <li
              onClick={() => {
                handleLogout();
              }}
              className="li-item"
            >
              Đăng xuất
            </li>
          </ul>
        </nav>
      </div>
      <div className="user__infor col-sm-8">{renderComponent()}</div>
    </div>
  );
}
