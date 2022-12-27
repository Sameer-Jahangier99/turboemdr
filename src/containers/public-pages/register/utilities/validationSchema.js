import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().trim().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().trim().email().required("Email is Required"),
  password: yup.string().required("Password is required"),
});

export default validationSchema;
