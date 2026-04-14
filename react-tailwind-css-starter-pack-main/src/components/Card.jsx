import React, { useState, useEffect } from "react";
import image1 from "../assests/image1.jpg";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";
import { LuVegan } from "react-icons/lu";

function Card({
  id, name, ingredient, foodCategory, food_image, paopitaprice,
  sizes, Prices, DonerPrice, food_ingri, food_newingri, food_bebita,
  Mini, Media, Maxi, Party, Minifood, Mediafood, Maxifood, Partyfood,
  ingredientsBySize, ingredients = [], saladIngredients, comboPrice,
  chooseFavorite   // ✅ ADD THIS
}) {
  const dispatch = useDispatch();

  const drinks = [
    { name: "Coca-Cola", price: 2 },
    { name: "Coca-Cola Zero 33cl", price: 2 },
    { name: "Sumol Annanas 0.33cl", price: 2 },
    { name: "Frutea Manga e Maracuja 33cl", price: 2 },
    { name: "Brazil Guarana 0.33cl", price: 2 },
    { name: "Sprite Limao 33cl", price: 2 },
    { name: "Fanta Laranja 33cl", price: 2 },
    { name: "Maaza Mango lata", price: 2 },
  ];

  const [comboType, setComboType] = useState("without");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const isEspecial = name?.trim() === "Pizza Especial";

useEffect(() => {
  if (!selectedSize) return;

  if (!isEspecial) {
    setSelectedIngredients(
      ingredientsBySize?.[selectedSize] || []
    );
  } else {
    setSelectedIngredients([]);
  }

}, [selectedSize, ingredientsBySize, isEspecial]);
  
const [selectedSaladIngredients, setSelectedSaladIngredients] = useState(saladIngredients || []);
    
  
useEffect(() => {
 setSelectedSaladIngredients(saladIngredients || []);
}, [id, saladIngredients]);

  const toggleIngredient = (item) =>
    setSelectedIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const toggleSaladIngredient = (item) =>
    setSelectedSaladIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  // ← YEH NAYA CODE YAHAN PASTE KARO (states ke baad, return se pehle)
  const ESPECIAL_INGREDIENTS = [
    "Alho", "Pimenta Fresco", "Cebola Roxa", "Sundico",
    "Kebab de Frango", "Kebab de Vaca", "Milho", "Ananás",
    "Azeitonas", "Broccoli", "Pimenta Branca", "Delícias do Mar",
    "Espinafre", "Cogumelos", "Ovo", "Salame", "Bacon",
    "Camarão", "Pepperoni", "Atum", "Jalapeños", "Ovo Cozido",
    "Tomate Fatiado", "Salsicha", "Seekh Kebab Lamb", "Seekh Kebab Frango"
  ];

  const isPizza = foodCategory === "Pizza" || foodCategory === "Pizza Seekh Kebab" || foodCategory === "Creamy Pizza Catupiry";
  const isKebab = foodCategory === "Kebab";
  const isVegitarian = foodCategory === "Vegitarian";
  const hideMiniOptions = name === "Pizza Mamamia" && selectedSize === "Mini";
  const hideQuatroOptions = name === "Pizza Quatro Estações" && selectedSize === "Mini";
  const hideNapoliOptions = name === "Pizza Napoli" && selectedSize === "Mini";
  const hideTropicalOptions = name === "Pizza Tropical" && selectedSize === "Mini";
  const hideFantasiaOptions = name === "Pizza Fantasia" && selectedSize === "Mini";
  const hideCalzone = name === "Pizza Calzone (Fechade)" && selectedSize === "Mini";
  const hideCalzonez = name === "Pizza Calzone (Fechade)" && selectedSize === "Party";
  const hidePizzaEspecial = name === "Pizza Especial" && selectedSize === "Mini";
  const hideIngredients = hideMiniOptions || hideQuatroOptions || hideNapoliOptions || hideTropicalOptions || hideFantasiaOptions || hideCalzone || hideCalzonez || hidePizzaEspecial;


  const addToCart = () => {
    if (!selectedSize) { toast.error("Please select a size"); return; }
    dispatch(AddItem({
      id: `${id}-${selectedSize}`, name: `${name} (${selectedSize})`,
      price: Number(selectedPrice.replace("€", "")), image: image1, qty: 1,
      ingredients: selectedIngredients,
      description: description   // ⭐ ADD THIS LINE
    }));
    toast.success(`${name} added 🛒`);
    setSelectedSize(null); setSelectedIngredients([]); setSelectedPrice("");
  };

  const addKebabToCart = () => {
  // drink sirf WITH COMBO te required hove
  if (comboType === "with" && !selectedDrink) {
    toast.error("Please select a drink 🥤")
    return
  }
  const drinkPrice = selectedDrink ? 2 : 0

  const finalPrice =
    comboType === "with"
      ? Number(comboPrice)          // combo price (drink free)
      : Number(paopitaprice) + drinkPrice   // drink optional

  const cartIngredients =
    isVegitarian ? selectedSaladIngredients : selectedIngredients

  const drinkKey = selectedDrink
    ? selectedDrink.replace(/\s+/g, "_")
    : "no_drink"

  const cartId = `${id}-${comboType}-${drinkKey}`

  dispatch(
    AddItem({
      id: cartId,
      name,
      image: image1,
      price: finalPrice,
      qty: 1,
      comboType,
      drink: selectedDrink || null,
      ingredients: selectedIngredients,
      saladIngredients: selectedSaladIngredients,
      description
    })
  )

  toast.success(`${name} added 🛒`)

  setSelectedDrink("")
  setSelectedIngredients([])
}
  const addSimpleToCart = () => {
    dispatch(AddItem({ id, name, price: Number(paopitaprice), image: image1, qty: 1 }));
    toast.success(`${name} added 🛒`);
  };

  const categoryTag = {
    Pizza: { label: "Pizza", color: "bg-[#c9a84c] text-[#0d0d0d]" },
    Kebab: { label: "Kebab", color: "bg-[#c9a84c] text-[#0d0d0d]" },
    Vegitarian: { label: "Vegan", color: "bg-emerald-600 text-white" },
    Saladas: { label: "Salada", color: "bg-green-700 text-white" },
    Deserts: { label: "Desert", color: "bg-amber-700 text-white" },
    Snacks: { label: "Snack", color: "bg-orange-700 text-white" },
    "Pizza Seekh Kebab": { label: "Seekh Special", color: "bg-red-800 text-white" },
    "Creamy Pizza Catupiry": { label: "Special", color: "bg-purple-800 text-white" },
  }[foodCategory] || { label: foodCategory, color: "bg-[#c9a84c] text-[#0d0d0d]" };

  return (
  <div className="w-[340px] min-h-[650px] bg-[#141414] border border-[#2a2a2a] rounded-sm flex flex-col"
      style={{ scrollbarWidth: "none" }}>

      {/* Image */}
      <div className="w-full h-[200px] min-h-[200px] overflow-hidden flex-shrink-0 relative">
        <img src={image1} alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500 brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 ${categoryTag.color}`}>
          {categoryTag.label}
        </span>
        {foodCategory === "Vegitarian" && (
          <span className="absolute top-3 right-3">
            <LuVegan className="text-emerald-400 w-5 h-5" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">

        {/* Name & Price */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-playfair text-[#f5f0e8] text-lg leading-tight flex-1">{name}</h3>
          {DonerPrice && (
            <span className="text-[#c9a84c] font-semibold text-base whitespace-nowrap flex-shrink-0">
              {DonerPrice}
            </span>
          )}
        </div>

        {/* Kebab / Veg Info */}
        {(isKebab || isVegitarian) && (
          <div className="space-y-1">
            <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">{food_ingri}</p>
            <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{food_newingri}</p>
            {ingredient && <p className="text-[#c9a84c]/70 text-xs">{ingredient}</p>}
            {food_bebita && <p className="text-[#f5f0e8]/40 text-xs">{food_bebita}</p>}
          </div>
        )}

        {/* Pizza ingredient */}
        {isPizza && ingredient && (
          <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{ingredient}</p>
        )}

        {/* Pizza Sizes */}
        {isPizza && (
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] tracking-[2px] uppercase text-[#f5f0e8]/30 border-b border-[#2a2a2a] pb-1">
              <span>Size</span><span>Price</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Minifood && (
                <button onClick={() => { setSelectedSize("Mini"); setSelectedPrice(Minifood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Mini" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Mini · {Minifood}
                </button>
              )}
              {Mediafood && (
                <button onClick={() => { setSelectedSize("Media"); setSelectedPrice(Mediafood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Media" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Média · {Mediafood}
                </button>
              )}
              {Maxifood && foodCategory !== "Pizza Seekh Kebab" && (
                <button onClick={() => { setSelectedSize("Maxi"); setSelectedPrice(Maxifood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Maxi" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Maxi · {Maxifood}
                </button>
              )}
              {Partyfood && foodCategory !== "Pizza Seekh Kebab" && (
                <button onClick={() => { setSelectedSize("Party"); setSelectedPrice(Partyfood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Party" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Party · {Partyfood}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Pizza Ingredients */}
       {selectedSize && !hideIngredients && isPizza && (
  <div className="border border-[#2a2a2a] p-3 space-y-2">
    <h4 className="text-[10px] tracking-[2px] uppercase text-[#040301]">
      {isEspecial
        ? `Choose 4 Ingredients — ${selectedSize}`
        : `Ingredients — ${selectedSize}`}
    </h4>

    {/* Pizza Especial — choose 4 from full list */}
    {isEspecial ? (
      <>
        <p className="text-[#f5f0e8]/30 text-[10px]">
          {selectedIngredients.length}/4 selected
        </p>
        <div className="grid grid-cols-2 gap-1">
          {ESPECIAL_INGREDIENTS.map((item) => (
            <label key={item}
              className={`flex items-center gap-2 text-xs cursor-pointer transition-colors ${
                selectedIngredients.includes(item)
                  ? "text-[#c9a84c]"
                  : "text-[#f5f0e8]/60"
              } ${
                !selectedIngredients.includes(item) && selectedIngredients.length >= 4
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-[#f5f0e8]/90"
              }`}>
              <input
                type="checkbox"
                checked={selectedIngredients.includes(item)}
                onChange={() => {
                  if (selectedIngredients.includes(item)) {
                    toggleIngredient(item);
                  } else if (selectedIngredients.length < 4) {
                    toggleIngredient(item);
                  }
                }}
                className="accent-[#c9a84c] w-3 h-3"
                disabled={!selectedIngredients.includes(item) && selectedIngredients.length >= 4}
              />
              {item}
            </label>
          ))}
        </div>
      </>
    ) : (
      /* Norma Add to Cart {comboType === "with"
  ? `€${Number(comboPrice).toFixed(2)}`
  : selectedDrink
    ? `€${(Number(paopitaprice) + 2).toFixed(2)}`
    : `€${Number(paopitaprice).toFixed(2)} + drink`} pizza ingredients */
      <div className="grid grid-cols-2 gap-1">
        {ingredientsBySize?.[selectedSize]?.map((item) => (
          <label key={item}
            className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer hover:text-[#f5f0e8]/90">
            <input type="checkbox"
              checked={selectedIngredients.includes(item)}
              onChange={() => toggleIngredient(item)}
              className="accent-[#c9a84c] w-3 h-3" />
            {item}
          </label>
        ))}
      </div>
    )}
  </div>
)}
        {/* Pizza Add to Cart */}
        {selectedSize && !hideIngredients && (
          <button onClick={addToCart}
            className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
            Add to Cart — {selectedPrice}
          </button>
        )}

        {/* Saladas Ingredients */}
        {foodCategory === "Saladas" && ingredients?.length > 0 && (
          <div className="border border-[#2a2a2a] p-3 space-y-2">
            <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Ingredients</h4>
            <div className="grid grid-cols-2 gap-1">
              {ingredients.map((ing, i) => (
                <label key={i} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <input type="checkbox" checked={selectedSaladIngredients.includes(ing)}
                    onChange={() => toggleSaladIngredient(ing)}
                    className="accent-[#c9a84c] w-3 h-3" />
                  {ing}
                </label>
              ))}
            </div>
            <button onClick={addSimpleToCart}
              className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300 mt-2">
              Add to Cart — €{Number(paopitaprice).toFixed(2)}
            </button>
          </div>
        )}
        {foodCategory === "Snacks" && chooseFavorite?.length > 0 && (

<div className="border border-[#2a2a2a] p-3 space-y-2">

<h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
Choose Your Favorite
</h4>

{chooseFavorite.map((item,index)=>(

<label
key={index}
className="flex items-center gap-2 text-xs text-[#f5f0e8]/70 cursor-pointer"
>

<input
type="radio"
name={`favorite-${id}`}
className="accent-[#c9a84c]"
/>

{item.name}

<span className="text-[#c9a84c]">
{item.price}
</span>

</label>

))}

</div>

)}
        {/* Deserts / Snacks */}
        {(foodCategory === "Deserts" || foodCategory === "Snacks") && (
          <button onClick={addSimpleToCart}
            className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300 mt-auto">
            Add to Cart — €{Number(paopitaprice).toFixed(2)}
          </button>
        )}

        {/* Kebab Section */}
        {isKebab && (
          <div className="space-y-3">
            {/* Combo */}
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Select Option</h4>
              {["without", "with"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <input type="radio" name={`combo-${id}`} checked={comboType === opt}
                    onChange={() => setComboType(opt)} className="accent-[#c9a84c]" />
                  {opt === "without" ? "Without Combo" : `With Combo — €${Number(comboPrice).toFixed(2)}`}
                </label>
              ))}
        </div>

        {ingredients?.length > 0 && (
        <div className="border border-[#2a2a2a] p-3 space-y-2">
        <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
        INGREDIENTS
        </h4>

        <div className="grid grid-cols-2 gap-1">
        {ingredients.map((item)=>(

          <label
            key={item}
            className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer hover:text-[#f5f0e8]/90"
          >

<input
type="checkbox"
checked={selectedIngredients.includes(item)}
onChange={()=>toggleIngredient(item)}
className="accent-[#c9a84c] w-3 h-3"
/>

{item}

</label>

))}

</div>

</div>

)}
  {saladIngredients?.length > 0 && (

<div className="border border-[#2a2a2a] p-3 space-y-2">

<h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
SALADA
</h4>

<div className="grid grid-cols-2 gap-1">

{saladIngredients.map((item)=>(

<label
key={item}
className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer hover:text-[#f5f0e8]/90"
>

<input
type="checkbox"
checked={selectedSaladIngredients.includes(item)}
onChange={()=>toggleSaladIngredient(item)}
className="accent-[#c9a84c] w-3 h-3"
/>

{item}

</label>

))}

</div>

</div>

)}

            {/* Drinks */}
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
                {comboType === "with" ? "Select Drink" : "Select Drink"}
              </h4>
              {drinks.map((drink) => (
                <label key={drink.name} className="flex justify-between items-center text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="radio" name={`drink-${id}`} checked={selectedDrink === drink.name}
                      onChange={() => setSelectedDrink(drink.name)} className="accent-[#c9a84c]" />
                    {drink.name}
                  </div>
                  {comboType === "without" && <span className="text-[#c9a84c]">€{drink.price}</span>}
                </label>
              ))}
            </div>

            {/* Description */}
            <textarea className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8]/70 text-xs p-3 outline-none resize-none h-16 placeholder-[#f5f0e8]/20"
              placeholder="Add special instructions (optional)..."
              value={description} onChange={(e) => setDescription(e.target.value)} />
            {/* Add to Cart */}
           <button
           onClick={addKebabToCart}
           className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300"
>
  Add to Cart — €{
    comboType === "with"
      ? Number(comboPrice || 0).toFixed(2)
      : (Number(paopitaprice) + (selectedDrink ? 2 : 0)).toFixed(2)
  }
    </button>
          </div>
        )}

        {/* Vegetarian Section */}
        {isVegitarian && (
          <div className="space-y-3">
            {ingredients?.length > 0 && (
              <div className="border border-[#2a2a2a] p-3 space-y-2">
                <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Ingredients</h4>
                <div className="grid grid-cols-2 gap-1">
                  {ingredients.map((ing, i) => (
                    <label key={i} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                      <input type="checkbox" checked={selectedSaladIngredients.includes(ing)}
                        onChange={() => toggleSaladIngredient(ing)} className="accent-[#c9a84c] w-3 h-3" />
                      {ing}
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Select Option</h4>
              {["without", "with"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <input type="radio" name={`veg-combo-${id}`} checked={comboType === opt}
                    onChange={() => setComboType(opt)} className="accent-[#c9a84c]" />
                  {opt === "without" ? "Without Combo" : `With Combo — €${Number(comboPrice).toFixed(2)}`}
                </label>
              ))}
            </div>
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
                {comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
              </h4>
              {drinks.map((drink) => (
                <label key={drink.name} className="flex justify-between items-center text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="radio" name={`veg-drink-${id}`} checked={selectedDrink === drink.name}
                      onChange={() => setSelectedDrink(drink.name)} className="accent-[#c9a84c]" />
                    {drink.name}
                  </div>
                  {comboType === "without" && <span className="text-[#c9a84c]">€{drink.price}</span>}
                </label>
              ))}
            </div>
            <textarea className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8]/70 text-xs p-3 outline-none resize-none h-16 placeholder-[#f5f0e8]/20"
              placeholder="Add special instructions (optional)..."
              value={description} onChange={(e) => setDescription(e.target.value)} />

            <button onClick={addKebabToCart}
              className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
             Add to Cart €{ comboType === "with"
               ? Number(comboPrice).toFixed(2)
              : (Number(paopitaprice) + (selectedDrink ? 2 : 0)).toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

