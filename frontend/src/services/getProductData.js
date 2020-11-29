export default function getProductData() {
  return fetch("http://whiskycheck.local/api/products").then((res) =>
    res.json()
  );
}
