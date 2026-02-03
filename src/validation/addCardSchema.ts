import * as Yup from "yup";

export const addCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^[0-9\s]{16,19}$/, "Invalid card number"),
  cardHolder: Yup.string().required("Cardholder name is required"),
  expiryDate: Yup.string()
    .required("Required")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Use MM/YY format"),
  cvv: Yup.string()
    .required("Required")
    .matches(/^[0-9]{3,4}$/, "3-4 digits"),
  isDefault: Yup.boolean(),
});