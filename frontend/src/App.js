import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Summary from "./pages/Summary";
import Cart from "./pages/Cart";
import Bookmarks from "./pages/Bookmarks";
import Search from "./pages/Search";
import Navigation from "./components/navigation/Navigation";
import ProductDetailPage from "./pages/ProductDetailPage";
import styled from "styled-components";
import useProducts from "./hooks/useProducts";
import useBookmarks from "./hooks/useBookmarks";
import useCart from "./hooks/useCart";
import Checkout from "./pages/Checkout";
import handleCheckout from "./services/handleCheckout";
import handleSubmit from "./services/handleSubmit";
import Confirmation from "./pages/Confirmation";
import loadLocally from "./lib/loadLocally";
import saveLocally from "./lib/saveLocally";
import Loading from "./components/loading/Loading";

export default function App() {
  const { products } = useProducts();
  const { toggleBookmark, bookmarks } = useBookmarks();
  const { cart, addToCart, increaseAmount, decreaseAmount } = useCart();
  const [orderData, setOrderData] = useState(
    loadLocally("orderData") ?? {
      customerId: cart.customerid,
      date: cart.date,
      items: cart.items,
      totalPrice: cart.totalPrice,
      totalShipping: cart.totalShipping,
      name: "",
      surname: "",
      street: "",
      number: 0,
      city: "",
      zip: 0,
      country: "",
      email: "",
      paymentMethod: "",
    }
  );

  useEffect(() => {
    saveLocally("orderData", orderData);
  }, [orderData]);

  return (
    <GlobalWrapper>
      <Loading />
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Search
              products={products}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
              products={products}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
            />
          </Route>
          <Route exact path="/bookmark">
            <Bookmarks bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage
              products={products}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              addToCart={addToCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              products={products}
              orderData={orderData}
              handleCheckout={handleCheckout}
              setOrderData={setOrderData}
            />
          </Route>
          <Route exact path="/summary">
            <Summary
              cart={cart}
              products={products}
              handleSubmit={handleSubmit}
              orderData={orderData}
              setOrderData={setOrderData}
            />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </main>
      <Navigation bookmarks={bookmarks} cart={cart} />
    </GlobalWrapper>
  );
}

const GlobalWrapper = styled.div`
  margin: 0;
  padding: 0 0 5em 0;
  overflow: hidden;
`;
