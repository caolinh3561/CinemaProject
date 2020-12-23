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
        listRapCoSuatChieu.push(lichChieuItem);
      }
    });
  }
  let render = () => {
    if (listRapCoSuatChieu && listRapCoSuatChieu.length > 0) {
      return listRapCoSuatChieu.map((item, index) => {
        let lastView = true;
        // console.log("item nè: ", item);
        // let handleSetLastView = () => {
        //   lastView = !lastView;
        //   // console.log("!lastView của: ", item, " là: ", lastView);
        //   return lastView;
        // };
        // console.log("lastView nè: ", lastView);
        return (
          <li
            className="cumRap__item"
            key={index}
            style={{
              overflow: "hidden",
              // opacity: item.maCumRap === maCR ? 1 : 0.5,
            }}
          >
            <img
              src={`/img/imagesTheater/${item.thongTinRap.maCumRap}.jpg`}
              alt=""
              style={{ float: "left", height: "50px" }}
            />
            <div className="infoTheater">
              {" "}
              <h6
                id={`title-${maHTR}`}
                // onClick={() => {
                //   handleSetLastView();
                // }}
              >
                {item.thongTinRap.tenCumRap}
              </h6>
            </div>
            <div className="lichChieu" id={`lichChieu-${maHTR}`}>
              <LichChieuComponent
                movie={movie}
                maHTR={item.thongTinRap.maCumRap}
                ngayChieu={ngayChieu}
                lastView={lastView}
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
