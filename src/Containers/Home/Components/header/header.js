import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
class HeaderComponent extends Component {
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
