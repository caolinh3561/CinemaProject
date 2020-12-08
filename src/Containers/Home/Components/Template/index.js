import React, { Component } from "react";
import CarouselComponent from "../carousel";
import HeaderComponent from "../header/header";
import FooterComponent from "../footer";
class HomeTemplate extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <CarouselComponent />
        {this.props.children}
        <FooterComponent />
      </>
    );
  }
}

export default HomeTemplate;
