import React, { useRef } from "react";
import Slider from "react-slick";

// assets
import VimeoPlayer from "assets/img/Vimeo Player.png";

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
};

function ReviewSection() {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <section className="review-area">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="section-title w-100">
              <h1>Real people, real reviews</h1>
            </div>
          </div>
          <div className="col-3 d-flex gap-2 justify-content-end">
            <div
              className="d-flex justify-content-center align-items-center slider-btn cursor-pointer"
              style={{ fontWeight: "bold" }}
              onClick={previous}
            >
              &#60;
            </div>
            <div
              className="d-flex justify-content-center align-items-center slider-btn cursor-pointer"
              style={{ fontWeight: "bold" }}
              onClick={next}
            >
              &#62;
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="container">
              <Slider ref={c => (slider.current = c)} {...sliderSettings}>
                <div className="review-slides owl-carousel">
                  <div className="review-single-slide">
                    <div className="review-single-slide-text">
                      <p>
                        TurboEMDR helped me to let go of serious trauma, abusive
                        relationships, and personal loss. I’m now working all
                        the way back to my childhood trauma.
                      </p>
                      <p>
                        After I’ve done a session, it’s like I can feel
                        something in my brain is different, the negative
                        emotions lose their power, and I can focus and think
                        more clearly.
                      </p>
                      <p>
                        I’ve recommended TurboEMDR to a lot of people – I can’t
                        speak highly enough of it!
                      </p>
                      <h3>Jennifer H.</h3>
                      <span>Childhood Trauma, Grief</span>
                    </div>
                    <div className="review-single-slide-video">
                      <a className="mfp-iframe video-play-btn" href="">
                        <img src={VimeoPlayer} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="review-slides owl-carousel">
                  <div className="review-single-slide">
                    <div className="review-single-slide-text">
                      <p>
                        TurboEMDR helped me to let go of serious trauma, abusive
                        relationships, and personal loss. I’m now working all
                        the way back to my childhood trauma.
                      </p>
                      <p>
                        After I’ve done a session, it’s like I can feel
                        something in my brain is different, the negative
                        emotions lose their power, and I can focus and think
                        more clearly.
                      </p>
                      <p>
                        I’ve recommended TurboEMDR to a lot of people – I can’t
                        speak highly enough of it!
                      </p>
                      <h3>Jennifer H.</h3>
                      <span>Childhood Trauma, Grief</span>
                    </div>
                    <div className="review-single-slide-video">
                      <a className="mfp-iframe video-play-btn" href="">
                        <img src={VimeoPlayer} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="review-slides owl-carousel">
                  <div className="review-single-slide">
                    <div className="review-single-slide-text">
                      <p>
                        TurboEMDR helped me to let go of serious trauma, abusive
                        relationships, and personal loss. I’m now working all
                        the way back to my childhood trauma.
                      </p>
                      <p>
                        After I’ve done a session, it’s like I can feel
                        something in my brain is different, the negative
                        emotions lose their power, and I can focus and think
                        more clearly.
                      </p>
                      <p>
                        I’ve recommended TurboEMDR to a lot of people – I can’t
                        speak highly enough of it!
                      </p>
                      <h3>Jennifer H.</h3>
                      <span>Childhood Trauma, Grief</span>
                    </div>
                    <div className="review-single-slide-video">
                      <a className="mfp-iframe video-play-btn" href="">
                        <img src={VimeoPlayer} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
