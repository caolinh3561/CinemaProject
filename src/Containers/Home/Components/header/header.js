import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
class HeaderComponent extends Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", this.onScroll, false);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }
  // onScroll = () => {
  //   window.onscroll = function () {
  //   var header = document.getElementsByClassName("header__content")[0];
  //   if (!header) return;
  //   if (window.pageYOffset > 400) {
  //     console.log("Chayj khong?");
  //     header.classList.add("header__change");
  //   } else {
  //     if (header.classList.contains("header__change")) {
  //       header.classList.remove("header__change");
  //     }
  //   }
  //   };
  // };
  render() {
    return (
      <header>
        <Link to="#" className="logo">
          <img src="img/tix-logo.png" alt="" />
        </Link>
        <nav class="header__menu">
          <ul className="mb-0">
            <li>
              <a href="#idPhimDangChieu" to="/">
                Lịch chiếu
              </a>
              {/* <Link to="#idPhimDangChieu">Lịch chiếu</Link> */}
            </li>
            <li>
              <a href="#idCumRap">Cụm rạp</a>
            </li>
            <li>
              <a href="#idTinTuc">Tin tức</a>
            </li>
            <li>
              <a href="#idUngDung">Ứng dụng</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="signin">
          <i class="fa fa-user-circle"></i>
          <img src="/img/avatar-login.png" />
          <span>Đăng nhập</span>
        </a>
      </header>
    );
  }
}

export default HeaderComponent;
