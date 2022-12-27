import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

// components
import RegisterationStep from "../../../common/components/RegisterationStep";
import FormikField from "shared/components/form/FormikField";

// Utilites
import { USER_PROFILE_ICON } from "utilities/constants";
import validationSchema from "../utilities/validationSchema";

function RegisterForm() {
  const navigate = useNavigate();

  return (
    <>
      <RegisterationStep step1 />
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center gap-2 my-3">
            <img src={USER_PROFILE_ICON} alt="" />
            <p className="register-title m-0">Set up your Account</p>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submittedValues => {
                navigate("/register/checkout", {
                  state: {
                    userInformation: {
                      firstName: submittedValues?.firstName,
                      lastName: submittedValues?.lastName,
                      email: submittedValues?.email,
                      password: submittedValues?.password
                    }
                  }
                });
            }}
          >
              <Form className="w-100 px-3 px-sm-0 px-md-0">
                <label className="registet-label mb-2">First Name</label>
                <FormikField
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="mb-2"
                  fullWidth
                />
                <label className="registet-label mb-2"> First Name</label>
                <FormikField
                  type="text"
                  name="lastName"
                  className="mb-2"
                  placeholder="Last Name"
                  fullWidth
                />
                <label className="registet-label mb-2">Email</label>
                <FormikField
                  type="text"
                  name="email"
                  className="mb-2"
                  placeholder="Email Address"
                  fullWidth
                />
                <label className="registet-label mb-2">Password</label>
                <FormikField
                  type="password"
                  name="password"
                  className="mb-2 d-flex flex-column"
                  placeholder="Password"
                  fullWidth
                />
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg next-step-btn px-5 mt-3"
                  >
                    Next Step
                  </button>
                </div>
              </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
