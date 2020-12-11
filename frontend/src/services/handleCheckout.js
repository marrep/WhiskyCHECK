import { validateName, validateEmail } from "./validationService";

export default function handleCheckout(orderData, history) {
  validateName(orderData.name) &&
  validateName(orderData.surname) &&
  validateEmail(orderData.email)
    ? history.push("/summary")
    : alert("Please check your form details.");
}
