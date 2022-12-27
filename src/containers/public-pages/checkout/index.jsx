import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
// styles
import "styles/public-pages/register/register-styles.css";

//assets
import RegsiterPageProductImage from "assets/img/register-page-product-image.png";

// Components
import CheckoutForm from "./components/CheckoutForm";

// Utilities
import {
  TIMER_ICON,
  INFINITY_ICON,
  ANONYMUS_ICON,
  DOLLAR_ICON,
} from "utilities/constants";

function Register() {
  const {
    state
  } = useLocation();
  return (
    <div className="register-body">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            {/* icon container */}
            <div className="d-flex flex-wrap gap-4">
              <div>
                <img src={TIMER_ICON} alt="icon" className="icon-img" />
                <p className="icon-caption mt-2">
                  Start <br /> Immediately
                </p>
              </div>
              <div>
                <img src={INFINITY_ICON} alt="icon" className="icon-img" />
                <p className="icon-caption mt-2">
                  Unlimited <br /> Access
                </p>
              </div>
              <div>
                <img src={ANONYMUS_ICON} alt="icon" className="icon-img" />
                <p className="icon-caption mt-2">
                  100% <br /> Anonymous
                </p>
              </div>
              <div>
                <img src={DOLLAR_ICON} alt="icon" className="icon-img" />
                <p className="icon-caption mt-2">
                  Just US $69 <br /> a Month
                </p>
              </div>
            </div>

            {/* faq container */}
            <div>
              <p className="mt-5 pt-3 faq-title">
                Feel better - or cancel & pay nothing!
              </p>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item accord-container">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed py-2 accordian-border faq-question"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Q: When Will I Be Charged?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body faq-description">
                      Your credit card will only be charged after your 3-day
                      free trial. If you do not feel a difference after using
                      Virtual EMDR, cancel within 3 days … and pay nothing.
                    </div>
                  </div>
                </div>
                <div className="accordion-item accord-container">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed py-2 accordian-border faq-question"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Q: Can I Use Virtual EMDR Anonymously?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body  faq-description">
                      Use Virtual EMDR with full confidence that you can get
                      help anonymously. You can use any email address where you
                      can receive emails (required to verify your account). Make
                      sure that your email account is accessible ONLY BY YOU. Do
                      not use a shared account.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* image section */}
            <div>
              <img src={RegsiterPageProductImage} alt="product-image" />
            </div>
          </div>
          <div className="col-md-6 py-5">
            <p className="title">
              Start my 3-day <br />
              FREE trial now
            </p>

            <div className="bg-white register-box py-3 px-5">
              <CheckoutForm userInformation={state?.userInformation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
