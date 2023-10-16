import * as yup from "yup";

export const cardSchema = yup.object({
  nameOnCard: yup.string(),
  cardNumber: yup
    .string()
    .transform((value, originalValue) => {
      const cleanedValue = originalValue.replace(/\D/g, "").substring(0, 16);
      const regex = /(\d{1,4})/g;
      return cleanedValue.replace(regex, "$1 ").trim();
    })
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Card number is not valid"),
  expireDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expire date is not valid or has passed"
    )
    .test(
      "is-valid-expire-date",
      "Expire date is not valid or has passed",
      function (value) {
        if (!value) return true;

        const [monthStr, yearStr] = value.split("/");
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();

        const month = parseInt(monthStr, 10);
        const year = parseInt(`20${yearStr}`, 10);

        if (
          year > currentYear ||
          (year === currentYear && month >= currentMonth)
        ) {
          return true;
        }

        return false;
      }
    ),

  cvv: yup.string().matches(/^[0-9]{3}$/, "CVV is not valid")
});
