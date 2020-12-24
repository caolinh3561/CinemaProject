// import { Hidden } from "@material-ui/core";
// import { connect } from "formik";
import React, { Component } from "react";

class HTCRItem extends Component {
  render() {
    // opacity: item.maHeThongRap === maHeThongRap ? 1 : 0.5,
    const { item, maCR } = this.props;
    console.log(item);

    return (
      <li
        className="cardItem list-group-item row"
        style={{
          height: "91px",
          overflow: "hidden",
          opacity: item.maCumRap === maCR ? 1 : 0.4,
        }}
        onClick={() => {
          this.props.maCumRap(item.maCumRap);
        }}
      >
        <img
          src={
            item.maCumRap.includes("glx-nguyen-du")
              ? `/img/imagesTheater/glx-nguyen-du.png`
              : `/img/imagesTheater/${item.maCumRap}.jpg`
          }
          alt=""
        />

        <div className="content__right">
          <h6>{this.props.item.tenCumRap}</h6>
          <p style={{ margin: 0 }}>{this.props.item.diaChi}</p>
        </div>
      </li>
    );
  }
}

export default HTCRItem;
