import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from './redux/store.js'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>404 page not found!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
