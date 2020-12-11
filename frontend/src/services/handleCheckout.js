import { validateName, validateEmail } from "./validationService";

export default function handleCheckout(orderData, history) {
  validateName(orderData.name) &&
  validateName(orderData.surname) &&
  validateEmail(orderData.email)
    ? history.push("/summary")
    : alert(
        "Dein Name sollte eine Mindestlänge von 2 Buchstaben haben. Deine Email ist im falschen Format angegeben."
      );
}
