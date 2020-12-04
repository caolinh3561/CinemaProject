import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { actLogin } from "./modules/action";
function LoginPage() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const history = useHistory();
  const dispatch = useDispatch();
  function handleOnChange(e) {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    dispatch(actLogin(user, history));
  }
  return (
    <div className="background__Login">
      <div className="login__container">
        <h1 className="display-4 text-center text-success">Login</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="text-success">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              name="taiKhoan"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="text-success">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="matKhau"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
