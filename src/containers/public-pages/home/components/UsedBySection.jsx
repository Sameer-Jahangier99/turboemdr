import React from 'react'

// assets
import American from 'assets/img/logos/american.png';
import WorldHealth from 'assets/img/logos/world health.png';
import Vetarans from 'assets/img/logos/veterans.png';
import Samhsa from 'assets/img/logos/samhsa.png';
import Dhsc from 'assets/img/logos/dhsc.png';

function UsedBySection() {
  return (
    <section className="used-by">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="section-title text-center">
            <h1>EMDR is mental health therapy recognized and used by</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="used-by-content">
            <img src={American} alt="" />
            <img src={WorldHealth} alt="" />
            <img src={Vetarans} alt="" />
            <img src={Samhsa} alt="" />
            <img src={Dhsc} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UsedBySection