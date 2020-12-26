import React, { useEffect, useState } from "react";
import HeaderComponent from "./../Components/header/header";
import "./index.scss";
import backgroundImg from "assets/img/background/user__background2.jpg";
import InforAccount from "./Components/inforAccount/inforAccount";
import InforTicket from "./Components/inforTicket/inforTicket";
import { CSSTransitionGroup } from "react-transition-group";
import Axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useHistory } from "react-router-dom";

export default function UserComponent() {
  const [selected, setSelected] = useState("inforAccount");
  const [userInformation, setUserInformation] = useState("");
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    console.log(`${user.taiKhoan}`);
    if (user) {
      Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: { taiKhoan: `${user.taiKhoan}` },
      })
        .then((res) => {
          setUserInformation(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bạn vẫn chưa đăng nhập.",
      });
      history.push("/login");

      return;
    }
    console.log(history);
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const renderUserContent = () => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    if (!user) return;
    switch (selected) {
      case "inforAccount":
        return (
          <div className="item" key={1}>
            <InforAccount user={user} />
          </div>
        );
      case "inforTicket":
        return (
          <div className="item" key={2}>
            <InforTicket infor={userInformation} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="user__container">
        <div className="background__content">
          {/* <img src={backgroundImg} alt="" className="user__background" /> */}
          <div
            className="user__background"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          ></div>
          <div className="background__filter"></div>
        </div>
        <div className="header">
          <ul className="nav">
            <li
              className={
                selected === "inforAccount" ? "li-item selected" : "li-item"
              }
              onClick={() => {
                handleSelect("inforAccount");
              }}
            >
              Thông tin tài khoản
            </li>
            <li
              className={
                selected === "inforTicket" ? "li-item selected" : "li-item"
              }
              onClick={() => {
                handleSelect("inforTicket");
              }}
            >
              Lịch sử đặt vé
            </li>
          </ul>
        </div>

        <div className="cssAnimation__content">
          <CSSTransitionGroup
            transitionName="item"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={400}
          >
            {renderUserContent()}
          </CSSTransitionGroup>
        </div>
      </div>
    </>
  );
}
