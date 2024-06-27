
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/components/ProductList';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Signup from './Pages/SignupPage';
import { createRoot } from "react-dom/client";
import ProductDeatail from './features/product-list/components/ProductDetail';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/cart';
import CartPage from './Pages/CartPagr';
import CheckoutPage from './Pages/checkoutpage';
import ProductDeatailPage from './Pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage></HomePage>
      </>
    ),
  },
  {
    path: "/login",
    element: <><LoginPage></LoginPage></>,
  }, {
    path: "/signup",
    element: <><Signup></Signup></>,
  }, {
    path: "/cartpage",
    element: <><CartPage></CartPage></>,
  }, {
    path: "/checkout",
    element: <><CheckoutPage></CheckoutPage></>,
  }, {
    path: "/productDetails",
    element: <><ProductDeatailPage></ProductDeatailPage></>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
