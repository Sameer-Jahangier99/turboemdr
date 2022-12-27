import * as yup from "yup";

const validationSchema = yup.object({
  picked: yup.number().required("First Name is Required"),
});

export default validationSchema;
