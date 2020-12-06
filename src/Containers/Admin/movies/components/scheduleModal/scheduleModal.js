import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";

export default function ScheduleModal(props) {
  const { movie } = props;
  let initialValues = {
    heThongRap: "",
    cumRap: "",
    maRap: "",
    ngayChieuGioChieu: "",
    giaVe: 0,
  };
  const renderBodyForm = () => {
    console.log(movie);
    return (
      <Formik initialValues={initialValues}>
        {(formikprops) => {
          const { values, errors, touched } = formikprops;
          return (
            <Form>
              <Typography>{movie.tenPhim}</Typography>
              <FormControl
                style={{ width: "48%", marginRight: "2%" }}
                margin="normal"
              >
                <InputLabel>Hệ Thống Rạp</InputLabel>
                <Field name="heThongRap">
                  {({ field }) => (
                    <Select fullWidth {...field}>
                      <MenuItem value={"KhachHang"}>Khách Hàng</MenuItem>
                      <MenuItem value={"QuanTri"}>Quản Trị</MenuItem>
                    </Select>
                  )}
                </Field>
              </FormControl>
            </Form>
          );
        }}
      </Formik>
    );
  };

  return (
    <>
      <div
        className="modal fade"
        id="scheduleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="scheduleModalId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm Lịch Chiếu</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">{renderBodyForm()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
