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
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class CarouselComponent extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      videoId: "",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  handlePlayTrailer = (e) => {
    this.setState({ isOpen: true, videoId: e.target.accessKey });
    // this.props.actGetMovieTrailerSource(e.target.title);
  };

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
                className="play__trailer"
                onClick={(e) => {
                  this.handlePlayTrailer(e);
                }}
              >
                <i
                  accessKey="9SA7FaKxZVI"
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
                className="play__trailer"
                onClick={(e) => {
                  this.handlePlayTrailer(e);
                }}
              >
                <i
                  accessKey="L3pk_TBkihU"
                  className="material-icons__play material-icons"
                >
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
                className="play__trailer"
                onClick={(e) => {
                  this.handlePlayTrailer(e);
                }}
              >
                <i
                  accessKey="IpKmt4MpctM"
                  className="material-icons__play material-icons"
                >
                  play_arrow
                </i>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        <ModalVideo
          youtube={{
            autoplay: "true",
          }}
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default CarouselComponent;
