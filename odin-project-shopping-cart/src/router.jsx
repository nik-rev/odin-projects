import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import categoryLoader from "./pages/App/categoryLoader";
import itemLoader from "./pages/Item/itemLoader";
import Category from "./pages/Item/Category";
import App from "./pages/App/App";
import Item from "./pages/ProductItem/ProductItem";
import Register from "./pages/Register/Register";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import History from "./pages/History/History";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import productLoader from "./pages/ProductItem/productLoader";

function Router() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderedItems, setOrderedItems] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} loader={categoryLoader}>
        <Route path=":category" element={<Category />} loader={itemLoader} />
        <Route
          path=":category/:item"
          element={
            <Item
              setTotalPrice={setTotalPrice}
              setOrderedItems={setOrderedItems}
            />
          }
          loader={productLoader}
        />
        <Route path="register" element={<Register />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="history" element={<History />} />
        <Route
          path="cart"
          element={<Cart totalPrice={totalPrice} orderedItems={orderedItems} />}
        >
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
