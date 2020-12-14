import $ from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.scss";

class MovieTrailerModal extends Component {
  //   componentWillUnmount() {
  //     window.removeEventListener("click", this.onStopVideo, false);
  //   }
  //   onStopVideo = () => {
  //     var modal = document.getElementById("movieTrailerModal");
  //     var video = document.getElementById("video");
  //     if (modal.classList.contains("show") && video.getAttribute("src") === "") {
  //       video.setAttribute("src", this.props.trailerURL);
  //     }
  //   };

  // componentWillUnmount() {
  //     window.removeEventListener("scroll", this.onScroll, false);
  //   }
  //   onScroll = () => {
  //     window.onscroll = function () {
  //       var header = document.getElementsByClassName("header__content")[0];
  //       if (!header) return;
  //       if (window.pageYOffset > 400) {
  //         header.classList.add("header__change");
  //       } else {
  //         if (header.classList.contains("header__change")) {
  //           header.classList.remove("header__change");
  //         }
  //       }
  //     };
  //   };

  render() {
    const { trailerURL } = this.props;

    return (
      <div
        className="modal fade"
        id="movieTrailerModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTrailerTitleId"
        aria-hidden="true"
        data-focus="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <YouTube
                // videoId="2g811Eo7K8U"
                opts={opts}
                // onReady={this._onReady}
              /> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  id="video"
                  title="trailer"
                  //   src={trailerURL ? trailerURL : ""}
                  src=""
                  frameBorder="0"
                  //   allow="autoplay"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    trailerURL: state.trailerMovieReducer.trailerURL,
  };
};

export default connect(mapStateToProps, null)(MovieTrailerModal);
