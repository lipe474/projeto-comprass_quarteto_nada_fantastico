import * as yup from "yup";

export const cepSchema = yup.object({
  cep: yup.string().matches(/^[0-9]{8}$/, "The zip code must have 8 digits"),
  logradouro: yup.string().required("The street is required")
});
