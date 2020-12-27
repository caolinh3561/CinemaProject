import Axios from "axios";
import {
  GET_TICKET_ROOM_FAIL,
  GET_TICKET_ROOM_REQUEST,
  GET_TICKET_ROOM_SUCCESS,
} from "./constants";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export const actGetTicketRoom = (scheduleId) => {
  return (dispatch) => {
    dispatch(actGetTicketRoomRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`,
    })
      .then((res) => {
        // console.log(res.data);
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
        Swal.fire({
          icon: "success",
          title: "Đặt vé thành công!",
          // text: ".",
        });
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Đặt vé thất bại!",
          // text: ".",
        });
        console.log(err.message);
      });
  };
};
