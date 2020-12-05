import React, { Component } from "react";
import CarouselComponent from "../carousel";
import HeaderComponent from "../header/header";
import NewsComponent from "../news/index";
class HomeTemplate extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <CarouselComponent />
        {this.props.children}
        <NewsComponent />
      </>
    );
  }
}

export default HomeTemplate;
