import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./../../HomePage/login";
import "./index.scss";
class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <a href="#carouselId" className="logo">
          <img src="img/tix-logo.png" alt="" />
        </a>
        <nav className="header__menu">
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
        <Link to="/login" href="#" className="signin">
          <i className="fa fa-user-circle"></i>
          <img src="/img/avatar-login.png" />
          <span>Đăng nhập</span>
        </Link>
      </header>
    );
  }
}

export default HeaderComponent;
