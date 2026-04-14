// import React from 'react'
// import { FaFacebook , FaInstagram, FaYoutube } from 'react-icons/fa'
// import { useForm, ValidationError } from '@formspree/react';


// export default function Footer() {
//         const [state, handleSubmit] = useForm("xojndkdn");
      
    
//   return (
//     <div className='bg3 flex flex-col gap-12 px-16 py-16 '>
//         {/* 1st Div */}
//        <div className='grid place-content-center gap-6 text-center '>
//          <h2 className='text-4xl font-bold'>Don’t Miss Our Special Deals</h2>
//          <p className='text-lg text-gray-400 '>Suscribe To Our NewsLetter to Get Frequent Updates </p>
//          <div className='flex items-center justify-center '> 
//             <input type="email" name='emailcustomer'  id='' placeholder='Enter Email Address' className="flex-grow px-4 py-3 border-2 border-r-0 border-amber-500 rounded-l-full outline-none  text-sm" />
//                <ValidationError 
//                     prefix="EmailCustomer" 
//                     field="emailcustomer"
//                     errors={state.errors}/>
//             <button className='bg-amber-500 text-white px-6 py-3 rounded r-full font-bold'>Join Now</button>
//          </div>
//        </div>

//     {/* 2nd Div */}
//        <div className='flex flex-col md:flex-row justify-between items-center md:text-left gap-6 '>
//             <div className='flex justify-between md:justify-start gap-4 mt-3 text-yellow-500'>
//                 <h2 className='text-2xl font-bold'>Dhimans Kebab Pizza Cafe</h2>
//                 <div className='flex justify-between md:justify-start gap-4 mt-3 text-yellow-500'>
//                   <a href='https://www.facebook.com/p/Dhimans-kebab-pizza-cafe-100063674913679/' target='_blank'>
//                       <FaFacebook className='text-3xl cursor-pointer' ></FaFacebook>
//                   </a>

//                   <a href='https://www.instagram.com/dhimanspizza.pt/ ' target='_blank'>
//                      <FaInstagram className='text-3xl cursor-pointer'></FaInstagram>

//                   </a>
//                         {/* <FaYoutube className='text-3xl cursor-pointer'></FaYoutube> */}
//                 </div>
//             </div>
//             <div>
//                 <ul className='flex gap-6 justify-center font-medium text-sm'>
//                     <a href=''>
//                         <li>Home</li>
//                     </a>
//                     <a href='#'>
//                        <li>About Us</li>
//                     </a>
//                     <li>Menu</li>
//                     <li>Privacy Policy</li>
//                 </ul>
//             </div>
//        </div>

//        {/* 3rd Paragraph */}
//        <p className='text-center text-sm mt-4'>Copyright © 2026 All Rights Reserved</p>
//     </div>
//   )
// }

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import DhimansLogoimg from "../assests/DhimansLogoimg.webp";
import { Link } from 'react-router-dom'
import LanguageSwitcher from "./LanguageSwitcher";   // 👈 ADD THIS
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [state, handleSubmit] = useForm("xojndkdn");
  const {t} = useTranslation();
  
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/10">
      {/* Newsletter */}
      <div className="border-b border-[#c9a84c]/10 py-14 px-6 md:px-16">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase">{t("Stayupdated")}</p>
          <h3 className="font-playfair text-[#f5f0e8] text-2xl md:text-3xl">
            {t("MissSpecialOffer")}
          </h3>
          <p className="text-[#f5f0e8]/30 text-sm">
          {t("Subscribe")}
          </p>
          {state.succeeded ? (
            <p className="text-[#c9a84c] text-sm">Obrigado por se inscrever!✦</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0 mt-6">
              <input type="email" name="emailcustomer" placeholder="Enter your email address"
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] border-r-0 text-[#f5f0e8] text-sm px-5 py-3.5 outline-none placeholder-[#f5f0e8]/20 focus:border-[#c9a84c]/40 transition-colors" />
              <ValidationError prefix="EmailCustomer" field="emailcustomer" errors={state.errors} />
              <button type="submit" disabled={state.submitting}
                className="bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] px-6 py-3.5 text-xs font-bold tracking-[2px] uppercase transition-all duration-300 disabled:opacity-50 flex-shrink-0">
                {t("JoinNow")}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={DhimansLogoimg} alt="Logo" className="w-12 h-12 rounded-full ring-1 ring-[#c9a84c]/30" />
              <div>
                <p className="font-playfair text-[#f5f0e8] text-base">Dhiman's</p>
                <p className="text-[#f5f0e8]/30 text-[10px] tracking-[2px] uppercase">Kebab & Pizza Cafe</p>
              </div>
            </div>
            <p className="text-[#f5f0e8]/30 text-xs leading-relaxed">
            {t("Authenticflavors")}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/p/Dhimans-kebab-pizza-cafe-100063674913679/" target="_blank" rel="noreferrer"
                className="text-[#f5f0e8]/20 hover:text-[#c9a84c] transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dhimanspizza.pt/" target="_blank" rel="noreferrer"
                className="text-[#f5f0e8]/20 hover:text-[#c9a84c] transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-[10px] tracking-[3px] uppercase text-[#c9a84c]">{t("QuickLinks")}</p>
            <ul className="space-y-3">
              {[
  { label: "Home",           path: "/"            },
  { label: "Sobre nós",       path: "/About"       },
  { label: "Menu",           path: "/Menu"        },
  { label: "Contate-nos",      path: "/ContactUs" },
  { label: "política de Privacidade",  path: "/Privacypolicy"     },
].map(({ label, path }) => (
  <li key={label}>
    <Link
      to={path}
      className="text-[#f5f0e8]/40 text-sm hover:text-[#c9a84c] transition-colors"
    >
      {label}
    </Link>
  </li>
))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-[10px] tracking-[3px] uppercase text-[#c9a84c]">{t("Contact")}</p>
            <div className="space-y-3 text-[#f5f0e8]/40 text-xs leading-relaxed">
              <p>Rua do Rosmaninho Lote esq,<br />2135-083 Samora Correia, Portugal</p>
              <p className="text-[#f5f0e8]/60">+351 920 097 401</p>
              <p>Mon–Fri: 11:00 AM – 10:00 PM<br />Sat–Sun: 09:00 AM – 11:00 PM</p>
   
         {/* Language Switcher */}
           <div className="mt-4">
               <LanguageSwitcher/>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#c9a84c]/10 py-5 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#f5f0e8]/20 text-xs">{t("Reserved")}</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-[#c9a84c]/30" />
            <span className="text-[#c9a84c] text-xs">✦</span>
            <span className="text-[#c9a84c] text-xs">Developed By Amitoj Singh</span>
            <span className="text-[#c9a84c] text-xs">✦</span>
            <div className="w-8 h-px bg-[#c9a84c]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}