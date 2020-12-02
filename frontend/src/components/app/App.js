import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Card from "../routes/card/Card";
import Bookmark from "../routes/bookmark/Bookmark";
import Search from "../routes/search/Search";
import Navigation from "../navigation/Navigation";
import Home from "../routes/home/Home";
import { GlobalWrapper } from "./AppStyled";
import ProductDetailPage from "../product/product_detail_page/ProductDetailPage";
import useHooks from "../../hooks/useHooks";

export default function App() {
  const { deleteBookmark, toggleBookmark, products, bookmarks } = useHooks();

  return (
    <GlobalWrapper>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home productData={products} />
          </Route>
          <Route exact path="/card">
            <Card />
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
            />
          </Route>
        </Switch>
      </main>
      <Navigation bookmarks={bookmarks} />
    </GlobalWrapper>
  );
}
