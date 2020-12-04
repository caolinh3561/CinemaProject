import React, { Component } from "react";
import CarouselComponent from "../carousel";
import HeaderComponent from "../header/header";

class HomeTemplate extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <CarouselComponent />
        {this.props.children}
      </>
    );
  }
}

export default HomeTemplate;
