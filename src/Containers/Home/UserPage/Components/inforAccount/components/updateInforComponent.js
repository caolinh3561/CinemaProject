import React from "react";
import "./component.scss";

export default function UpdateInforComponent(props) {
  const { user } = props;
  return (
    <div className="updateInfor__content col-sm-12">
      <h6 className="text-right col-sm-8 mb-3">Cập nhật thông tin</h6>

      <div className="infor__item">
        <p className="title">Tài khoản</p>
        <p className="infor">{user.taiKhoan}</p>
      </div>
      <div className="infor__item">
        <p className="title">Họ tên</p>
        <p className="infor">
          <input
            type="text"
            defaultValue={user.hoTen}
            className="updateInfor__input"
          />
        </p>
      </div>
      <div className="infor__item">
        <p className="title">Email</p>
        <p className="infor">
          <input
            type="text"
            defaultValue={user.email}
            className="updateInfor__input"
          />
        </p>
      </div>
      <div className="infor__item">
        <p className="title">Số điện thoại</p>
        <p className="infor">
          <input
            type="text"
            defaultValue={user.soDT}
            className="updateInfor__input"
          />
        </p>
      </div>
    </div>
  );
}
