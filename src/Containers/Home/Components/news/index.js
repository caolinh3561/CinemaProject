import React from "react";
import "./news.scss";
export default function News() {
  return (
    <section className="news">
      <div className="wrapper">
        <div className="mainMaxWidth">
          <div className="row">
            <div className="col-sm-6 news__left">
              <div>
                <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                <p className="textLeft">người yêu điện ảnh</p>
                <p className="textSmallLeft">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <br />
                <button className="buttonLeft">
                  App miễn phí - Tải về ngay!
                </button>
                <p className="textAppUnder">
                  TIX có hai phiên bản
                  <a
                    className="tagA"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    iOS
                  </a>
                  &amp;
                  <a
                    className="tagA"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    Android
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 news__right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
