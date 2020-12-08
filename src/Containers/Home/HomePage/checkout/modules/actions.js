import Axios from "axios";
import {
  GET_TICKET_ROOM_FAIL,
  GET_TICKET_ROOM_REQUEST,
  GET_TICKET_ROOM_SUCCESS,
} from "./constants";

export const actGetTicketRoom = () => {
  return (dispatch) => {
    dispatch(actGetTicketRoomRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=40793",
    })
      .then((res) => {
        dispatch(actGetTicketRoomSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actGetTicketRoomFail());
      });
  };
};

const actGetTicketRoomRequest = () => {
  return {
    type: GET_TICKET_ROOM_REQUEST,
  };
};
const actGetTicketRoomSuccess = (data) => {
  return {
    type: GET_TICKET_ROOM_SUCCESS,
    payload: data,
  };
};
const actGetTicketRoomFail = (err) => {
  return {
    type: GET_TICKET_ROOM_FAIL,
    payload: err,
  };
};
