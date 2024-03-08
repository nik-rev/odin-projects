import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import ProductItem from "./pages/ProductItem/ProductItem";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <ProductCategory />,
      children: [{ path: "/:category/:product", element: <h2>Hey!</h2> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
