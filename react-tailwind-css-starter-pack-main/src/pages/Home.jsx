// import NavBar from "../components/NavBar"
//   import Categories from "../Categories"
//   import Card from "../components/Card"
//   import { useContext } from "react"
//   import { dataContext } from "../Context/UserContext"
//   import { food_items } from "../Foods"
//   import { RxCross2 } from "react-icons/rx";
//   import Card2 from "../components/Card2"
//   import { useSelector } from "react-redux"
//   import { ToastContainer, toast } from "react-toastify";
//   import "react-toastify/dist/ReactToastify.css";
//   import { useState, useEffect } from "react"

//   function Home() {

//   const { cate, setCate , input , showCart , setShowCart} = useContext(dataContext)
//   const ITEMS_PER_PAGE = 5
//   const [currentPage, setCurrentPage] = useState(1)

// const [customerName,setCustomerName] = useState("")
// const [customerEmail,setCustomerEmail] = useState("")
// const [customerPhone,setCustomerPhone] = useState("")

//   // jab category ya search change ho, page 1
//   useEffect(() => {
//     setCurrentPage(1)
//   }, [cate])

//     function filterCategory(category) {
//       if (category === "All") {
//         setCate(food_items)
//       } else {
//         const filtered = food_items.filter(
//           item => item.food_category === category
//         )
//         setCate(filtered)
//       }
//     }
//     // Joh Yeh Item Hamne Liya Ha Selector Seh 
//     let items = useSelector(state=>state.cart)
//   let subtotal = items.reduce((total, item) => {
//     const raw = item.price;
//     const price = typeof raw === "string"
//       ? parseFloat(raw.replace("€", "").trim())
//       : parseFloat(raw);
//     const qty = item.qty || 1;
//     return total + (isNaN(price) ? 0 : price * qty);
//   }, 0);

//   let total = subtotal;

//   // WhatsApp Ordering System
//   const sendOrderWhatsApp = () => {

// if(!customerName || !customerPhone){
// toast.error("Please enter name and phone")
// return
// }

// const ownerNumber = "+351920097401"

// let message = `🍕 *New Pizza Order*\n\n`

// message += `👤 Name: ${customerName}\n`
// message += `📧 Email: ${customerEmail}\n`
// message += `📞 Phone: ${customerPhone}\n\n`

// message += `🛒 Order Items:\n`

// items.forEach((item,index)=>{
// message += `${index+1}. ${item.name}\n`
// message += `   Qty: ${item.qty}\n`

// if(item.ingredients?.length){
// message += `    Ingredients: ${item.ingredients.join(", ")}\n`
// }

// if(item.drink){
// message += `   🥤 Drink: ${item.drink}\n`
// }

// if(item.comboType){
// message += `   Combo: ${item.comboType === "with" ? "With Combo" : "Without Combo"}\n`
// }

// message += `   Price: €${typeof item.price === "number" ? item.price.toFixed(2) : item.price}\n`
// })

// message += `💰 Total: €${total.toFixed(2)}`

// const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`

// window.open(whatsappURL,"_blank")

// }

//   const totalPages = Math.ceil(cate.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const currentItems = cate.slice(startIndex, startIndex + ITEMS_PER_PAGE)


//   // jab category ya search change ho, page 1
//   useEffect(() => {
//     setCurrentPage(1)
//   }, [cate])


//     return (
//       <div className="bg-black min-h-screen">

//         <NavBar />

//         {/* CATEGORIES */}
//       {!input?<div className="flex flex-wrap justify-center items-start gap-5 p-5">
//           {Categories.map(item => (
//             <div
//               key={item.id}
//               onClick={() => filterCategory(item.name)}
//               className="bg-white min-w-[110px] flex flex-col p-3 rounded-xl cursor-pointer   hover:bg-yellow-400 transition-all duration-300"
//             >
//               {item.image}
//               {item.name}
//             </div>
//           ))}
//         </div>:null}

//         {/* CARDS */}
//       <div className="flex flex-wrap justify-center gap-5 p-5">
//     {Array.isArray(cate) && cate.length > 0 ? (
//       currentItems.map(item => (
//         <Card key={item.id} 
//         id={item.id} 
//         name={item.food_name} 
//         ingredient={item.food_ingredient} 
//         image1={item.food_image}
//         sizes={item.food_sizes}
//         Prices={item.food_prices} 
//         Mini={item.food_MiniPrice}
//         Media={item.food_MediaPrice}
//         Maxi={item.food_MaxiPrice} 
//         Party={item.food_PartyPrice} 
//         Minifood={item.myMiniFood_price} 
//         Mediafood={item["myMediaFood_price "]} 
//         Maxifood={item.myMaxiFood_price} 
//         Partyfood={item.myPartyFood_price} 
//         ingri={item.food_ingri} 
//         newingri={item.food_newingri} 
//         paopitaprice={item.paopitaprice} 
//         DonerPrice={item.DonerPrice} 
//         ingredientsBySize={item.ingredientsBySize}
//         foodCategory={item.food_category}
//         comboPrice={item.comboPrice}   // ✅ MUST
//         qty={item.qty}
//         ingredientss={item.food_bebita2}
//   // 👈 THIS LINE
//       food_image={item.food_image}
//       ingredients={item.ingredients}
//       food_ingri={item.food_ingri}          // 👈 MUST
//       food_newingri={item.food_newingri}
//       food_bebita={item.food_bebita}        // 👈 MUST
      
//   // Eh Button Top Vala Ha 
//   Showbuttonn={item.food_category === "Pizza"} buttonn={item.buttonn} 
  
//   // Eh Button Mini , Maxi , Media , Party laye use kar reha ha 
//   showPriceButtons={item.food_category === "Pizza"}  bttn={item.btn} >
    
//   </Card>
//       ))
//     ) : (
//       <p className="text-white text-xl">No items found</p>
//     )}
//   </div>

//   {/* Pagination */}
//   {cate.length > ITEMS_PER_PAGE && (
//     <div className="flex justify-center items-center gap-4 pb-10">
//       <button
//         disabled={currentPage === 1}
//         onClick={() => setCurrentPage(p => p - 1)}
//         className="px-4 py-2 bg-yellow-400 text-black rounded disabled:opacity-50 text-2xl"
//       >
//         Prev
//       </button>

//       <span className="text-white font-semibold">
//         {currentPage} / {totalPages}
//       </span>

//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => setCurrentPage(p => p + 1)}
//         className="px-4 py-2 bg-yellow-400 text-black rounded disabled:opacity-50 text-2xl"
//       >
//         Next
//       </button>
//     </div>
//   )}

//     {/* Side Bar  Add To Card Section */}
//     <div className={`z-50 w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
//         <header className="w-[100%] flex justify-between items-center">
//           <span className="text-yellow-400 text-[18px] font-semibold">Order Items</span>
//             <RxCross2  className="text-yellow-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-gray-700" onClick={()=>setShowCart(false)}/>
//         </header>

//         {/* Cart Meh Joh Order Items Keh Niche dikh Raha Ha SubTotal and Total uskeh niche 
//         Empty Item Dikhana Ha  */}

//         {/* We Create the Items Length  */}

//         {items.length > 0?
//     <>
//       <div className="w-full mt-9 flex flex-col gap-8">
//         {items.map((item)=>(
//             <Card2 
//             key={item.id}
//             name={item.name} 
//             price={item.price} 
//             image={item.image} 
//             id={item.id} 
//             qty={item.qty}
//             ingredients={item.ingredients}
//             drink={item.drink}
//             />
//         ))}
//         </div>

//         {/* Price in Order Item Subtotal all these Things */}
//         <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col items-center gap-4 p-2" >
//         <div className="w-full flex justify-between items-center">
//           <span className="text-2xl font-semibold">Subtotal</span>
//           <span className="text-yellow-500 font-bold text-2xl">€{subtotal.toFixed(2)}
//           </span>
//         </div>
//         </div>
    
//     <div> 
//       <div className="w-full flex justify-between items-center p-4">
//           <span className="text-2xl font-semibold ">Total</span>
//           <span className="text-yellow-500 font-bold text-2xl">€{total.toFixed(2)}
//           </span>
//       </div>
//     </div>

//       <div className="flex flex-col gap-3 mt-6">

// <label for="text">Enter Your Name:</label>
// <input
// type="text"
// placeholder="Customer Name"
// className="border p-2 rounded border-yellow-500"
// value={customerName}
// onChange={(e)=>setCustomerName(e.target.value)}
// />

// <label for="email">Enter Email ID:</label>
// <input
// type="email"
// placeholder="Email Address"
// className="border p-2 rounded border-yellow-500"
// value={customerEmail}
// onChange={(e)=>setCustomerEmail(e.target.value)}
// />

// <label for="phone">Enter phone number:</label>
// <input
// type="tel"
// placeholder="Phone Number"
// id="phone"
// name="phone"
// className="border p-2 rounded border-yellow-500"
// value={customerPhone}
// onChange={(e)=>setCustomerPhone(e.target.value)}
// pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
// />

// </div>
//       {/* This is the Place Order Wala Button */}
//       <button className="w-full p-3  rounded-lg bg-yellow-300 text-white hover:bg-yellow-500 transition-all"
//         onClick={sendOrderWhatsApp}
//       >Place Order</button>
//   </>
//     :
//     <div className="flex justify-center items-center  font-bold font-serif md:font-extralight text-2xl text-yellow-400 pt-5">
//         Empty Cart
//       </div>}

//   </div>

    
//   </div>

//     )
//   }
//   export default Home

import NavBar from "../components/NavBar";
import Categories from "../Categories";
import Card from "../components/Card";
import { useContext } from "react";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Foods";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import image1 from "../assests/image1.jpg";
import image2 from "../assests/image2.webp";
import { useTranslation } from "react-i18next";


function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const { t } = useTranslation();
  useEffect(() => { setCurrentPage(1); }, [cate]);

  function filterCategory(category) {
    setActiveCategory(category);
    if (category === "All") { setCate(food_items); }
    else { setCate(food_items.filter((item) => item.food_category === category)); }
  }

  const items = useSelector((state) => state.cart);
  const subtotal = items.reduce((total, item) => {
    const price = typeof item.price === "string"
      ? parseFloat(item.price.replace("€", "").trim())
      : parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * (item.qty || 1));
  }, 0);

  const sendOrderWhatsApp = () => {
    if (!customerName || !customerPhone) { toast.error("Please enter name and phone"); return; }
    const ownerNumber = "+351920097401";
    let message = `🍕 *New Order — Dhiman's Kebab & Pizza*\n\n`;
    message += `👤 Name: ${customerName}\n📧 Email: ${customerEmail}\n📞 Phone: ${customerPhone}\n\n🛒 Order:\n`;
    items.forEach((item, i) => {
      message += `${i + 1}. ${item.name}\n   Qty: ${item.qty}\n`;
      if (item.ingredients?.length) message += `   Ingredients: ${item.ingredients.join(", ")}\n`;
      if (item.saladIngredients?.length)message += `   Salad: ${item.saladIngredients.join(", ")}\n`;
      if (item.drink) message += `   🥤 Drink: ${item.drink}\n`;
      if (item.comboType) message += `   Combo: ${item.comboType === "with" ? "With Combo" : "Without Combo"}\n`;
       if (item.description)message += `   Note: ${item.description}\n`;   // ⭐ YEH LINE ADD KARO

      message += `   Price: €${typeof item.price === "number" ? item.price.toFixed(2) : item.price}\n`;
    });
    message += `\n💰 Total: €${subtotal.toFixed(2)}`;
    window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const totalPages = Math.ceil(cate.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = cate.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <NavBar />
      <ToastContainer theme="dark" position="bottom-right" autoClose={3000} closeOnClick pauseOnHover draggable />

      {/* Hero Section */}
      {!input && (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden pt-[72px]">
          <div className="absolute inset-0">
            <img src={image2} alt="Hero" className="w-full h-full object-cover brightness-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]" />
            <div className="absolute inset-0"
              style={{ backgroundImage: "repeating-linear-gradient(45deg,#c9a84c 0,#c9a84c 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px", opacity: 0.03 }} />
          </div>
          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <div className="inline-block border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] tracking-[4px] uppercase px-5 py-2 mb-6">
              Est. Lisboa, Portugal
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl text-[#f5f0e8] font-bold leading-tight mb-4">
             {t("sabores")}
             <br />
              <span className="text-[#c9a84c]">{t("Madewithpassion")}</span>
            </h1>
            <p className="text-[#f5f0e8]/40 text-xs tracking-[3px] uppercase mb-8">
              Pizza · Kebab · Saladas · Vegetarian
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" })}
                className="bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] px-8 py-3 text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
                {t("Encomendeagora")}
              </button>
              <button
                onClick={() => document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" })}
                className="border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] px-8 py-3 text-xs tracking-[2px] uppercase transition-all duration-300">
                {t("VisualizarMenu")}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Stats Bar */}
      {!input && (
        <div className="grid grid-cols-3 border-y border-[#c9a84c]/10">
          {[
            { num: "46+", label: "Menu Unid" },
            { num: "4.8★", label: "Avaliação do cliente"},
            { num: "30min", label: "Média Entrega" },
          ].map((stat) => (
            <div key={stat.label} className="py-5 text-center border-r border-[#c9a84c]/10 last:border-r-0">
              <p className="font-playfair text-[#c9a84c] text-2xl">{stat.num}</p>
              <p className="text-[#f5f0e8]/30 text-[10px] tracking-[2px] uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Menu Section */}
      <section id="menu-section" className={`${!input ? "pt-12" : "pt-[90px]"}`}>

        {/* Section Header */}
        {!input && (
          <div className="text-center mb-8 px-6">
            <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-2">{t("ourSpecialities")}</p>
            <h2 className="font-playfair text-[#f5f0e8] text-3xl">{t("ExploretheMenu")}</h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
              <span className="text-[#c9a84c] text-sm">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
            </div>
          </div>
        )}

        {/* Categories */}
        {!input && (
          <div className="flex gap-2 px-6 pb-6 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none" }}>
            {Categories.map((item) => (
              <button key={item.id} onClick={() => filterCategory(item.name)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-[10px] tracking-[1.5px] uppercase border transition-all duration-300 ${
                  activeCategory === item.name
                    ? "bg-[#c9a84c] text-[#0d0d0d] border-[#c9a84c] font-bold"
                    : "bg-transparent text-[#f5f0e8]/50 border-[#2a2a2a] hover:border-[#c9a84c]/40 hover:text-[#f5f0e8]/80"
                }`}>
                <span className="text-sm">{item.image}</span>
                {item.name}
              </button>
            ))}
          </div>
        )}
        
        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center items-start gap-4 px-6 pb-6 min-h-[700px]">
          {Array.isArray(cate) && cate.length > 0 ? (
            currentItems.map((item) => (
              <Card key={item.id}
                id={item.id}
                name={item.food_name}
                ingredient={item.food_ingredient}
                food_image={item.food_image}
                sizes={item.food_sizes}
                Prices={item.food_prices}
                Mini={item.food_MiniPrice}
                Media={item.food_MediaPrice}
                Maxi={item.food_MaxiPrice}
                Party={item.food_PartyPrice}
                Minifood={item.myMiniFood_price}
                Mediafood={item["myMediaFood_price "]}
                Maxifood={item.myMaxiFood_price}
                Partyfood={item.myPartyFood_price}
                paopitaprice={item.paopitaprice}
                DonerPrice={item.DonerPrice}
                ingredientsBySize={item.ingredientsBySize}
                foodCategory={item.food_category}
                comboPrice={item.comboPrice}
                ingredients={item.ingredients}
                saladIngredients={item.saladIngredients}
                food_ingri={item.food_ingri}
                food_newingri={item.food_newingri}
                food_bebita={item.food_bebita}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <p className="text-[#f5f0e8]/20 text-lg font-playfair">No items found</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {cate.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center items-center gap-6 py-10 border-t border-[#c9a84c]/10">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}
              className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
              ← Prev
            </button>
            <span className="text-[#f5f0e8]/40 text-xs tracking-[2px]">
              {currentPage} / {totalPages}
            </span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}
              className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
              Next →
            </button>
          </div>
        )}
      </section>

      {/* Cart Sidebar */}
      <div className={`z-50 w-full md:w-[420px] h-full fixed top-0 right-0 bg-[#0d0d0d] border-l border-[#2a2a2a] shadow-2xl transition-all duration-500 flex flex-col ${showCart ? "translate-x-0" : "translate-x-full"}`}>

        {/* Cart Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#2a2a2a] flex-shrink-0">
          <div>
            <h2 className="font-playfair text-[#f5f0e8] text-xl">Your Order</h2>
            <p className="text-[#f5f0e8]/30 text-[10px] tracking-[2px] uppercase mt-0.5">
              {items.length} item{items.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button onClick={() => setShowCart(false)}
            className="text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors p-1">
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <Card2 key={item.id} name={item.name} price={item.price}
                  image={item.image} id={item.id} qty={item.qty}
                  ingredients={item.ingredients}  saladIngredients={item.saladIngredients}  drink={item.drink} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="border-t border-[#2a2a2a] px-6 py-4 space-y-3 flex-shrink-0">
              <div className="flex justify-between items-center">
                <span className="text-[#f5f0e8]/50 text-xs tracking-[1.5px] uppercase">Subtotal</span>
                <span className="text-[#c9a84c] font-semibold">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#2a2a2a] pt-3">
                <span className="font-playfair text-[#f5f0e8] text-lg">Total</span>
                <span className="font-playfair text-[#c9a84c] text-xl">€{subtotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="px-6 py-4 border-t border-[#2a2a2a] space-y-3 flex-shrink-0">
              <p className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Your Details</p>
              {[
                { placeholder: "Full Name *", value: customerName, onChange: setCustomerName, type: "text" },
                { placeholder: "Email Address", value: customerEmail, onChange: setCustomerEmail, type: "email" },
                { placeholder: "Phone Number *", value: customerPhone, onChange: setCustomerPhone, type: "tel" },
              ].map((field) => (
                <input key={field.placeholder} type={field.type} placeholder={field.placeholder}
                  value={field.value} onChange={(e) => field.onChange(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8] text-sm px-4 py-3 outline-none placeholder-[#f5f0e8]/20 transition-colors" />
              ))}
              <button onClick={sendOrderWhatsApp}
                className="w-full bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] py-4 font-bold text-xs tracking-[2px] uppercase transition-all duration-300 mt-2">
                Place Order via WhatsApp
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
            <div className="text-6xl opacity-10">🛒</div>
            <p className="font-playfair text-[#f5f0e8]/30 text-xl">Your cart is empty</p>
            <p className="text-[#f5f0e8]/20 text-xs tracking-[2px] uppercase text-center">
              Add items from the menu to get started
            </p>
            <button onClick={() => setShowCart(false)}
              className="border border-[#c9a84c]/30 text-[#c9a84c] px-6 py-2.5 text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 transition-all duration-300 mt-4">
              Browse Menu
            </button>
          </div>
        )}
      </div>

      {/* Cart Overlay */}
      {showCart && (
        <div className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default Home;