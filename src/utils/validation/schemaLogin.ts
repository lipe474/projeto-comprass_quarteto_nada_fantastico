import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Please complete all fields"),
  password: yup.string().required("Please complete all fields")
});
