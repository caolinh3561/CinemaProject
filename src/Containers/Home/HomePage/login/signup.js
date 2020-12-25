import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Signup() {
  let handleSubmit = (values) => {
    delete values.matKhauConfirm;
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: values,
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công!",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oop...",
          text: `${err.message}`,
        });
      });
    console.log(values);
  };

  function renderSignupForm() {
    let initialState = {
      taiKhoan: "",
      matKhau: "",
      matKhauConfirm: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
      maLoaiNguoiDung: "KhachHang",
    };
    const validationSchema = Yup.object().shape({
      taiKhoan: Yup.string().required("Không được bỏ trống!"),
      matKhau: Yup.string().required("Không được bỏ trống!"),
      matKhauConfirm: Yup.string()
        .required("Không được bỏ trống!")
        .oneOf(
          [Yup.ref("matKhau"), null],
          "Mật khẩu xác nhận không trùng khớp!"
        ),
      email: Yup.string()
        .required("Không được bỏ trống!")
        .email("Email không hợp lệ!"),
      hoTen: Yup.string().required("Không được bỏ trống!"),
      soDt: Yup.number("chỉ được chứa ký tự số!")
        .required("Không được bỏ trống!")
        .positive("chỉ được chứa ký tự số!"),
    });
    return (
      <>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          enableReinitialize
          // onSubmit={(values) => console.log(values)}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSubmit(values);

              actions.resetForm({
                taiKhoan: "",
                matKhau: "",
                matKhauConfirm: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                hoTen: "",
              });
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(formikProps) => {
            const { touched, errors } = formikProps;
            // console.log({ values, touched, errors });
            return (
              <Form>
                <FormControl
                  style={{ width: "48%", marginRight: "2%" }}
                  margin="normal"
                  error={!!errors.hoTen && touched.hoTen}
                >
                  <InputLabel>Họ Tên</InputLabel>
                  <Field name="hoTen">
                    {({ field }) => (
                      <Input variant="outlined" fullWidth {...field} />
                    )}
                  </Field>
                  {touched.hoTen && (
                    <FormHelperText>{errors.hoTen}</FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  style={{ width: "48%", marginRight: "2%" }}
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
                  style={{ width: "48%", marginRight: "2%" }}
                  margin="normal"
                  error={!!errors.matKhau && touched.matKhau}
                  autoComplete="new-password"
                >
                  <InputLabel>Mật khẩu</InputLabel>
                  <Field name="matKhau">
                    {({ field }) => (
                      <Input
                        autoComplete="new-password"
                        type="password"
                        fullWidth
                        {...field}
                      />
                    )}
                  </Field>
                  {touched.matKhau && (
                    <FormHelperText>{errors.matKhau}</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  style={{ width: "48%", marginRight: "2%" }}
                  margin="normal"
                  error={!!errors.matKhauConfirm && touched.matKhauConfirm}
                  autoComplete="new-password"
                >
                  <InputLabel>Xác Nhận Mật khẩu</InputLabel>
                  <Field name="matKhauConfirm">
                    {({ field }) => (
                      <Input
                        autoComplete="new-password"
                        type="password"
                        fullWidth
                        {...field}
                      />
                    )}
                  </Field>
                  {touched.matKhauConfirm && (
                    <FormHelperText>{errors.matKhauConfirm}</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  style={{ width: "48%", marginRight: "2%" }}
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
                  style={{ width: "48%", marginRight: "2%" }}
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
                  <Button
                    className="mt-4 text-white"
                    variant="outlined"
                    type="submit"
                    style={{ outline: "none", backgroundColor: "#fb4226" }}
                  >
                    Đăng ký
                  </Button>
                </FormControl>
                {/* </Paper> */}
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
  return <>{renderSignupForm()}</>;
}