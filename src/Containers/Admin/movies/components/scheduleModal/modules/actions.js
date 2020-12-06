import Axios from "axios";
import {
  GET_ALL_HTR_SUCCESS,
  GET_ALL_HTR_REQUEST,
  GET_ALL_HTR_FAIL,
  GET_ALL_HTCR,
} from "./constants";

export const actGetHTR = () => {
  return (dispatch) => {
    dispatch(actGetHTRRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((res) => {
        dispatch(actGetHTRSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actGetHTRFail(err.message));
        console.log(err.message);
      });
  };
};

const actGetHTRRequest = () => {
  return {
    type: GET_ALL_HTR_REQUEST,
  };
};
const actGetHTRSuccess = (data) => {
  return {
    type: GET_ALL_HTR_SUCCESS,
    payload: data,
  };
};
const actGetHTRFail = (err) => {
  return {
    type: GET_ALL_HTR_FAIL,
    payload: err,
  };
};

export const actGetHTCR = (maHTR) => {
  return (dispatch) => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHTR}`,
    })
      .then((res) => {
        dispatch(actGetHTCRSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
const actGetHTCRSuccess = (data) => {
  return {
    type: GET_ALL_HTCR,
    payload: data,
  };
};

export const actPostNewSchedule = (newSchedule) => {
  const accessToken = JSON.parse(localStorage.getItem("adminMember"))
    .accessToken;
  return (dispatch) => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
      method: "POST",
      data: newSchedule,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        alert("Thêm Lịch Chiếu Thành Công!");
      })
      .catch((err) => {});
  };
};
