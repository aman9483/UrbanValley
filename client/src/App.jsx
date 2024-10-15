import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

//pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Register from "./pages/register";
import Login from "./pages/login";
import Billing from "./pages/checkout"

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/cart/checkout" element={<Billing/>} />
            <Route exact path="/*" element={<Error />} />
            <Route
               exact
               path="/success"
               element={<ProtectedRoute element={<Success />} />}
            />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
