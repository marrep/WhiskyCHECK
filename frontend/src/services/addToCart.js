export default function addToCard(product, cart, setCart) {
  setCart([...cart, product]);
  console.log(cart);
}
