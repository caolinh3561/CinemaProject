import React, { Component } from "react";

class HTCRItem extends Component {
  render() {
    return (
      <li
        className="cardItem list-group-item"
        style={{ border: "1px solid pink" }}
        onClick={() => {
          this.props.maCumRap(this.props.item.maCumRap);
        }}
      >
        <h6>{this.props.item.tenCumRap}</h6>
        <p>{this.props.item.diaChi}</p>
      </li>
    );
  }
}

export default HTCRItem;
