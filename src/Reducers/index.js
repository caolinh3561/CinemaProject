import { combineReducers } from "redux";
import moviesReducer from "./../Containers/Home/HomePage/movieList/modules/reducer";
import heThongRapReducer from "./../Containers/Home/HomePage/movieSchedule/heThongRap/modules/reducer";
import hTCRReducer from "./../Containers/Home/HomePage/movieSchedule/heThongCumRap/modules/reducer";
import lichChieuPhimReducer from "../Containers/Home/HomePage/movieSchedule/lichChieuPhim/modules/reducer";
import movieDetailReducer from "../Containers/Home/HomePage/MovieDetail/modules/reducer";
import loginReducer from "./../Containers/Admin/login/modules/reducer";
import userReducer from "./../Containers/Admin/users/modules/reducer";
import movieListWithPaginationReducer from "./../Containers/Admin/movies/modules/reducer";
import scheduleMovieReducer from "./../Containers/Admin/movies/components/scheduleModal/modules/reducer";
import ticketRoomReducer from "./../Containers/Home/HomePage/checkout/modules/reducer";
const rootReducer = combineReducers({
  moviesReducer,
  heThongRapReducer,
  hTCRReducer,
  lichChieuPhimReducer,
  movieDetailReducer,
  loginReducer,
  userReducer,
  movieListWithPaginationReducer,
  scheduleMovieReducer,
  ticketRoomReducer,
});

export default rootReducer;
