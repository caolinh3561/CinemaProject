import logo from "assets/img/loginImg/logoWithSlogan.png";
import logoFB from "assets/img/loginImg/fb_icon_2013.svg.png";
import logoGG from "assets/img/loginImg/gg_icon.png";
import logoTW from "assets/img/loginImg/tw_icon.png";
import logoZL from "assets/img/loginImg/zalo_.jpg";
import Axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./index.scss";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      invalid: false,
    };
  }
  handleSubmit = () => {
    let data = { taiKhoan: this.state.taiKhoan, matKhau: this.state.matKhau };
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: data,
    })
      .then((res) => {
        if (res.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("userMember", JSON.stringify(res.data));
          this.setState({ invalid: false });
          if (!this.props.location.state) {
            this.props.history.push("");
          }
          if (
            this.props.location.state &&
            this.props.location.state.scheduleId
          ) {
            this.props.history.push(
              `/checkout/${this.props.location.state.scheduleId}`
            );
          }
        } else {
          this.setState({ invalid: true });
        }
      })
      .catch((err) => {
        this.setState({ invalid: true });
      });
  };
  handleOnChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="userLogin">
        <div className="login__content">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="form__content">
            <FormGroup>
              <Label for="taiKhoan">Tài Khoản</Label>
              <Input
                placeholder="Tài Khoản"
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                onChange={this.handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="matKhau">Mật khẩu</Label>
              <Input
                invalid={this.state.invalid}
                type="password"
                name="matKhau"
                id="matKhau"
                onChange={this.handleOnChange}
              />
              <FormFeedback>Tài khoản hoặc mật khẩu không đúng!</FormFeedback>
            </FormGroup>
            <Button
              className="btn-submit"
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Đăng nhập
            </Button>
          </div>
          <p className="text-white m-0">
            bạn chưa có tài khoản?{" "}
            <Link to="#" className="a-link">
              Đăng ký ngay!
            </Link>
          </p>
          <p className="text-white ">Hoặc đăng nhập với</p>
          <div className="social__logo">
            <Link to="#">
              <img
                className="logo__item"
                src={logoFB}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
            </Link>

            <Link to="#">
              <img
                className="logo__item"
                src={logoGG}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
            </Link>
            <Link to="#">
              <img
                className="logo__item"
                src={logoZL}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
            </Link>
            <Link to="#">
              <img
                className="logo__item"
                src={logoTW}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(UserLogin);
