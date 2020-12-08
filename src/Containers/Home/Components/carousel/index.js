import React, { Component } from "react";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./index.scss";
import { green } from "@material-ui/core/colors";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class CarouselComponent extends Component {
  render() {
    return (
      <Swiper
        className="carouselMovie"
        spaceBetween={30}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 30000 }}
        color={{ navigation: green }}
        loop
      >
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: "url(./img/carousel_1.jpg)" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: "url(./img/carousel_2.jpg)" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{ backgroundImage: "url(./img/carousel_3.jpg)" }}
          />
        </SwiperSlide>
      </Swiper>
    );
  }
}

export default CarouselComponent;
