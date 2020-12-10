import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
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

export default function App() {
  const { products } = useProducts();
  const { deleteBookmark, toggleBookmark, bookmarks } = useBookmarks();
  const { cart, addToCart, increaseAmount, removeFromCart } = useCart();

  return (
    <GlobalWrapper>
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
              removeFromCart={removeFromCart}
            />
          </Route>
          <Route exact path="/bookmark">
            <Bookmarks bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
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
            <Checkout cart={cart} products={products} />
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
