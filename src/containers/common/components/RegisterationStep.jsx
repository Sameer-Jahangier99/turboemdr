import React from "react";
import PropTypes from "prop-types";

// styles
import "styles/components/registration-step-styles.css";

function RegisterationStep({ step1, step2 }) {
  return (
    <div className="d-flex">
      <div className="step-count-container">
        <p className="step-count m-0 px-3 py-2"> 1 </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <hr className="horizontal-line" />
      </div>
      <div className={` ${!step2 ? "not-step-count" : "step-count-container"}`}>
        <p className="step-count m-0 px-3 py-2"> 2 </p>
      </div>
    </div>
  );
}

RegisterationStep.propTypes = {
  step1: PropTypes.bool,
  step2: PropTypes.bool,
};

RegisterationStep.defaultProps = {
  step1: true,
  step2: false,
};

export default RegisterationStep;
