// import { useState } from "react";
// import Home from "./pages/Home";
// import"./App.css";
// import NavBar from "./components/NavBar";
// import {ToastContainer} from "react-toastify"
// import Pagination from "./components/Pagination"
// import Testimonial from "./pages/Testimonial";
// import ReservationForm from "./components/ReservationForm";
// import Footer from "./components/Footer"
// import AboutUs from "./pages/About";
// function App() {
//   return (
//       <div>
//          <Home></Home>
//          <ToastContainer></ToastContainer>
//          <Pagination></Pagination>
//          <Testimonial></Testimonial>
//          <ReservationForm></ReservationForm>
//          <Footer></Footer>
//       </div>
//   );
// }


// export default App;


import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pagination from "./components/Pagination";
import Testimonial from "./pages/Testimonial";
import ReservationForm from "./components/ReservationForm";
import AboutUs from "./pages/About";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";  
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <div>
      <NavBar />
      <LanguageSwitcher/>
      <ToastContainer />

      <Routes>

        {/* Home page — saare original sections */}
        <Route path="/" element={
          <>
            <Home />
            <Pagination />
            <Testimonial />
            <ReservationForm />
          </>
        } />

        {/* About Us page */}
        <Route path="/about" element={<AboutUs />} />

         {/* Menu page */}
        <Route path="/menu" element={<Menu/>} />

         {/* Contact Us page */}
        <Route path="/ContactUs" element={<ContactUs/>} />

          {/* Privacy Policy page */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        
        
      </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
