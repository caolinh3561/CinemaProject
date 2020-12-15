import logo from "assets/img/loginImg/logoWithSlogan.png";
import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./index.scss";

export default class UserLogin extends Component {
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
          this.props.history.push("");
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
          <img className="logo" src={logo} alt="logo" />
          <div className="form__content">
            <FormGroup>
              <Label for="taiKhoan">Tài Khoản</Label>
              <Input
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
          <p className="text-white">
            bạn chưa có tài khoản?{" "}
            <Link to="#" className="a-link">
              Đăng ký ngay!
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
