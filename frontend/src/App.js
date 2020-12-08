import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Search from "./pages/search/Search";
import Navigation from "./components/navigation/Navigation";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import styled from "styled-components";
import useProducts from "./hooks/useProducts";
import useBookmarks from "./hooks/useBookmarks";
import useCart from "./hooks/useCart";
import useFilter from "./hooks/useFilter";
import useOffers from "./hooks/useOffers";
import Checkout from "./pages/checkout/Checkout";

export default function App() {
  const { products } = useProducts();
  const { deleteBookmark, toggleBookmark, bookmarks } = useBookmarks();
  const { selectedOffer, selectDefaultOffer, selectNewOffer } = useOffers();
  const { cart, addToCart } = useCart();
  const {
    originFilter,
    showHideFilter,
    filterHandler,
    toggleFilter,
    searchResults,
    sortProducts,
  } = useFilter();

  return (
    <GlobalWrapper>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Search
              products={products}
              sortProducts={sortProducts}
              showHideFilter={showHideFilter}
              filterHandler={filterHandler}
              originFilter={originFilter}
              toggleFilter={toggleFilter}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
              searchResults={searchResults}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              addToCard={addToCart}
              cart={cart}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
              products={products}
            />
          </Route>
          <Route exact path="/bookmark">
            <Bookmarks bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage
              products={products}
              bookmarks={bookmarks}
              selectedOffer={selectedOffer}
              selectDefaultOffer={selectDefaultOffer}
              selectNewOffer={selectNewOffer}
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
