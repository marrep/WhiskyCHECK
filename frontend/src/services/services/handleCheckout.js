import { validateName, validateEmail } from "./validationService";
import { saveLocally } from "../../lib/localStorage";

export default function handleCheckout(orderData, history) {
  if (
    validateName(orderData.name) &&
    validateName(orderData.surname) &&
    validateEmail(orderData.email)
  ) {
    history.push("/summary");
    saveLocally("orderData", orderData);
  } else {
    alert(
      "Dein Name sollte eine Mindestlänge von 2 Buchstaben haben. Deine Email ist im falschen Format angegeben."
    );
  }
}
