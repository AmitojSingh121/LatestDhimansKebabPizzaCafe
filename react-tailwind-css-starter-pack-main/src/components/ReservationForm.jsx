// import React, { useState } from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { useForm, ValidationError } from '@formspree/react';
// function ReservationForm() {
//     const [formData , setFormData] = useState(
//         {
//             name :"",
//             email: "",
//             phone:"",
//             date:"",
//             time:"",
//             guests:"1",
//         }
//     );

//     const [state, handleSubmit] = useForm("xojndkdn");

//   if (state.succeeded) {
//     return  <p className="text-green-600 font-bold">Thanks for joining!</p>;
//   }

//     const handleChange = (e) =>{
//         setFormData({...formData , [e.target.name]:e.target.value})
//     }
//     const timeSlot = ()=> {
//         const slots = [];
//         for(let hour = 9 ; hour < 21 ; hour++){
//             const startHour = hour % 12 === 0 ? 12 : hour % 12;
//             const startPeriod = hour < 12 ? "AM" : "PM"
//             const EndHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1)
//             const EndPeriod = hour + 1 < 12 ? "AM" : "PM"

//             slots.push(`${startHour}:00 ${startPeriod} - ${EndHour}:00 ${EndPeriod}`)
//         }
//         return slots
//     }
//   return (
//     <div className='min-h-screen bg p-6 md:p-12'>
//         <div className='max-w-6xl mx-auto grid md:grid-cols-3 '>
//             <form className ='md:col-span-2 bg2 p-8 shadow-md'action="" onSubmit={handleSubmit}>
//                 <h2 className='text-xl font-semibold text-amber-500 uppercase tracking-wider'>Online Reservation</h2>
//                 <h1 className='text-3xl font-bold mb-4 '>Dine With Us - <span className='text-amber-500'>Reserve Now</span></h1>
//                 <div className='grid md:grid-cols-2 gap-4'>
//                     <div className='grid gap-1.5'>
//                         <label htmlFor="name" className='font-bold'>Full Name</label>
//                         <input type="text" id='name' name = 'name' value={formData.name} onChange={handleChange} placeholder='Full Name' required className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300'/>
//                          <ValidationError 
//                      prefix="name" 
//                     field="name"
//                     errors={state.errors}/>
//                     </div>

//                     <div className='grid gap-1.5'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Email of Customer'  className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300' required/>
//                          <ValidationError 
//                          prefix="Email" 
//                         field="email"
//                         errors={state.errors}
//       />
//                     </div>

//                     <div className='grid gap-1.5'>
//                         <label htmlFor="">Phone Number</label>
//                         <input type="tel" name="phonenumber" value={formData.phonenumber}  min="3000000000" max="9999999999" onchange={handleChange} placeholder='Phone Number Customer' className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300' required/>
//                        <ValidationError 
//                          prefix="PhoneNumber" 
//                         field="phonenumber"
//                         errors={state.errors}/>
//                     </div>

//                     <div className='grid gap-1.5'>
//                         <label htmlFor="" className='font-bold'>Reservation Date</label>
//                         <input type="date" name = "dateofbirth" value={formData.dateofbirth} onchange={handleChange} className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300' required/>
//                         <ValidationError 
//                          prefix="DateOfBirth" 
//                         field="dateofbirth"
//                         errors={state.errors}/>
//                     </div>

//                     <div className='grid gap-1.5 '>
//                         <label htmlFor="" className='font-bold'>Time of Reservation</label>
//                         <select  name = "timeofreservation" value ={formData.timeofreservation} onchange={handleChange} className='w-full p-3 mb-3 border bg  focus:ring focus:ring-gray-300'>
//                             <ValidationError 
//                          prefix="TimeOfReservation" 
//                         field="timeofreservation"
//                         errors={state.errors}/>
//                             <option value="">Select Time </option>
//                             {
//                                 timeSlot().map((slot , index) =>(
//                                     <option key={index} value={slot}>{slot}</option>
//                                 ) )
//                             }
//                         </select>
//                     </div>

//                      <div className='grid gap-1.5'>
//                         <label htmlFor="" className='font-bold'>Number of Guests</label>
                        
//                         <select name="guestsdhiman" value = {formData.guestsdhiman} onchange={handleChange} id="" className='w-full p-3 mb-3 border'>
//                             <ValidationError 
//                           prefix="GuestsDhiman" 
//                           field="guestsdhiman"
//                           errors={state.errors}/>
//                             {[...Array(10).keys()].map((i)=>(
//                                 <option key={i + 1} value = {i + 1}>{i + 1} Guest(s)</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
                            
//             {/* Sumbit Button */}
//             <button type="submit" className='w-full mt-4 bg-amber-500 text-white hover:bg-amber-600 transition font-bold'>Book a Table</button>
//             </form>

//             <div className='bg3 text-black p-8 shadow-md space-y-10 text-center'>
//                 <div>
//                     <h3 className='text-3xl font-bold'>Address</h3>
//                     <p>Rua do in Rosmaninho Lote esq, 2135-083 Samora Correia, Portugal</p> 
//                 </div>

//                 <div>
//                     <p>Call Us</p>
//                     <h3 className='text-3xl font-bold '>+351 920 097 401</h3>
                
//                 <div>
//                      <h3 className='text-3xl font-bold'>Open Time</h3>
//                      <p>Mon - Fri : 11:00 AM - 10:00 PM </p>
//                      <p>Sat - Sun : 09:00AM - 11:00 PM</p>
//                 </div>
//                     <div>
//                         <h3 className='text-lg font-bold mb-2'>Stay Connected</h3>
//                         <FaFacebook className='text-4xl text-white'></FaFacebook>
//                         <FaInstagramSquare className='text-4xl text-white'/>
//                     </div>
//                 </div>            

//             </div>
//         </div>
//     </div>
//   )
// }

// export default ReservationForm

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { IoLocationOutline, IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phonenumber: "", dateofbirth: "", timeofreservation: "", guestsdhiman: "1",
  });
  const [state, handleSubmit] = useForm("xojndkdn");
  const {t} = useTranslation();
  

  if (state.succeeded) {
    return (
      <div className="bg-[#0d0d0d] py-20 flex items-center justify-center border-t border-[#c9a84c]/10">
        <div className="text-center">
          <div className="text-[#c9a84c] text-5xl mb-4">✦</div>
          <h3 className="font-playfair text-[#f5f0e8] text-2xl mb-2">Reservation Confirmed!</h3>
          <p className="text-[#f5f0e8]/40 text-sm">We look forward to welcoming you.</p>
        </div>
      </div>
    );
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const timeSlots = () => {
    const slots = [];
    for (let h = 9; h < 21; h++) {
      const s = h % 12 === 0 ? 12 : h % 12;
      const sp = h < 12 ? "AM" : "PM";
      const e = (h + 1) % 12 === 0 ? 12 : h + 1;
      const ep = h + 1 < 12 ? "AM" : "PM";
      slots.push(`${s}:00 ${sp} - ${e}:00 ${ep}`);
    }
    return slots;
  };

  const inputClass = "w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8] text-sm px-4 py-3 outline-none placeholder-[#f5f0e8]/20 transition-colors";
  const labelClass = "text-[10px] tracking-[2px] uppercase text-[#f5f0e8]/40 mb-1.5 block";

  return (
    <section className="bg-[#0d0d0d] py-20 px-6 md:px-16 border-t border-[#c9a84c]/10">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">{t("Bookatable")}</p>
        <h2 className="font-playfair text-[#241909] text-3xl md:text-4xl">
          {t("Dinewithus")}<span className="text-[#c9a84c]">{t("Reserve")}</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
          <span className="text-[#c9a84c] text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-0 border border-[#2a2a2a]">
        {/* Form */}
        <form className="md:col-span-2 bg-[#141414] p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" id="name" name="name" value={formData.name}
                onChange={handleChange} placeholder="Your full name" required className={inputClass} />
              <ValidationError prefix="name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" id="email" name="email" value={formData.email}
                onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" name="phonenumber" value={formData.phonenumber}
                onChange={handleChange} placeholder="+351 000 000 000" required className={inputClass} />
              <ValidationError prefix="PhoneNumber" field="phonenumber" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
            <div>
              <label className={labelClass}>Reservation Date</label>
              <input type="date" name="dateofbirth" value={formData.dateofbirth}
                onChange={handleChange} required
                className={`${inputClass} [color-scheme:dark]`} />
              <ValidationError prefix="DateOfBirth" field="dateofbirth" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
            <div>
              <label className={labelClass}>Time</label>
              <select name="timeofreservation" value={formData.timeofreservation}
                onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                <option value="">Select Time</option>
                {timeSlots().map((slot, i) => (
                  <option key={i} value={slot} className="bg-[#1a1a1a]">{slot}</option>
                ))}
              </select>
              <ValidationError prefix="TimeOfReservation" field="timeofreservation" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
            <div>
              <label className={labelClass}>Number of Guests</label>
              <select name="guestsdhiman" value={formData.guestsdhiman}
                onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1} className="bg-[#1a1a1a]">{i + 1} Guest{i > 0 ? "s" : ""}</option>
                ))}
              </select>
              <ValidationError prefix="GuestsDhiman" field="guestsdhiman" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
          </div>
          <button type="submit" disabled={state.submitting}
            className="w-full bg-[#c9a84c] hover:bg-[#e0bf6a] disabled:opacity-50 text-[#0d0d0d] py-4 font-bold text-xs tracking-[2px] uppercase transition-all duration-300">
            {state.submitting ? "Booking..." : "Book a Table"}
          </button>
        </form>

        {/* Info Panel */}
        <div className="bg-[#0d0d0d] border-l border-[#2a2a2a] p-8 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <IoLocationOutline className="text-[#c9a84c] w-4 h-4" />
              <span className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">{t("Address")}</span>
            </div>
            <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">
              Rua do Rosmaninho Lote esq, 2135-083 Samora Correia, Portugal
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <IoCallOutline className="text-[#c9a84c] w-4 h-4" />
              <span className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">{t("CallUs")}</span>
            </div>
            <p className="font-playfair text-[#f5f0e8] text-lg">+351 920 097 401</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <IoTimeOutline className="text-[#c9a84c] w-4 h-4" />
              <span className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">{t("OpenHours")}</span>
            </div>
            <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">
              Mon – Fri: 11:00 AM – 10:00 PM<br />
              Sat – Sun: 09:00 AM – 11:00 PM
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-[#c9a84c] mb-3">{t("FollowUs")}</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Dhimans-kebab-pizza-cafe-100063674913679/" target="_blank" rel="noreferrer"
                className="text-[#f5f0e8]/30 hover:text-[#c9a84c] transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/dhimanspizza.pt/" target="_blank" rel="noreferrer"
                className="text-[#f5f0e8]/30 hover:text-[#c9a84c] transition-colors">
                <FaInstagramSquare className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationForm;