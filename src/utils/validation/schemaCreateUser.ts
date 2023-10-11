import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Please complete all fields")
    .matches(
      // regex to validate only letters and numbers and spaces
      /^[a-zA-Z0-9\s]+$/,
      "Your name is not valid, use only letters and numbers"
    ),
  email: yup
    .string()
    .required("Please complete all fields")
    .email("Your email is not valid"),
  password: yup
    .string()
    .required("Please complete all fields")
    .min(6, "Your password must be longer than 6 digits."),
  password_confirm: yup
    .string()
    .required("Please complete all fields")
    .oneOf(
      [yup.ref("password"), ""],
      "Your password is not the same as your confirmation"
    )
});
