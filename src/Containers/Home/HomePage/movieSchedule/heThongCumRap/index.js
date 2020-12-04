import React, { Component } from "react";
import { connect } from "react-redux";
import HTCRItem from "./cumRapItem";
import { actGetHTCR } from "./modules/action";
class HeThongCumRapComponent extends Component {
  componentDidMount = () => {
    // let { maHTR } = this.props;
    // console.log(maHTR);
    // if (maHTR && maHTR !== null) {
    //   this.props.actGetHTCR(maHTR);
    // } else {
    //   this.props.actGetHTCR("BHDStar");
    // }
    this.props.actGetHTCR(this.props.maHTR);
  };

  getMaCumRap = (item) => {
    this.props.actGetMaCumRap(item);
  };

  handleRenderItem = () => {
    return this.props.HTCRList.map((item, index) => {
      return <HTCRItem key={index} item={item} maCumRap={this.getMaCumRap} />;
    });
  };
  render() {
    return <ul className="list-group">{this.handleRenderItem()}</ul>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actGetHTCR: (maHTR) => {
      dispatch(actGetHTCR(maHTR));
    },
    actGetMaCumRap: (data) =>
      dispatch({ type: "GET_MA_CUM_RAP", payload: data }),
  };
};
const mapStateToProps = (state) => {
  return {
    HTCRList: state.hTCRReducer.heThongCumRap,
    maHTR: state.hTCRReducer.maHTR,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeThongCumRapComponent);
