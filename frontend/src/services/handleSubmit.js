import { validateName, validateEmail } from "./validationService";
import deleteLocally from "../lib/deleteLocally";

export default function handleSubmit(event, orderData, history) {
  event.preventDefault();
  if (
    validateName(orderData.name) &&
    validateName(orderData.surname) &&
    validateEmail(orderData.email)
  ) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(orderData);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    deleteLocally("cart");

    fetch("http://whiskycheck.local/create-order", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    history.push("/confirmation");
  } else {
    alert("Please check your form details.");
  }
}
