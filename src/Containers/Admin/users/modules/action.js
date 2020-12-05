import Axios from "axios";
import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  ADD_NEW_USER_FAIL,
  ADD_NEW_USER_REQUEST,
  ADD_NEW_USER_SUCCESS,
  USER_NEED_UPDATE,
} from "./constant";

export const actGetAllUser = (keyword, currentPage, count) => {
  let url;
  if (keyword && keyword !== null) {
    url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${keyword}&soTrang=${currentPage}&soPhanTuTrenTrang=${count}`;
  } else {
    url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${currentPage}&soPhanTuTrenTrang=${count}`;
  }
  return (dispatch) => {
    dispatch(actGetAllUserRequest());
    Axios.get(url)
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
        dispatch(actAddNewUserSuccess(res.data));
        if (!alert("Thêm Người Dùng Mới Thành Công!!!")) {
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Create New User Failed!!!", err.message);
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
        if (!alert(`Xóa Người Dùng ${taiKhoan} Thành Công!`)) {
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Người dùng này đã đặt vé nên không thể xóa!");
      });
  };
};

export const actFindUserbyUserName = (taiKhoan) => {
  return (dispatch) => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`,
    })
      .then((res) => {
        dispatch(actPushUserNeedUpdate(res.data));
      })
      .catch((err) => {
        console.log(err.message, "FAILED TO GET USER INFORMATION");
      });
  };
};
const actPushUserNeedUpdate = (data) => {
  return {
    type: USER_NEED_UPDATE,
    payload: data,
  };
};

export const actUpdateUser = (user) => {
  const accessToken = JSON.parse(localStorage.getItem("adminMember"))
    .accessToken;
  return (dispatch) => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        //if(!alert('Alert For your User!')){window.location.reload();}
        if (!alert("Cập nhật người dùng thành công!")) {
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Cập nhật người dùng thất bại!", err.message);
      });
  };
};
