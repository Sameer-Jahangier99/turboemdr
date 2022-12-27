import React from 'react'

function FaqSection() {
  return (
    <section className="faq-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h1>Frequently asked questions</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button accordian-color-disable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    I am new to EMDR. Can Virtual EMDR be used by beginners?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Yes definitely. Virtual EMDR was designed to be used by everyone, including beginners who have never
                    done EMDR before. The self-guided program features easy-to-follow step-by-step guidance, gently
                    leading you through each stage of your EMDR session.
  
                    Along the way, you&apos;ll be aided by short instructional videos, simple illustrations, and plenty of case
                    examples.
  
                    Thousands of beginners have successfully used Virtual EMDR on their own.
  
                    If you get stuck or need extra help at any time, we offer affordable personalized Coaching Sessions.
                    Check out our plans with Coaching or email us for details.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed accordian-color-disable" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How many sessions of Virtual EMDR do I need? How often should I do a session?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Everyone&apos;s situation is different. It is not possible to provide guidelines on the number and
                    frequency of sessions that you will need.
  
                    As you start your treatment, you will get familiar with the changes you experience after each session.
                    Continue working on each issue until it no longer causes you emotional distress when you think of
                    them.
  
                    Virtual EMDR helps you track your pre- and post-session Emotional Distress Rating, so you can see the
                    progress you are making over time.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed accordian-color-disable" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    I&apos;m still feeling some emotional distress after my session. Can I start another Virtual EMDR session
                    immediately?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Many emotional issues will require more than one Virtual EMDR session to resolve. This is especially
                    if they are complex or long-standing.
  
                    It is not recommeded to do back-to-back sessions of Virtual EMDR. Strong emotions are brought up
                    during the session, and you need to allow these to subside fully before starting another session.
  
                    With Virtual EMDR&apos;s unlimited access, take the time you need to absorb the benefits of each session
                    before starting the next one.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What are the differences between Virtual EMDR and traditional EMDR therapy?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Virtual EMDR follows the same established EMDR protocols tried-and-tested by millions of people
                    worldwide.
  
                    Some benefits of Virtual EMDR, when compared to therapist-led EMDR, include:
  
                    ✓ Affordability: Virtual EMDR costs less than a single therapist session for UNLIMITED access
  
                    ✓ Availability: Virtual EMDR is available any time any day, without waiting or scheduling an
                    appointment. So you can get instant relief as soon as your symptoms pop up
  
                    ✓ Anonymity: Virtual EMDR offers full anonymity, so no one needs to know you are getting help – ever.
  
                    Click here for a side-by-side comparison of Virtual EMDR with traditional mental health treatments.
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Does Virtual EMDR provide therapy advice or support over the phone or online?
  
  
  
                  </button>
  
  
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
  
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Can I get a Refund?
  
  
  
                  </button>
  
  
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  Yes you can. If you don&apos;t see results ask refund in 30 days (full refund will applied)
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default FaqSection