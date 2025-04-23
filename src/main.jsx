import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Store from "./components/Store.jsx";
import Contactus from "./components/ContactUs.jsx";
import Register from "./components/Register.jsx";
import CourseList from "./components/CourseList.jsx";
import Home from "./components/Home.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="products" element={<CourseList />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
