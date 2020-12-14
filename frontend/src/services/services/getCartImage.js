export default function getCartImage(productData, cartId) {
  const foundIndex = productData.findIndex((elem) => elem.id === cartId);
  return productData[foundIndex].image;
}
