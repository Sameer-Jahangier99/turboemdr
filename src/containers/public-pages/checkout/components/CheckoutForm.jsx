import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field } from "formik";
import { PayPalButtons } from "@paypal/react-paypal-js";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Assets
import ReceptionIcon from "assets/img/icon/receiptIcon.png";

// components
import RegisterationStep from "containers/common/components/RegisterationStep";

// Utilites
import validationSchema from "../utilities/validationSchema";

function RegisterForm({ userInformation }) {
  const [selectedPayment, setSelectedPayment] = useState("69");

  const paymentRef = useRef(selectedPayment);
  const navigate = useNavigate();

  const handleCreatePaypalOrder = async (data, actions, values) => {
  
    const createOrder = await actions.order.create({
      purchase_units: [
        {
          amount: {
            value: +paymentRef?.current,
            currency_code: "USD",
          },
        },
      ],
      intent: "CAPTURE",
    });
    return createOrder;
  };

  const handleOnApprove = async (data, actions) => {
    const captureOrder = await actions.order.capture();
    emailjs
      .send(
        "service_nmja15j",
        "template_7nbn43l",
        {
          first_name: userInformation?.firstName,
          last_name: userInformation?.lastName,
          email: userInformation?.email,
          password: userInformation?.password,
          picked: captureOrder?.purchase_units[0]?.amount?.value,
        },
        "GJuDtKOV8ASRQhbKG"
      )
      .then(
        result => {
          navigate("/");
        },
        error => {
        
        }
      );
  };

  useEffect(() => {
    if (Object.keys(userInformation).length <= 0) navigate("/register");
  }, []);

  return (
    <>
      <RegisterationStep step2 />
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center gap-2 my-3">
            <img src={ReceptionIcon} alt="" />
            <p className="register-title m-0"> Billing Info</p>
          </div>
          <Formik
            initialValues={{
              picked: "",
            }}
            validationSchema={validationSchema}
          >
            {({ values, setFieldValue }) => (
              <Form className="w-100 px-3 px-sm-0 px-md-0">
                <label className="d-flex gap-3 my-3">
                  <input
                    type="radio"
                    name="picked"
                    value="69"
                    checked={selectedPayment === "69"}
                    onChange={() => setSelectedPayment("69")}
                  />
                  <p className="registet-label m-0">1 Month $69</p>
                </label>
                <label className="d-flex gap-3 my-3">
                <input
                    type="radio"
                    name="picked"
                    value="149"
                    checked={selectedPayment === "149"}
                    onChange={() => {
                      paymentRef.current = "149"
                      setSelectedPayment("149")
                    }}
                  />
                  <p className="registet-label m-0">3 Months $149</p>
                </label>
                <label className="d-flex gap-3 align-items-start my-3">
                <input
                    type="radio"
                    name="picked"
                    value="299"
                    checked={selectedPayment === "299"}
                    onChange={() => {
                      paymentRef.current = "299";
                      setSelectedPayment("299")
                    }}
                  />
                  <div>
                    <p className="register-title mb-0 radio-title-alignment">
                      Most Popular!
                    </p>
                    <p className="registet-label m-0">
                      6 Months + 1 Coaching Session $299
                    </p>
                  </div>
                </label>
                <label className="d-flex gap-3 align-items-start my-3">
                <input
                    type="radio"
                    name="picked"
                    value="499"
                    checked={selectedPayment === "499"}
                    onChange={() => {
                      paymentRef.current = "499";
                      setSelectedPayment("499")
                    }}
                  />
                  <div>
                    <p className="register-title mb-0 radio-title-alignment">
                      Best Value!
                    </p>
                    <p className="registet-label m-0">
                      12 Months + 2 Coaching Sessions $499
                    </p>
                  </div>
                </label>
                <p className="grey-color-txt">
                  Subscriptions auto renew unless cancelled. Usually we do not
                  issue refunds after the free trial period, but you can cancel
                  your subscription at any time.
                </p>
                <div>
                  <PayPalButtons
                    createOrder={(data, actions) =>
                      handleCreatePaypalOrder(data, actions, values)
                    }
                    onApprove={(data, actions) =>
                      handleOnApprove(data, actions)
                    }
                    fundingSource="paypal"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

RegisterForm.propTypes = {
  userInformation: PropTypes.object.isRequired,
};

RegisterForm.defaultProps = {
  userInformation: {},
};

export default RegisterForm;
