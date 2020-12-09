export default function findProduct(id, products) {
  let foundProduct = products.find((elem) => elem.id == id);
  console.log(foundProduct);
  return foundProduct;
}
