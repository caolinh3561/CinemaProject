import Axios from "axios";
import {
  GET_MOVIE_FAIL,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_REQUEST,
  SEND_MOVIE_UPDATING_SUCCESS,
} from "./constants";

export const actSendMovieUpdating = (data) => {
  return (dispatch) => {
    dispatch(actSendMovieUpdatingSuccess(data));
  };
};

const actSendMovieUpdatingSuccess = (data) => {
  return {
    type: SEND_MOVIE_UPDATING_SUCCESS,
    payload: data,
  };
};

export const actGetMovieWithPagination = (page) => {
  return (dispatch) => {
    dispatch(actGetMovieWithPaginationRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=5`,
    })
      .then((res) => {
        // console.log(res);
        dispatch(actGetMovieWithPaginationSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actGetMovieWithPaginationFail(err.message));
      });
  };
};

const actGetMovieWithPaginationRequest = () => {
  return {
    type: GET_MOVIE_REQUEST,
  };
};
const actGetMovieWithPaginationSuccess = (data) => {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: data,
  };
};
const actGetMovieWithPaginationFail = (err) => {
  return {
    type: GET_MOVIE_FAIL,
    payload: err,
  };
};

export const actPostNewMovie = (movie) => {
  const accessToken = JSON.parse(localStorage.getItem("adminMember"))
    .accessToken;
  return (dispatch) => {
    // dispatch(actPostNewMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        // dispatch(actPostNewMovieSuccess(res.data));
        console.log(res);
        alert("POST MOVIE SUCCESSED!");
      })
      .catch((err) => {
        // dispatch(actPostNewMovieFail(err.message));
        console.log(err);
        alert("POST MOVIE FAILED! ", err.message);
      });
  };
};
export const actUpdateMovie = (movie) => {
  const accessToken = JSON.parse(localStorage.getItem("adminMember"))
    .accessToken;
  return (dispatch) => {
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log(res);
        alert("UPDATE MOVIE SUCCESS!");
      })
      .catch((err) => {
        console.log(err.message);
        alert("UPDATE MOVIE FAIL! ", err.message);
      });
  };
};
export const actUpdateMovieWithoutImage = (movie) => {
  const accessToken = JSON.parse(localStorage.getItem("adminMember"))
    .accessToken;
  return (dispatch) => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log(res);
        alert("UPDATE MOVIE SUCCESS!");
      })
      .catch((err) => {
        console.log(err);
        alert("UPDATE MOVIE FAIL! ", err.message);
      });
  };
};

export const actDeleteMovie = (movieID) => {
  const accessToken = JSON.parse(localStorage.getItem("adminMember"))
    .accessToken;
  return (dispatch) => {
    //dispatchRequest
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movieID}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        // dispatch(actPostNewMovieSuccess(res.data));
        alert("DELETE MOVIE SUCCESS!");
        console.log(res);
      })
      .catch((err) => {
        // dispatch(actPostNewMovieFail(err.message));
        console.log(err);
        alert("DELETE MOVIE FAIL! Phim đã xếp lịch chiếu không thể xóa");
      });
  };
};

// const actPostNewMovieRequest = () => {
//   return {
//     type: POST_MOVIE_REQUEST,
//   };
// };
// const actPostNewMovieSuccess = (data) => {
//   return {
//     type: POST_MOVIE_SUCCESS,
//     payload: data,
//   };
// };
// const actPostNewMovieFail = (err) => {
//   return {
//     type: POST_MOVIE_FAIL,
//     payload: err,
//   };
// };
