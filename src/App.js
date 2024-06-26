
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Signup from './Pages/SignupPage';
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/cart';
import CartPage from './Pages/CartPagr';

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
