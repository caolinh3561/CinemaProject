import React, { Component } from "react";
import HeThongRapComponent from "./heThongRap";
import HeThongCumRapComponent from "./heThongCumRap";
import { actGetHTCR } from "./heThongCumRap/modules/action";
import { connect } from "react-redux";
import LichChieuPhimComponent from "./lichChieuPhim";
class MovieSchedule extends Component {
  maRapDangChon = "";
  sendProps = (item) => {
    if (item && item.maHeThongRap !== null) {
      this.maRapDangChon = item.maHeThongRap;
      this.props.actGetMaHTR(this.maRapDangChon);
      // console.log(this.maRapDangChon);
      this.props.actGetHTCR(this.maRapDangChon);
    }
  };

  // renderHTCR = () => {
  //   if (this.maRapDangChon && this.maRapDangChon !== null) {
  //     return <HeThongCumRapComponent maHTR={this.maRapDangChon} />;
  //   } else {
  //     return <HeThongCumRapComponent />;
  //   }
  // };
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-2 text-center" style={{ minHeight: "705px" }}>
            <HeThongRapComponent maHTR={this.sendProps} />
          </div>
          <div className="col-sm-4" style={{ minHeight: "705px" }}>
            <HeThongCumRapComponent />
          </div>
          <div className="col-sm-6" style={{ minHeight: "705px" }}>
            <LichChieuPhimComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actGetHTCR: (maHTR) => {
      dispatch(actGetHTCR(maHTR));
    },
    actGetMaHTR: (data) => dispatch({ type: "GET_MA_HTR", payload: data }),
  };
};

export default connect(null, mapDispatchToProps)(MovieSchedule);
