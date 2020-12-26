import React from "react";

export default function InforAccount(props) {
  const { user } = props;

  return (
    <div className="user__content row">
      {/* <h3>Thông Tin Tài Khoản</h3> */}
      <div
        className="sideBar col-sm-4"
        style={{ borderRight: "1px solid #868686" }}
      >
        <nav>
          <ul>
            <li className="li-item text-white">Thông tin tài khoản</li>
            <li className="li-item">Cập nhật tài khoản</li>
            <li className="li-item">Thay đổi mật khẩu</li>
            <li className="li-item">Lịch sử đặt vé</li>
            <li className="li-item">Đăng xuất</li>
          </ul>
        </nav>
      </div>
      <div className="user__infor col-sm-8">
        <div className="infor__item row">
          <p className="title">Họ tên</p>
          <p className="infor">{user.hoTen}</p>
        </div>
        <div className="infor__item row">
          <p className="title">Tài khoản</p>
          <p className="infor">{user.taiKhoan}</p>
        </div>
        <div className="infor__item row">
          <p className="title">Email</p>
          <p className="infor">{user.email}</p>
        </div>
        <div className="infor__item row">
          <p className="title">Số điện thoại</p>
          <p className="infor">{user.soDT}</p>
        </div>
      </div>
    </div>
  );
}
