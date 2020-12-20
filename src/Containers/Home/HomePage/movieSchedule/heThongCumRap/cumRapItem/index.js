// import { Hidden } from "@material-ui/core";
// import { connect } from "formik";
import React, { Component } from "react";

class HTCRItem extends Component {
  render() {
    // opacity: item.maHeThongRap === maHeThongRap ? 1 : 0.5,
    const { item, maCR } = this.props;
    return (
      <li
        className="cardItem list-group-item"
        style={{
          height: "91px",
          overflow: "hidden",
          opacity: item.maCumRap === maCR ? 1 : 0.5,
        }}
        onClick={() => {
          this.props.maCumRap(item.maCumRap);
        }}
      >
        <h6>{this.props.item.tenCumRap}</h6>
        <p>{this.props.item.diaChi}</p>
      </li>
    );
  }
}

export default HTCRItem;
