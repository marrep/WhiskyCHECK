import { deleteLocally } from "../../lib/localStorage";

export default function submitOrder(event, orderData, history) {
  event.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(orderData);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://whiskycheck.local/create-order", requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));

  history.push("/confirmation");

  setTimeout(() => {
    localStorage.clear("cart");
    deleteLocally("cart");
    history.push("/");
    window.location.reload();
  }, 3000);
}
