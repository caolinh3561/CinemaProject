import Axios from "axios";
import {
  GET_TICKET_ROOM_FAIL,
  GET_TICKET_ROOM_REQUEST,
  GET_TICKET_ROOM_SUCCESS,
} from "./constants";

export const actGetTicketRoom = (scheduleId) => {
  return (dispatch) => {
    dispatch(actGetTicketRoomRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`,
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

export const actBookingTickets = (ticketInfor) => {
  const accessToken = JSON.parse(localStorage.getItem("userMember"))
    .accessToken;
  return (dispatch) => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: ticketInfor,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        alert("Đặt vé thành công!");
        console.log(res.data);
      })
      .catch((err) => {
        alert("Đặt vé thất bại! mời thử lại.");
        console.log(err.message);
      });
  };
};
