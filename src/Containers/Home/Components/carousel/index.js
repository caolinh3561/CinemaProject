import React, { Component } from "react";
// import Swiper core and required components
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import MovieTrailerModal from "../movieTrailerModal/movieTrailerModal";
import "./index.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class CarouselComponent extends Component {
  // handlePlayTrailer = (e) => {
  //   console.log(e.target.title);
  //   this.props.actGetMovieTrailerSource(e.target.title);
  // };

  render() {
    return (
      <>
        <Swiper
          className="carouselMovie"
          spaceBetween={30}
          slidesPerView={1}
          navigation
          allowTouchMove={false}
          autoplay={{ delay: 30000 }}
          loop
        >
          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: "url(./img/carousel_1.jpg)" }}
            >
              <button
                data-toggle="modal"
                data-target="#movieTrailerModal"
                className="play__trailer"
                data-src="https://www.youtube.com/embed/9SA7FaKxZVI"
              >
                <i
                  className="material-icons__play material-icons"
                  title="trailer"
                >
                  play_arrow
                </i>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: "url(./img/carousel_2.jpg)" }}
            >
              <button
                data-toggle="modal"
                data-target="#movieTrailerModal"
                className="play__trailer"
                data-src="https://www.youtube.com/embed/L3pk_TBkihU"
              >
                <i className="material-icons__play material-icons">
                  play_arrow
                </i>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: "url(./img/carousel_3.jpg)" }}
            >
              <button
                data-toggle="modal"
                data-target="#movieTrailerModal"
                className="play__trailer"
                data-src="https://www.youtube.com/embed/IpKmt4MpctM"
              >
                <i className="material-icons__play material-icons">
                  play_arrow
                </i>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        <MovieTrailerModal />
      </>
    );
  }
}

export default CarouselComponent;
