import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { handleCheckout, submitOrder } from "./services/services";
import { Header, Navigation, Loading } from "./components/components";
import {
  useProducts,
  useBookmarks,
  useCart,
  useFilter,
  useOrderData,
} from "./hooks/hooks";
import {
  Summary,
  Cart,
  Bookmarks,
  Search,
  ProductDetailPage,
  Checkout,
  Confirmation,
  WhiskyFinder,
} from "./pages/pages";

export default function App() {
  const { products } = useProducts();
  const { toggleBookmark, bookmarks } = useBookmarks();
  const {
    searchResults,
    setWhiskyFinder,
    filterOriginByTag,
    sortProducts,
    showHideFilter,
    filterHandler,
    originFilter,
    toggleFilter,
  } = useFilter();
  const { cart, addToCart, increaseAmount, decreaseAmount } = useCart();
  const { orderData, setOrderData } = useOrderData();

  return (
    <GlobalWrapper>
      <Loading />
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <WhiskyFinder
              setWhiskyFinder={setWhiskyFinder}
              filterOriginByTag={filterOriginByTag}
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
            />
          </Route>
          <Route exact path="/search">
            <Search
              toggleBookmark={toggleBookmark}
              bookmarks={bookmarks}
              searchResults={searchResults}
              sortProducts={sortProducts}
              showHideFilter={showHideFilter}
              filterHandler={filterHandler}
              originFilter={originFilter}
              toggleFilter={toggleFilter}
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
              handleSubmit={submitOrder}
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
