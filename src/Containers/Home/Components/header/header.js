import React, { Component } from "react";
import { Link } from "react-router-dom";
import tixLogo from "assets/img/tix-logo.png";
import "./index.scss";
class HeaderComponent extends Component {
  renderUserInfor = () => {
    const user = JSON.parse(localStorage.getItem("userMember"));
    if (user)
      return (
        <Link to="#" href="#" className="signin logged">
          <i className="fa fa-user-circle"></i>
          <img src="/img/avatar-login.png" alt="" />
          <span> {user.hoTen}</span>
        </Link>
      );
    else
      return (
        <Link to="/login" href="#" className="signin">
          <i className="fa fa-user-circle"></i>
          <img src="/img/avatar-login.png" alt="" />
          <span>Đăng nhập</span>
        </Link>
      );
  };
  handleLinkClick = (elementId) => {
    setTimeout(() => {
      var ele = document.getElementById(elementId);
      ele.scrollIntoView();
    }, 300);
  };
  render() {
    return (
      <header>
        <Link
          onClick={() => {
            this.handleLinkClick("carouselId");
          }}
          to={{ pathname: "/" }}
          className="logo"
        >
          <img src={tixLogo} alt="" />
        </Link>
        <nav className="header__menu">
          <ul className="mb-0">
            <li>
              {/* <a href="#idPhimDangChieu" to="/">
                Lịch chiếu
              </a> */}
              <Link
                onClick={() => {
                  this.handleLinkClick("idPhimDangChieu");
                }}
                to={{ pathname: "/" }}
              >
                Lịch chiếu
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  this.handleLinkClick("idCumRap");
                }}
                to={{ pathname: "/" }}
              >
                Cụm rạp
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  this.handleLinkClick("idTinTuc");
                }}
                to={{ pathname: "/" }}
              >
                Tin tức
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  this.handleLinkClick("idUngDung");
                }}
                to={{ pathname: "/" }}
              >
                Ứng dụng
              </Link>
            </li>
          </ul>
        </nav>
        {this.renderUserInfor()}
      </header>
    );
  }
}

export default HeaderComponent;
