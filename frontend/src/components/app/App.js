import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Card from "../routes/card/Card";
import Bookmark from "../routes/bookmark/Bookmark";
import Search from "../routes/search/Search";
import Navigation from "../navigation/Navigation";
import Home from "../routes/home/Home";
import { GlobalWrapper } from "./AppStyled";
import { useState, useEffect } from "react";
import getProductData from "../../services/getProductData";
import ProductDetailPage from "../product/product_detail_page/ProductDetailPage";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData().then((product) => setProducts(product.data));
  }, []);

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
            <Bookmark />
          </Route>
          <Route exact path="/search">
            <Search productData={products} />
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage productData={Object.values(products)} />
          </Route>
        </Switch>
      </main>
      <Navigation />
    </GlobalWrapper>
  );
}
