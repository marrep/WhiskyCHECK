import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Search from "./pages/search/Search";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import ProductDetailPage from "./pages/productDetailPage/ProductDetailPage";
import styled from "styled-components";
import useProducts from "./hooks/useProducts";
import useBookmarks from "./hooks/useBookmarks";
import useCart from "./hooks/useCart";
import useFilter from "./hooks/useFilter";
import useOffers from "./hooks/useOffers";

export default function App() {
  const { products, sortProducts } = useProducts();
  const { deleteBookmark, toggleBookmark, bookmarks } = useBookmarks();
  const {
    selectedOffer,
    selectNewOffer,
    selectDefaultOffer,
    toggleOffers,
  } = useOffers();
  const { cart, addToCard } = useCart();
  const {
    originFilter,
    toggleFilterOverlay,
    filterHandler,
    filterOverlay,
  } = useFilter();

  console.log(bookmarks);

  return (
    <GlobalWrapper>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route exact path="/cart">
            <Cart
              addToCard={addToCard}
              cart={cart}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
              products={products}
            />
          </Route>
          <Route exact path="/bookmark">
            <Bookmarks bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
          </Route>
          <Route exact path="/search">
            <Search
              products={products}
              sortProducts={sortProducts}
              toggleFilterOverlay={toggleFilterOverlay}
              filterHandler={filterHandler}
              originFilter={originFilter}
              filterOverlay={filterOverlay}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage
              products={products}
              bookmarks={bookmarks}
              selectedOffer={selectedOffer}
              selectDefaultOffer={selectDefaultOffer}
              toggleOffers={toggleOffers}
            />
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
