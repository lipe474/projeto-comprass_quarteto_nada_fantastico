import * as yup from "yup";

export const cardSchema = yup.object({
  cardNumber: yup.string().matches(/^[0-9]{16}$/, "Card number is not valid")
});
