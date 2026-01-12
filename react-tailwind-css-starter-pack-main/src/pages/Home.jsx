import NavBar from "../components/NavBar"
import Categories from "../Categories"
import Card from "../components/Card"
import { useContext } from "react"
import { dataContext } from "../Context/UserContext"
import { food_items } from "../Foods"
import { RxCross2 } from "react-icons/rx";



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

  return (
    <div className="bg-black min-h-screen">

      <NavBar />

      {/* CATEGORIES */}
     {!input?<div className="flex flex-wrap justify-center gap-5 p-5">
        {Categories.map(item => (
          <div
            key={item.name}
            onClick={() => filterCategory(item.name)}
            className="bg-white w-[200px] h-[150px] p-5 rounded-lg cursor-pointer hover:bg-yellow-400  hover:transition-all duration-300"
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
      <Card key={item.id} name={item.food_name} ingredient={item.food_ingredient} image1={item.food_image} sizes={item.food_sizes} Prices={item.food_prices} Mini={item.food_MiniPrice} Media={item.food_MediaPrice} Maxi={item.food_MaxiPrice} Party={item.food_PartyPrice} Minifood={item.myMiniFood_price} Mediafood={item["myMediaFood_price "]} Maxifood={item.myMaxiFood_price} Partyfood={item.myPartyFood_price} bebita={item.food_bebita} ingri={item.food_ingri} newingri={item.food_newingri} paopita={item.paopitaprice}
      
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
   <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 | ${showCart ? "translate-x-0" : "translate-x-full"}`} >
      <header className="w-[100%] flex justify-between items-center">
         <span className="text-yellow-400 text-[18px] font-semibold">Order Items</span>
          <RxCross2  className="text-yellow-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-gray-700" onClick={()=>setShowCart(false)}/>
      </header>
   </div>

    </div>

  )

}

export default Home
