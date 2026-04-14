// import React, { useEffect, useRef, useState } from "react";
// import DhimansLogoimg from "../assests/DhimansLogoimg.webp";

// // ── Gallery images – swap src for your real assets ──────────────────────────
// import image1 from "../assests/image1.jpg";
// const GALLERY = [
//   { src: image1, caption: "Fresh Kebabs off the grill" },
//   { src: image1, caption: "Wood-fired Pizza Margherita" },
//   { src: image1, caption: "Our cozy dining space" },
//   { src: image1, caption: "Handcrafted Doner rolls" },
//   { src: image1, caption: "A feast for the senses" },
//   { src: image1, caption: "The team at work" },
// ];

// const STATS = [
//   { value: "10+", label: "Years of Flavour" },
//   { value: "50+", label: "Menu Items" },
//   { value: "10K+", label: "Happy Guests" },
//   { value: "★ 4.8", label: "Avg. Rating" },
// ];

// // ── Tiny hook: animates number when element enters viewport ──────────────────
// function useInView(threshold = 0.2) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setVisible(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, visible];
// }

// // ── Decorative divider ───────────────────────────────────────────────────────
// function GoldDivider() {
//   return (
//     <div className="flex items-center justify-center gap-3 my-2">
//       <div className="w-12 h-px bg-[#c9a84c]/40" />
//       <span className="text-[#c9a84c] text-xs">✦</span>
//       <div className="w-12 h-px bg-[#c9a84c]/40" />
//     </div>
//   );
// }

// export default function AboutUs() {
//   const [heroRef, heroVisible] = useInView(0.1);
//   const [storyRef, storyVisible] = useInView(0.15);
//   const [statsRef, statsVisible] = useInView(0.2);
//   const [galleryRef, galleryVisible] = useInView(0.1);
//   const [lightbox, setLightbox] = useState(null); // index | null

//   // close lightbox on Escape
//   useEffect(() => {
//     const handler = (e) => { if (e.key === "Escape") setLightbox(null); };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   return (
//     <div className="bg-[#0a0a0a] min-h-screen font-sans text-[#f5f0e8]">

//       {/* ════════════════ HERO ════════════════ */}
//       <section
//         ref={heroRef}
//         className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden"
//       >
//         {/* background texture */}
//         <div className="absolute inset-0 bg-[#0d0d0d]">
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c22 40px,#c9a84c22 41px), repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c22 40px,#c9a84c22 41px)",
//             }}
//           />
//         </div>

//         {/* radial gold glow */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div
//             className="w-[500px] h-[500px] rounded-full opacity-10"
//             style={{
//               background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
//             }}
//           />
//         </div>

//         {/* content */}
//         <div
//           className="relative z-10 text-center px-6"
//           style={{
//             opacity: heroVisible ? 1 : 0,
//             transform: heroVisible ? "translateY(0)" : "translateY(30px)",
//             transition: "opacity 0.9s ease, transform 0.9s ease",
//           }}
//         >
//           <p
//             className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-4"
//             style={{ transitionDelay: "0.1s" }}
//           >
//             Our Heritage
//           </p>
//           <h1
//             className="text-5xl md:text-7xl font-bold mb-4 leading-none"
//             style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               background: "linear-gradient(135deg, #f5f0e8 30%, #c9a84c 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Menu
//           </h1>
//           <GoldDivider />
//           <p className="text-[#f5f0e8]/40 text-sm tracking-[2px] uppercase mt-4">
//             Dhiman's Kebab &amp; Pizza Cafe — Lisboa, Portugal
//           </p>
//         </div>
//       </section>


//       {/* ════════════════ STATS ════════════════ */}
//       <section
//         ref={statsRef}
//         className="border-y border-[#c9a84c]/10 py-16 px-6"
//       >
//         <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
//           {STATS.map((s, i) => (
//             <div
//               key={s.label}
//               className="text-center"
//               style={{
//                 opacity: statsVisible ? 1 : 0,
//                 transform: statsVisible ? "translateY(0)" : "translateY(20px)",
//                 transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
//               }}
//             >
//               <p
//                 className="text-4xl font-bold text-[#c9a84c]"
//                 style={{ fontFamily: "'Georgia', serif" }}
//               >
//                 {s.value}
//               </p>
//               <p className="text-[#f5f0e8]/35 text-[10px] tracking-[2px] uppercase mt-2">
//                 {s.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════ VALUES ════════════════ */}
//       <section className="max-w-5xl mx-auto px-6 md:px-12 py-24">
//         <div className="text-center mb-14">
//           <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">
//             What We Stand For
//           </p>
//           <h2
//             className="text-3xl md:text-4xl"
//             style={{ fontFamily: "'Georgia', serif" }}
//           >
//             Our Values
//           </h2>
//           <GoldDivider />
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               icon: "🔥",
//               title: "Authentic Flavour",
//               desc: "Every spice blend and dough recipe traces back to traditional roots. We never compromise on authenticity.",
//             },
//             {
//               icon: "🌿",
//               title: "Fresh Ingredients",
//               desc: "We source locally whenever possible, choosing fresh produce and quality meats for every order.",
//             },
//             {
//               icon: "🤝",
//               title: "Warm Hospitality",
//               desc: "You are family here. From the moment you walk in, we make sure you feel welcomed and cared for.",
//             },
//           ].map((v) => (
//             <div
//               key={v.title}
//               className="border border-[#2a2a2a] hover:border-[#c9a84c]/30 p-8 transition-all duration-300 group"
//             >
//               <span className="text-3xl">{v.icon}</span>
//               <h3
//                 className="text-[#f5f0e8] text-lg mt-4 mb-2 group-hover:text-[#c9a84c] transition-colors"
//                 style={{ fontFamily: "'Georgia', serif" }}
//               >
//                 {v.title}
//               </h3>
//               <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{v.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>



//       {/* ════════════════ GALLERY ════════════════ */}
//       <section
//         ref={galleryRef}
//         className="px-6 md:px-12 py-20 border-t border-[#c9a84c]/10"
//       >
//         <div className="text-center mb-14">
//           <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">
//             A Glimpse Inside
//           </p>
//           <h2
//             className="text-3xl md:text-4xl"
//             style={{ fontFamily: "'Georgia', serif" }}
//           >
//             Our Gallery
//           </h2>
//           <GoldDivider />
//           <p className="text-[#f5f0e8]/30 text-xs mt-3">
//             Click any photo to view it larger
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
//           {GALLERY.map((img, i) => (
//             <div
//               key={i}
//               onClick={() => setLightbox(i)}
//               className="relative overflow-hidden cursor-pointer group"
//               style={{
//                 opacity: galleryVisible ? 1 : 0,
//                 transform: galleryVisible ? "scale(1)" : "scale(0.95)",
//                 transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
//                 aspectRatio: i === 0 || i === 3 ? "4/3" : "1/1",
//               }}
//             >
//               <img
//                 src={img.src}
//                 alt={img.caption}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-75"
//               />
//               {/* overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
//               <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
//                 <p className="text-[#f5f0e8] text-xs tracking-wide">{img.caption}</p>
//               </div>
//               {/* gold corner accent */}
//               <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/70 transition-all duration-300" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════ LIGHTBOX ════════════════ */}
//       {lightbox !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//           onClick={() => setLightbox(null)}
//         >
//           <div
//             className="relative max-w-3xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setLightbox(null)}
//               className="absolute -top-10 right-0 text-[#f5f0e8]/50 hover:text-[#c9a84c] text-sm tracking-[2px] uppercase transition-colors"
//             >
//               Close ✕
//             </button>
//             <img
//               src={GALLERY[lightbox].src}
//               alt={GALLERY[lightbox].caption}
//               className="w-full rounded-sm ring-1 ring-[#c9a84c]/20"
//             />
//             <p className="text-center text-[#f5f0e8]/50 text-xs mt-3 tracking-wide">
//               {GALLERY[lightbox].caption}
//             </p>
//             {/* prev / next */}
//             <div className="absolute inset-y-0 -left-12 flex items-center">
//               <button
//                 onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)}
//                 className="text-[#c9a84c] text-2xl hover:scale-125 transition-transform"
//               >
//                 ‹
//               </button>
//             </div>
//             <div className="absolute inset-y-0 -right-12 flex items-center">
//               <button
//                 onClick={() => setLightbox((lightbox + 1) % GALLERY.length)}
//                 className="text-[#c9a84c] text-2xl hover:scale-125 transition-transform"
//               >
//                 ›
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ════════════════ VISIT US CTA ════════════════ */}
//       <section className="py-24 px-6 text-center border-t border-[#c9a84c]/10">
//         <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-4">
//           Come Find Us
//         </p>
//         <h2
//           className="text-3xl md:text-4xl mb-4"
//           style={{ fontFamily: "'Georgia', serif" }}
//         >
//           We'd Love to See You
//         </h2>
//         <GoldDivider />
//         <p className="text-[#f5f0e8]/40 text-sm mt-4 mb-8 max-w-md mx-auto leading-relaxed">
//           Rua do Rosmaninho Lote esq, 2135-083 Samora Correia, Portugal
//           <br />
//           <span className="text-[#f5f0e8]/60">+351 920 097 401</span>
//         </p>
//         <div className="flex gap-4 justify-center flex-wrap">
//           <a
//             href="/reservation"
//             className="px-8 py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300"
//           >
//             Book a Table
//           </a>
//           <a
//             href="/menu"
//             className="px-8 py-3 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] text-xs font-bold tracking-[2px] uppercase transition-all duration-300"
//           >
//             View Menu
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// import { useContext, useEffect, useState } from "react";
// import { dataContext } from "../Context/UserContext";
// import { food_items } from "../Foods";
// import Categories from "../Categories";
// import Card from "../components/Card";

// function Menu() {
//   const { cate, setCate } = useContext(dataContext);
//   const ITEMS_PER_PAGE = 6;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeCategory, setActiveCategory] = useState("All");

//   // Reset to All on page load
//   useEffect(() => {
//     setCate(food_items);
//     setActiveCategory("All");
//   }, []);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [cate]);

//   function filterCategory(category) {
//     setActiveCategory(category);
//     if (category === "All") {
//       setCate(food_items);
//     } else {
//       setCate(food_items.filter((item) => item.food_category === category));
//     }
//   }

//   const totalPages = Math.ceil(cate.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = cate.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div className="bg-[#0d0d0d] min-h-screen pt-[72px]">

//       {/* ── Page Header ── */}
//       <div className="relative border-b border-[#c9a84c]/10 overflow-hidden">
//         {/* background grid */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)",
//           }}
//         />
//         {/* gold glow */}
//         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-10"
//           style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />

//         <div className="relative z-10 text-center py-16 px-6">
//           <p className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-3">
//             Our Specialities
//           </p>
//           <h1
//             className="text-5xl md:text-6xl font-bold text-[#f5f0e8] leading-none"
//             style={{ fontFamily: "'Georgia', serif" }}
//           >
//             Explore The Menu
//           </h1>
//           <div className="flex items-center justify-center gap-4 mt-5">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
//             <span className="text-[#c9a84c]">✦</span>
//             <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
//           </div>
//           <p className="text-[#f5f0e8]/30 text-xs tracking-[3px] uppercase mt-4">
//             Pizza · Kebab · Saladas · Vegetarian · Snacks · Deserts
//           </p>
//         </div>
//       </div>

//       {/* ── Category Filters ── */}
//       <div
//         className="flex gap-2 px-6 py-6 overflow-x-auto"
//         style={{ scrollbarWidth: "none" }}
//       >
//         {Categories.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => filterCategory(item.name)}
//             className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-[10px] tracking-[1.5px] uppercase border transition-all duration-300 ${
//               activeCategory === item.name
//                 ? "bg-[#c9a84c] text-[#0d0d0d] border-[#c9a84c] font-bold"
//                 : "bg-transparent text-[#f5f0e8]/50 border-[#2a2a2a] hover:border-[#c9a84c]/40 hover:text-[#f5f0e8]/80"
//             }`}
//           >
//             <span className="text-sm">{item.image}</span>
//             {item.name}
//           </button>
//         ))}
//       </div>

//       {/* ── Result Count ── */}
//       <div className="px-6 pb-4 flex items-center justify-between">
//         <p className="text-[#f5f0e8]/25 text-xs tracking-[2px] uppercase">
//           {cate.length} item{cate.length !== 1 ? "s" : ""} found
//           {activeCategory !== "All" && (
//             <span className="text-[#c9a84c] ml-2">— {activeCategory}</span>
//           )}
//         </p>
//         {activeCategory !== "All" && (
//           <button
//             onClick={() => filterCategory("All")}
//             className="text-[#f5f0e8]/30 hover:text-[#c9a84c] text-[10px] tracking-[2px] uppercase transition-colors"
//           >
//             Clear ✕
//           </button>
//         )}
//       </div>

//       {/* ── Cards Grid ── */}
//       <div className="flex flex-wrap justify-center items-start gap-4 px-6 pb-6 min-h-[600px]">
//         {Array.isArray(cate) && cate.length > 0 ? (
//           currentItems.map((item) => (
//             <Card
//               key={item.id}
//               id={item.id}
//               name={item.food_name}
//               ingredient={item.food_ingredient}
//               food_image={item.food_image}
//               sizes={item.food_sizes}
//               Prices={item.food_prices}
//               Mini={item.food_MiniPrice}
//               Media={item.food_MediaPrice}
//               Maxi={item.food_MaxiPrice}
//               Party={item.food_PartyPrice}
//               Minifood={item.myMiniFood_price}
//               Mediafood={item["myMediaFood_price "]}
//               Maxifood={item.myMaxiFood_price}
//               Partyfood={item.myPartyFood_price}
//               paopitaprice={item.paopitaprice}
//               DonerPrice={item.DonerPrice}
//               ingredientsBySize={item.ingredientsBySize}
//               foodCategory={item.food_category}
//               comboPrice={item.comboPrice}
//               ingredients={item.ingredients}
//               food_ingri={item.food_ingri}
//               food_newingri={item.food_newingri}
//               food_bebita={item.food_bebita}
//             />
//           ))
//         ) : (
//           <div className="flex flex-col items-center justify-center gap-4 py-20 w-full">
//             <div className="text-5xl opacity-10">🍽️</div>
//             <p
//               className="text-[#f5f0e8]/20 text-xl"
//               style={{ fontFamily: "'Georgia', serif" }}
//             >
//               No items found
//             </p>
//             <button
//               onClick={() => filterCategory("All")}
//               className="border border-[#c9a84c]/30 text-[#c9a84c] px-6 py-2.5 text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 transition-all duration-300"
//             >
//               Show All Items
//             </button>
//           </div>
//         )}
//       </div>

//       {/* ── Pagination ── */}
//       {cate.length > ITEMS_PER_PAGE && (
//         <div className="flex justify-center items-center gap-6 py-10 border-t border-[#c9a84c]/10">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => p - 1)}
//             className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
//           >
//             ← Prev
//           </button>
//           <span className="text-[#f5f0e8]/40 text-xs tracking-[2px]">
//             {currentPage} / {totalPages}
//           </span>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => p + 1)}
//             className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
//           >
//             Next →
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Menu;

import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Foods";
import Categories from "../Categories";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

function Menu() {
  const { cate, setCate, showCart, setShowCart } = useContext(dataContext);
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const { t } = useTranslation();   // ✅ yahan add karo

  useEffect(() => {
    setCate(food_items);
    setActiveCategory("All");
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [cate]);

  function filterCategory(category) {
    setActiveCategory(category);
    if (category === "All") {
      setCate(food_items);
    } else {
      setCate(food_items.filter((item) => item.food_category === category));
    }
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
      if (item.drink) message += `   🥤 Drink: ${item.drink}\n`;
      if (item.comboType) message += `   Combo: ${item.comboType === "with" ? "With Combo" : "Without Combo"}\n`;
      message += `   Price: €${typeof item.price === "number" ? item.price.toFixed(2) : item.price}\n`;
    });
    message += `\n💰 Total: €${subtotal.toFixed(2)}`;
    window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const totalPages = Math.ceil(cate.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = cate.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-[#0d0d0d] min-h-screen pt-[72px]">
      
      {/* Toast */}
      <ToastContainer theme="dark" position="bottom-right" autoClose={3000} closeOnClick pauseOnHover draggable />

      {/* Page Header */}
      <div className="relative border-b border-[#c9a84c]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)" }} />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />
        <div className="relative z-10 text-center py-16 px-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-3">{t("ourSpecialities")}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] leading-none" style={{ fontFamily: "'Georgia', serif" }}>
                {t("menu")}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
            <span className="text-[#c9a84c]">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
          </div>
          <p className="text-[#f5f0e8]/30 text-xs tracking-[3px] uppercase mt-4">
            Pizza · Kebab · Saladas · Vegetarian · Snacks · Deserts
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 px-6 py-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
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

      {/* Result Count */}
      <div className="px-6 pb-4 flex items-center justify-between">
        <p className="text-[#f5f0e8]/25 text-xs tracking-[2px] uppercase">
          {cate.length} item{cate.length !== 1 ? "s" : ""} found
          {activeCategory !== "All" && <span className="text-[#c9a84c] ml-2">— {activeCategory}</span>}
        </p>
        {activeCategory !== "All" && (
          <button onClick={() => filterCategory("All")}
            className="text-[#f5f0e8]/30 hover:text-[#c9a84c] text-[10px] tracking-[2px] uppercase transition-colors">
            Clear ✕
          </button>
        )}
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center items-start gap-4 px-6 pb-6 min-h-[600px]">
        {Array.isArray(cate) && cate.length > 0 ? (
          currentItems.map((item) => (
            <Card key={item.id}
              id={item.id} name={item.food_name} ingredient={item.food_ingredient}
              food_image={item.food_image} sizes={item.food_sizes} Prices={item.food_prices}
              Mini={item.food_MiniPrice} Media={item.food_MediaPrice}
              Maxi={item.food_MaxiPrice} Party={item.food_PartyPrice}
              Minifood={item.myMiniFood_price} Mediafood={item["myMediaFood_price "]}
              Maxifood={item.myMaxiFood_price} Partyfood={item.myPartyFood_price}
              paopitaprice={item.paopitaprice} DonerPrice={item.DonerPrice}
              ingredientsBySize={item.ingredientsBySize} foodCategory={item.food_category}
              comboPrice={item.comboPrice} ingredients={item.ingredients}
              food_ingri={item.food_ingri} food_newingri={item.food_newingri}
              food_bebita={item.food_bebita}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-20 w-full">
            <div className="text-5xl opacity-10">🍽️</div>
            <p className="text-[#f5f0e8]/20 text-xl" style={{ fontFamily: "'Georgia', serif" }}>No items found</p>
            <button onClick={() => filterCategory("All")}
              className="border border-[#c9a84c]/30 text-[#c9a84c] px-6 py-2.5 text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 transition-all duration-300">
              Show All Items
            </button>
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
          <span className="text-[#f5f0e8]/40 text-xs tracking-[2px]">{currentPage} / {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}
            className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
            Next →
          </button>
        </div>
      )}

      {/* ── Cart Sidebar ── */}
      <div className={`z-50 w-full md:w-[420px] h-full fixed top-0 right-0 bg-[#0d0d0d] border-l border-[#2a2a2a] shadow-2xl transition-all duration-500 overflow-auto flex flex-col ${showCart ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex justify-between items-center px-6 py-5 border-b border-[#2a2a2a] flex-shrink-0">
          <div>
            <h2 className="text-[#f5f0e8] text-xl" style={{ fontFamily: "'Georgia', serif" }}>Your Order</h2>
            <p className="text-[#f5f0e8]/30 text-[10px] tracking-[2px] uppercase mt-0.5">
              {items.length} item{items.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button onClick={() => setShowCart(false)} className="text-[#f5f0e8]/30 hover:text-[#f5f0e8] transition-colors p-1">
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <Card2 key={item.id} name={item.name} price={item.price}
                  image={item.image} id={item.id} qty={item.qty}
                  ingredients={item.ingredients} drink={item.drink} />
              ))}
            </div>

            <div className="border-t border-[#2a2a2a] px-6 py-4 space-y-3 flex-shrink-0">
              <div className="flex justify-between items-center">
                <span className="text-[#f5f0e8]/50 text-xs tracking-[1.5px] uppercase">Subtotal</span>
                <span className="text-[#c9a84c] font-semibold">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#2a2a2a] pt-3">
                <span className="text-[#f5f0e8] text-lg" style={{ fontFamily: "'Georgia', serif" }}>Total</span>
                <span className="text-[#c9a84c] text-xl" style={{ fontFamily: "'Georgia', serif" }}>€{subtotal.toFixed(2)}</span>
              </div>
            </div>

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
            <p className="text-[#f5f0e8]/30 text-xl" style={{ fontFamily: "'Georgia', serif" }}>Your cart is empty</p>
            <p className="text-[#f5f0e8]/20 text-xs tracking-[2px] uppercase text-center">Add items from the menu to get started</p>
            <button onClick={() => setShowCart(false)}
              className="border border-[#c9a84c]/30 text-[#c9a84c] px-6 py-2.5 text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 transition-all duration-300 mt-4">
              Browse Menu
            </button>
          </div>
        )}
      </div>

      {/* Cart Overlay */}
      {showCart && (
        <div className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={() => setShowCart(false)} />
      )}

    </div>
  );
}

export default Menu;