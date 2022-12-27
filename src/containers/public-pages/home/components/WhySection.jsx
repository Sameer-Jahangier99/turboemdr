import React from 'react'

// assets
import Img1 from 'assets/img/01.png';
import Img2 from 'assets/img/02.png';
import Img3 from 'assets/img/03.png'

function WhySection() {
  return (
    <section className="why-turboemdr">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="section-title">
            <h1>Why TurboEMDR works
              better than other mental health treatment</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <div className="wh-turbo-content">
            <div className="wh-turbo-content-single">
              <h3>Rewire your brain plasticity</h3>
              <p>EMDR goes direct to the root cause of your emotional pain by re-programming traumatic memories in your
                brain.</p>
            </div>
            <div className="wh-turbo-content-single">
              <h3>Provides Instant Relief</h3>
              <p>Use TurboEMDR as soon as your symptoms pop up. Anytime, anywhere. No more waiting until your next
                therapy appointment.</p>
            </div>
            <div className="wh-turbo-content-single">
              <h3>Improve sleep quality</h3>
              <p>Use TurboEMDR as much and as often as you need – without worrying about cost or time limitations.</p>
            </div>
            <div className="wh-turbo-content-single">
              <h3>Guidance through the process</h3>
              <p>Heal in the privacy of your home, where you feel safest. Heal at your own pace, without fear of
                judgment and stigma.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-5">
          <div className="wh-turbo-content-right">
            <div className="wht-single-img text-right">
              <img src={Img1} alt="" />
            </div>
            <div className="wht-single-img wht-single-img-2">
              <img src={Img2} alt="" />
            </div>
            <div className="wht-single-img wht-single-img-3">
              <img src={Img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhySection