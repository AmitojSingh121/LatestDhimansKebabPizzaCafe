import { useState } from "react";
import Home from "./pages/Home";
import"./App.css";
import NavBar from "./components/NavBar";
import {ToastContainer} from "react-toastify"
import Pagination from "./components/Pagination"
function App() {
  return (
      <div>
         <Home></Home>
         <ToastContainer></ToastContainer>
         <Pagination></Pagination>
         <Testimonial></Testimonial>
      </div>
  );
}

export default App;
