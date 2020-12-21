import React, { useEffect } from "react";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { actGetHTCR } from "./modules/action";
import "./index.scss";
import LichChieuComponent from "./lichChieuComponent";
import NgayChieuComponent from "./ngayChieuComponent";
export default function CumRapComponent(props) {
  let movie = props.movie;
  const dispatch = useDispatch();
  // let heThongCumRap = useSelector(
  //   (state) => state.showingHTCRReducer.heThongCumRap
  // );
  // let valid = true;
  // const setIsValid = (e) => {
  //   setState({
  //     isValid: e,
  //   });
  // };
  // let [state, setState] = useState({ isValid: true });

  let maHTR = useSelector((state) => state.showingHeThongRapReducer.maHTR);
  let ngayChieu = useSelector(
    (state) => state.showingShowDayReducer.currentDay
  );
  useEffect(() => {
    dispatch(actGetHTCR(maHTR));
  }, [dispatch, maHTR]);
  let listRapCoSuatChieu = [];
  // useEffect(() => {
  //   setState({
  //     isValid: true,
  //   });
  // }, []);
  // lọc những rạp có suất chiếu của phim
  if (movie && movie.lichChieu && movie.lichChieu.length > 0) {
    let checkAdult = (id) => {
      //hàm findIndex tìm vị trí
      return listRapCoSuatChieu.findIndex((item) => {
        return item === id;
      });
    };
    movie.lichChieu.forEach((lichChieuItem) => {
      let maCumRap = lichChieuItem.thongTinRap.maCumRap;
      let maHeThongRap = lichChieuItem.thongTinRap.maHeThongRap;
      let ngayChieuItem = dayjs(lichChieuItem.ngayChieuGioChieu).format(
        "DD/MM/YYYY"
      );
      let ind = checkAdult(maCumRap);
      //lọc maHeThongRap , ngayChieu và push vào listRapCoSuatChieu
      if (
        ind === -1 &&
        maHeThongRap === maHTR &&
        ngayChieuItem === dayjs(ngayChieu).format("DD/MM/YYYY")
      ) {
        listRapCoSuatChieu.push(maCumRap);
      }
    });
  }
  let render = () => {
    if (listRapCoSuatChieu && listRapCoSuatChieu.length > 0) {
      return listRapCoSuatChieu.map((item, index) => {
        return (
          <li
            className="cumRap__item"
            key={index}
            style={{
              overflow: "hidden",
              // opacity: item.maCumRap === maCR ? 1 : 0.5,
            }}
          >
            <h6
            // onClick={() => {
            //   setState();
            // }}
            >
              {item}
            </h6>
            <div
              className="lichChieu"
              // style={state.isValid?"":""}
              // style={{
              //   height: state.isValid ? "100%" : 0,
              // }}
            >
              <LichChieuComponent
                movie={movie}
                maHTR={item}
                ngayChieu={ngayChieu}
              />
            </div>
          </li>
        );
      });
    } else {
      return (
        <div style={{ color: "black", fontSize: "1rem" }}>
          <p style={{ marginTop: "20px", textAlign: "center" }}>
            Không có suất chiếu
          </p>
        </div>
      );
    }
  };

  return (
    <ul className="listCumRap">
      <li className="listDayTime__content">
        <ul className="listDayTime">
          <NgayChieuComponent movie={movie} />
        </ul>
      </li>
      {render()}
    </ul>
  );
}
