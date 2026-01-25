import NavBar from "../components/NavBar"
import Categories from "../Categories"
import Card from "../components/Card"
import { useContext } from "react"
import { dataContext } from "../Context/UserContext"
import { food_items } from "../Foods"
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2"
import { useSelector } from "react-redux"

function Home() {

const { cate, setCate , input , showCart , setShowCart} = useContext(dataContext)

  function filterCategory(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      const filtered = food_items.filter(
        item => item.food_category === category
      )
      setCate(filtered)
    }
  }
  // Joh Yeh Item Hamne Liya Ha Selector Seh 
  let items = useSelector(state=>state.cart)
 let subtotal = items.reduce((total, item) => {
  const price = parseFloat(
    typeof item.price === "string"
      ? item.price.replace("€", "")
      : item.price
  );
  const qty = item.qty|| 1;
  return total + price * qty;
}, 0);

let total = subtotal;

  return (
    <div className="bg-black min-h-screen">

      <NavBar />

      {/* CATEGORIES */}
     {!input?<div className="flex flex-wrap justify-center gap-5 p-5">
        {Categories.map(item => (
          <div
            key={item.id}
            onClick={() => filterCategory(item.name)}
            className="bg-white min-w-[110px] flex flex-col p-3 rounded-xl cursor-pointer   hover:bg-yellow-400 transition-all duration-300"
          >
            {item.image}
            {item.name}
          </div>
        ))}
      </div>:null}

      {/* CARDS */}
     <div className="flex flex-wrap justify-center gap-5 p-5">
  {Array.isArray(cate) && cate.length > 0 ? (
    cate.map(item => (
      <Card key={item.id} id={item.id} name={item.food_name} ingredient={item.food_ingredient} image1={item.food_image} sizes={item.food_sizes} Prices={item.food_prices} Mini={item.food_MiniPrice} Media={item.food_MediaPrice} Maxi={item.food_MaxiPrice} Party={item.food_PartyPrice} Minifood={item.myMiniFood_price} Mediafood={item["myMediaFood_price "]} Maxifood={item.myMaxiFood_price} Partyfood={item.myPartyFood_price} bebita={item.food_bebita} ingri={item.food_ingri} newingri={item.food_newingri} paopita={item.paopitaprice}
      
// Eh Button Top Vala Ha 
 Showbuttonn={item.food_category === "Pizza"} buttonn={item.buttonn} 
 
// Eh Button Mini , Maxi , Media , Party laye use kar reha ha 
 showPriceButtons={item.food_category === "Pizza"}  bttn={item.btn} >
  
 </Card>
    ))
  ) : (
    <p className="text-white text-xl">No items found</p>
  )}
</div>
 
  {/* Side Bar  Add To Card Section */}
   <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 overflow-auto | ${showCart ? "translate-x-0" : "translate-x-full"}`} >
      <header className="w-[100%] flex justify-between items-center">
         <span className="text-yellow-400 text-[18px] font-semibold">Order Items</span>
          <RxCross2  className="text-yellow-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-gray-700" onClick={()=>setShowCart(false)}/>
      </header>

      {/* Cart Meh Joh Order Items Keh Niche dikh Raha Ha SubTotal and Total uskeh niche 
      Empty Item Dikhana Ha  */}

      {/* We Create the Items Length  */}

      {items.length > 0?
  <>
     <div className="w-full mt-9 flex flex-col gap-8">
      {items.map((item)=>(
          <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
      ))}
      </div>

      {/* Price in Order Item Subtotal all these Things */}
      <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col items-center gap-4 p-2" >
      <div className="w-full flex justify-between items-center">
         <span className="text-2xl font-semibold">Subtotal</span>
         <span className="text-yellow-500 font-bold text-2xl">€{subtotal.toFixed(2)}
        </span>
      </div>
      </div>
   
   <div> 
    <div className="w-full flex justify-between items-center p-4">
         <span className="text-2xl font-semibold ">Total</span>
         <span className="text-yellow-500 font-bold text-2xl">€{total.toFixed(2)}
         </span>
    </div>
   </div>

     {/* This is the Place Order Wala Button */}
    <button className="w-full p-3 rounded-lg bg-yellow-300 text-white hover:bg-yellow-500 transition-all">Place Order</button>
</>
  :
   <div className="flex justify-center items-center  font-bold font-serif md:font-extralight text-2xl text-yellow-400 pt-5">
       Empty Cart
    </div>}

</div>
   
</div>

  )

}

export default Home
