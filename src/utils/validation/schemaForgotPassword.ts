import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  password: yup
    .string()
    .required("Please complete all fields")
    .min(6, "Your password must be longer than 6 digits."),
  password_confirm: yup
    .string()
    .required("Please complete all fields")
    .oneOf(
      [yup.ref("password"), ""],
      "New password is not the same as your confirmation"
    )
});

export const checkEmailSchema = yup.object({
  email: yup.string().email("Your email is not valid")
});
