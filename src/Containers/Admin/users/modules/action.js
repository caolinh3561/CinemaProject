import Axios from "axios";
import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  ADD_NEW_USER_FAIL,
  ADD_NEW_USER_REQUEST,
  ADD_NEW_USER_SUCCESS,
} from "./constant";

export const actGetAllUser = (currentPage, count) => {
  return (dispatch) => {
    dispatch(actGetAllUserRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${currentPage}&soPhanTuTrenTrang=${count}`,
    })
      .then((res) => {
        dispatch(actGetAllUserSuccess(res.data));
        // console.log(res.data);
      })
      .catch((err) => {
        dispatch(actGetAllUserFail(err.message));
      });
  };
};
const actGetAllUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};
const actGetAllUserSuccess = (res) => {
  return {
    type: GET_USER_SUCCESS,
    payload: res,
  };
};
const actGetAllUserFail = (err) => {
  return {
    type: GET_USER_FAIL,
    payload: err,
  };
};

export const actAddNewUser = (user) => {
  return (dispatch) => {
    dispatch(actAddNewUserRequest());
    const accessToken = JSON.parse(localStorage.getItem("adminMember"))
      .accessToken;
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log("Success!!!");
        dispatch(actAddNewUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actAddNewUserFail(err.message));
      });
  };
};

const actAddNewUserRequest = () => {
  return {
    type: ADD_NEW_USER_REQUEST,
  };
};
const actAddNewUserSuccess = (data) => {
  return {
    type: ADD_NEW_USER_SUCCESS,
    payload: data,
  };
};
const actAddNewUserFail = (err) => {
  return {
    type: ADD_NEW_USER_FAIL,
    payload: err,
  };
};

export const actDeleteUser = (taiKhoan) => {
  return (dispatch) => {
    const accessToken = JSON.parse(localStorage.getItem("adminMember"))
      .accessToken;
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log("Delete Success!!!");
        alert("Xóa Thành Công!");
      })
      .catch((err) => {
        alert("Người dùng này đã đặt vé nên không thể xóa!");
      });
  };
};
