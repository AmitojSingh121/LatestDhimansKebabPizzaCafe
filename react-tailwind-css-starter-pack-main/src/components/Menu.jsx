import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Foods";
import Categories from "../Categories";
import Card from "../components/Card";

function Menu() {
  const { cate, setCate } = useContext(dataContext);
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  // Reset to All on page load
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

  const totalPages = Math.ceil(cate.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = cate.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-[#0d0d0d] min-h-screen pt-[72px]">

      {/* ── Page Header ── */}
      <div className="relative border-b border-[#c9a84c]/10 overflow-hidden">
        {/* background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)",
          }}
        />
        {/* gold glow */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />

        <div className="relative z-10 text-center py-16 px-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-3">
            Our Specialities
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#f5f0e8] leading-none"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Explore The Menu
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

      {/* ── Category Filters ── */}
      <div
        className="flex gap-2 px-6 py-6 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {Categories.map((item) => (
          <button
            key={item.id}
            onClick={() => filterCategory(item.name)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-[10px] tracking-[1.5px] uppercase border transition-all duration-300 ${
              activeCategory === item.name
                ? "bg-[#c9a84c] text-[#0d0d0d] border-[#c9a84c] font-bold"
                : "bg-transparent text-[#f5f0e8]/50 border-[#2a2a2a] hover:border-[#c9a84c]/40 hover:text-[#f5f0e8]/80"
            }`}
          >
            <span className="text-sm">{item.image}</span>
            {item.name}
          </button>
        ))}
      </div>

      {/* ── Result Count ── */}
      <div className="px-6 pb-4 flex items-center justify-between">
        <p className="text-[#f5f0e8]/25 text-xs tracking-[2px] uppercase">
          {cate.length} item{cate.length !== 1 ? "s" : ""} found
          {activeCategory !== "All" && (
            <span className="text-[#c9a84c] ml-2">— {activeCategory}</span>
          )}
        </p>
        {activeCategory !== "All" && (
          <button
            onClick={() => filterCategory("All")}
            className="text-[#f5f0e8]/30 hover:text-[#c9a84c] text-[10px] tracking-[2px] uppercase transition-colors"
          >
            Clear ✕
          </button>
        )}
      </div>

      {/* ── Cards Grid ── */}
      <div className="flex flex-wrap justify-center items-start gap-4 px-6 pb-6 min-h-[600px]">
        {Array.isArray(cate) && cate.length > 0 ? (
          currentItems.map((item) => (
            <Card
              key={item.id}
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
              food_ingri={item.food_ingri}
              food_newingri={item.food_newingri}
              food_bebita={item.food_bebita}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-20 w-full">
            <div className="text-5xl opacity-10">🍽️</div>
            <p
              className="text-[#f5f0e8]/20 text-xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              No items found
            </p>
            <button
              onClick={() => filterCategory("All")}
              className="border border-[#c9a84c]/30 text-[#c9a84c] px-6 py-2.5 text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 transition-all duration-300"
            >
              Show All Items
            </button>
          </div>
        )}
      </div>

      {/* ── Pagination ── */}
      {cate.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center gap-6 py-10 border-t border-[#c9a84c]/10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            ← Prev
          </button>
          <span className="text-[#f5f0e8]/40 text-xs tracking-[2px]">
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-xs tracking-[2px] uppercase hover:bg-[#c9a84c]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;