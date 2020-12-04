import { Button } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actGetMovieWithPagination,
  actDeleteMovie,
  actSendMovieUpdating,
} from "./modules/actions";
import MovieItem from "./movieItem/movieItem";
import MovieModal from "./movieModal/MovieModal";
function MovieManagement(props) {
  const responseData = useSelector(
    (state) => state.movieListWithPaginationReducer.movieList
  );
  const [page, setpage] = useState(1);
  const [updatingMovie, setUpdatingMovie] = useState(false);
  const movieNeedUpdate = useSelector(
    (state) => state.movieListWithPaginationReducer.movieNeedUpdate
  );
  const [movie, setMovie] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
    danhGia: 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getMovies());
    dispatch(actGetMovieWithPagination(page));
  }, [dispatch, page]);

  function handleOnChangePage(e, value) {
    setpage(value);
  }

  function handleUpdate(item) {
    const { name, value } = item;
    setUpdatingMovie(true);
    setMovie({
      ...movie,
      [name]: value,
    });

    dispatch(actSendMovieUpdating(item));
  }

  function handleDelete(id) {
    dispatch(actDeleteMovie(id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(movie);
  }

  function handleOnChange(e) {
    const { value, name, files } = e.target;
    setMovie({
      ...movie,
      [name]: value,
      hinhAnh: files,
    });
  }
  return (
    <>
      <h1 className="text-center text-success">Movie Management</h1>
      <nav className="d-flex justify-content-between mb-4">
        <input type="search" />
        <Button
          className="text-success border-success"
          variant="outlined"
          data-toggle="modal"
          data-target="#movieModal"
          onClick={() => {
            setUpdatingMovie(false);
            // dispatch(actSendMovieUpdating({}));
          }}
        >
          Thêm Phim Mới
        </Button>
      </nav>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Phim</th>
            <th>Tên Phim</th>
            <th>Dánh Giá</th>
            <th>Ngày Khởi Chiếu</th>
            <th>Hình Ảnh</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <MovieItem
            movieList={responseData.items ? responseData.items : []}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </tbody>
      </table>
      <div>
        <Pagination
          count={responseData ? responseData.totalPages : 10}
          page={page}
          size="large"
          color="standard"
          onChange={handleOnChangePage}
        />
      </div>
      <MovieModal
        movie={updatingMovie ? movieNeedUpdate : movie}
        updatingMovie={updatingMovie}
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
    </>
  );
}

export default MovieManagement;
