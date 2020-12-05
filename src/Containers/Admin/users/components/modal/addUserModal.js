import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { actAddNewUser } from "./../../modules/action";

export default function AddUserModal(props) {
  const { initialState } = props;

  let updatingUser;

  function handleSubmit(values) {
    console.log(values);
  }

  function renderModal() {
    const validationSchema = Yup.object().shape({
      taiKhoan: Yup.string()
        .required("K được bỏ trống trường này!")
        .min(5, "Tài khoản phải có 6 ký tự trở lên!"),
      matKhau: Yup.string().required("K được bỏ trống trường này!"),
      email: Yup.string()
        .required("K được bỏ trống trường này!")
        .email("Email không hợp lệ!"),
      hoTen: Yup.string().required("K được bỏ trống trường này!"),
    });
    return (
      <>
        <div className="modal-body">
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            enableReinitialize
            // onSubmit={(values) => console.log(values)}
            onSubmit={(values, actions) => {
              console.log(values);
              // handleSubmit(values);
              setTimeout(() => {
                // actions.resetForm({});
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(formikProps) => {
              const { values, touched, errors, setFieldValue } = formikProps;
              return (
                <Form>
                  {/* <Paper
                        elevation={4}
                        style={{ padding: "20px 15px", marginTop: "30px" }}
                      > */}
                  {/* <Typography variant="h4" display-4="true" gutterBottom>
                    Signup
                  </Typography> */}
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.hoTen && touched.hoTen}
                  >
                    <InputLabel>Tên</InputLabel>
                    <Field name="hoTen">
                      {({ field }) => <Input fullWidth {...field} />}
                    </Field>
                    {touched.hoTen && (
                      <FormHelperText>{errors.hoTen}</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.taiKhoan && touched.taiKhoan}
                  >
                    <InputLabel>Tài Khoản</InputLabel>
                    <Field name="taiKhoan">
                      {({ field }) => <Input fullWidth {...field} />}
                    </Field>
                    {touched.taiKhoan && (
                      <FormHelperText>{errors.taiKhoan}</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.matKhau && touched.matKhau}
                  >
                    <InputLabel>Password</InputLabel>
                    <Field name="matKhau">
                      {({ field }) => (
                        <Input type="password" fullWidth {...field} />
                      )}
                    </Field>
                    {touched.matKhau && (
                      <FormHelperText>{errors.matKhau}</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.email && touched.email}
                  >
                    <InputLabel>Email</InputLabel>
                    <Field name="email">
                      {({ field }) => <Input fullWidth {...field} />}
                    </Field>
                    {touched.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.maLoaiNguoiDung && touched.maLoaiNguoiDung}
                  >
                    <InputLabel>Loại tài khoản</InputLabel>
                    <Field name="maLoaiNguoiDung">
                      {({ field }) => <Input fullWidth {...field} />}
                    </Field>
                    {touched.maLoaiNguoiDung && (
                      <FormHelperText>{errors.maLoaiNguoiDung}</FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.soDt && touched.soDt}
                  >
                    <InputLabel>Số Điện Thoại</InputLabel>
                    <Field name="soDt">
                      {({ field }) => <Input type="tel" fullWidth {...field} />}
                    </Field>
                    {touched.soDt && (
                      <FormHelperText>{errors.soDt}</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <Button variant="contained" color="primary" type="submit">
                      Thêm Mới
                    </Button>
                  </FormControl>
                  {/* </Paper> */}
                </Form>
              );
            }}
          </Formik>
        </div>
        {/* <div className="modal-footer">
          <Button
            type="submit"
            variant="contained"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </div> */}
      </>
    );
  }

  return (
    <>
      <div
        className="modal fade"
        id="userModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className={
                  updatingUser
                    ? "modal-title text-primary"
                    : "modal-title text-success"
                }
                id="userModalLabel"
              >
                {updatingUser ? "Cập nhật Người Dùng" : "Thêm Người Dùng"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {renderModal()}
          </div>
        </div>
      </div>
    </>
  );
}
