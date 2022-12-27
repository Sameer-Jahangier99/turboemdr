import React from 'react'

// assets
import Embdr from 'assets/img/EMDR.png';

function WhatSection() {
  return (
    <section className="what-emdr-area">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section-title">
            <h1>What is EMDR</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="what-emdr-left-content">
            <p>EMDR is Eye Movement Desensitization and Reprocessing which is the revolutionary breakthrough in mental
              health treatment developed by Dr Francine Shapiro in the 1990s. EMDR has been used successfully by
              millions of people to overcome PTSD, Depression, Anxiety, Grief, Addictions and more. By stimulating the
              natural process of memory processing, EMDR works to re-program the brain and replace negative associations
              that have been formed with positive and empowering thoughts.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="what-emdr-right-content">
            <p>Research studies have consistently demonstrated that EMDR is <span>faster acting, more effective</span>
              and <span>longer lasting</span> than other mental health treatment, including Cognitive Behavioral Therapy
              (CBT), talk therapy, hypnosis, and medication.</p>
            <a className="start-btn text-decoration-none" href="#">Start for free </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="emdr-feature-img">
            <img src={Embdr} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhatSection