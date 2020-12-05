import { Button } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import BuildIcon from "@material-ui/icons/Build";
import DeleteIcon from "@material-ui/icons/Delete";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { actDeleteUser, actGetAllUser } from "./modules/action";
import Axios from "axios";
import AddUserModal from "./components/modal/addUserModal";

function UserManagement(props) {
  const responseData = useSelector((state) => state.userReducer.data);
  const UserNeedUpdate = useSelector(
    (state) => state.userReducer.UserNeedUpdate
  );
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const [updatingUser, setUpdatingUser] = useState(false);

  let initialState = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
  };

  const handleOnChange = (event, value) => {
    console.log(value);
    setPage(value);
  };
  useEffect(() => {
    dispatch(actGetAllUser(page, 8));
  }, [dispatch, page]);

  function handleDelete(taiKhoan) {
    // dispatch(actDeleteUser(taiKhoan));
    console.log(taiKhoan);
  }

  function handleUpdateUser(taiKhoan) {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`,
    })
      .then((res) => {})
      .catch((err) => {});
  }

  function handleRenderTable() {
    if (responseData) {
      return responseData.items.map((item, index) => {
        return (
          <tr
            style={{ backgroundColor: index % 2 === 0 ? "beige" : "white" }}
            key={index}
          >
            <td>{item.taiKhoan}</td>
            <td>{item.matKhau}</td>
            <td>{item.hoTen}</td>
            <td>{item.maLoaiNguoiDung}</td>
            <td className="d-flex justify-content-center">
              <Button
                size="small"
                style={{ outline: "none" }}
                onClick={() => {
                  handleUpdateUser(item.taiKhoan);
                }}
              >
                <BuildIcon fontSize="small" style={{ color: green[500] }} />
              </Button>
              <Button
                size="small"
                style={{ outline: "none" }}
                onClick={() => {
                  handleDelete(item.taiKhoan);
                }}
              >
                <DeleteIcon fontSize="small" style={{ color: red[500] }} />
              </Button>
            </td>
          </tr>
        );
      });
    }
  }
  return (
    <div>
      <h1 className="text-center display-4 text-success">User Management</h1>
      <nav className="d-flex justify-content-between mb-4">
        <input type="search" />
        <Button
          className="text-success border-success"
          variant="outlined"
          data-toggle="modal"
          data-target="#userModal"
          onClick={() => {
            setUpdatingUser(false);
            // dispatch(actSendMovieUpdating({}));
          }}
        >
          Thêm Người Dùng
        </Button>
      </nav>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>TàiKhoản</th>
            <th>MậtKhẩu</th>
            <th>HọTên</th>
            <th>LoạiTK</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>{handleRenderTable()}</tbody>
      </table>
      <Pagination
        count={responseData ? responseData.totalPages : 10}
        page={page}
        size="large"
        color="standard"
        onChange={handleOnChange}
      />
      <AddUserModal initialState={initialState} />
    </div>
  );
}

export default UserManagement;
