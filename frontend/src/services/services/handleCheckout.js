import {
  validateName,
  validateEmail,
  validateZip,
  validateNumber,
} from "./validationService";
import { saveLocally } from "../../lib/localStorage";

export default function handleCheckout(event, orderData, history) {
  if (
    validateName(orderData.name) &&
    validateName(orderData.surname) &&
    validateEmail(orderData.email) &&
    validateZip(orderData.zip) &&
    validateNumber(orderData.number)
  ) {
    history.push("/summary");
    saveLocally("orderData", orderData);
  } else {
    event.preventDefault();
    alert(
      "Dein Name sollte eine Mindestlänge von 2 Buchstaben haben. Deine Email ist im falschen Format angegeben."
    );
  }
}
