import { Button, TextField } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import BuildIcon from "@material-ui/icons/Build";
import DeleteIcon from "@material-ui/icons/Delete";
import Pagination from "@material-ui/lab/Pagination";
import Modal from "@material-ui/core/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { actDeleteUser, actGetAllUser } from "./modules/action";
import FormikForm from "./components/modal/addUserModal";
import Axios from "axios";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

function getModalStyle() {
  const top = 5;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function UserManagement(props) {
  const responseData = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [page, setPage] = React.useState(1);

  const [updatingUser, setUpdatingUser] = useState(false);
  // const [user, setUser] = useState({
  //   taiKhoan: "",
  //   matKhau: "",
  //   email: "",
  //   soDt: "",
  //   maNhom: "GP01",
  //   maLoaiNguoiDung: "",
  //   hoTen: "",
  // });
  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">Tài khoản mới</h2>
  //     <hr />
  //     <FormikForm />
  //   </div>
  // );

  const handleOnChange = (event, value) => {
    console.log(value);
    setPage(value);
  };
  useEffect(() => {
    dispatch(actGetAllUser(page, 10));
  }, [dispatch, page]);

  function handleDelete(taiKhoan) {
    dispatch(actDeleteUser(taiKhoan));
    console.log(taiKhoan);
  }

  function handleUpdateUser(taiKhoan) {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`,
    })
      .then((res) => {
        console.log(res.data);
        const { key, value } = res.data;
        // setUser(res.data);
        // const user = {
        //   taiKhoan: res.data[name].value,
        //   matKhau: "",
        //   email: "",
        //   soDt: "",
        //   maNhom: "GP01",
        //   maLoaiNguoiDung: "",
        //   hoTen: "",
        // };
        const user = res.data;
        console.log(user);
        // handleOpen();
      })
      .catch((err) => {});
  }

  function handleRender() {
    if (responseData) {
      return responseData.items.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.taiKhoan}</td>
            <td>{item.matKhau}</td>
            <td>{item.hoTen}</td>
            <td>{item.maLoaiNguoiDung}</td>
            <td>
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
                  console.log(item);
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
      <nav>
        {/* <button type="button" onClick={handleOpen}>
          Thêm Tài Khoản
        </button> */}
        <FormikForm
          // handleOpen={handleOpen}
          // handleClose={handleClose}
          // open={open}
          updatingUser={updatingUser}
          // user={user}
        />
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
        <tbody>{handleRender()}</tbody>
      </table>
      <div className={classes.root}>
        <Pagination
          count={responseData ? responseData.totalPages : 10}
          page={page}
          size="large"
          color="standard"
          onChange={handleOnChange}
        />
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FormikForm />
      </Modal> */}
    </div>
  );
}

export default UserManagement;
