import React from 'react'

function HelpAreaSection() {
  return (
    <section className="turbo-help-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center">
            <h1>Want to feel better?
              Let TurboEMDR help you</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="turbo-help-content-left">
                <ul>
                  <li>Childhood Trauma</li>
                  <li>PTSD</li>
                  <li>Stress</li>
                  <li>Self-Esteem</li>
                  <li>Anxiety</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2">
              <div className="turbo-help-content-right">
                <ul>
                  <li>Phobias</li>
                  <li>Grief</li>
                  <li>Depression</li>
                  <li>Anger</li>
                  <li>Addiction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HelpAreaSection