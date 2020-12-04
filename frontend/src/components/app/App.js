import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Cart from "../routes/cart/Cart";
import Bookmark from "../routes/bookmark/Bookmark";
import Search from "../routes/search/Search";
import Navigation from "../navigation/Navigation";
import Home from "../routes/home/Home";
import { GlobalWrapper } from "./AppStyled";
import ProductDetailPage from "../product/product_detail_page/ProductDetailPage";
import useHooks from "../../hooks/useHooks";
import { useState } from "react";

export default function App() {
  const { deleteBookmark, toggleBookmark, products, bookmarks } = useHooks();
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalShipping: 0,
    date: new Intl.DateTimeFormat("en-US").format(new Date()),
    customerid: 2,
  });

  return (
    <GlobalWrapper>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home productData={products} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              productData={Object.values(products)}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              setCart={setCart}
            />
          </Route>
          <Route exact path="/bookmark">
            <Bookmark bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
          </Route>
          <Route exact path="/search">
            <Search
              productData={products}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage
              productData={Object.values(products)}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
              cart={cart}
              setCart={setCart}
            />
          </Route>
        </Switch>
      </main>
      <Navigation bookmarks={bookmarks} cart={cart} />
    </GlobalWrapper>
  );
}
