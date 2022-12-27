import React from "react";
import { useNavigate} from 'react-router-dom';
// assets
import HeroImg from "assets/img/hero-image.png";

function HeroSection() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/register')
  }
  return (
    <section className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="hero-left-content">
              <h1>
                Cutting edge <br />
                EMDR Technology
              </h1>
              <p>
                Instant relief from Depression, Anxiety, PTSD, Panic Attacks,
                Grief, Addiction
              </p>
              <a className="start-btn text-decoration-none cursor-pointer" onClick={handleNavigate}>
                Start for free{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={HeroImg} alt="" className="hero-img" />
    </section>
  );
}

export default HeroSection;
