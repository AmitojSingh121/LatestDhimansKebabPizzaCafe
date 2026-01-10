import NavBar from "../components/NavBar"
import Categories from "../Categories"
import Card from "../components/Card"
import { useContext } from "react"
import { dataContext } from "../Context/UserContext"
import { food_items } from "../Foods"

function Home() {

  const { cate, setCate , input} = useContext(dataContext)

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
      <Card key={item.id} name={item.food_name} ingredient={item.food_ingredient} image1={item.food_image} sizes={item.food_sizes} Prices={item.food_prices} Mini={item.food_MiniPrice} Media={item.food_MediaPrice} Maxi={item.food_MaxiPrice} Party={item.food_PartyPrice} Minifood={item.myMiniFood_price} Mediafood={item["myMediaFood_price "]} Maxifood={item.myMaxiFood_price} Partyfood={item.myPartyFood_price} bebita={item.food_bebita} ingri={item.food_ingri} newingri={item.food_newingri} paopita={item.paopitaprice} bttn={item.btn}   showSizes={item.food_category === "Kebab"} Showbuttonn={item.food_category === "Pizza"} buttonn={item.buttonn}></Card>

    ))
  ) : (
    <p className="text-white text-xl">No items found</p>
  )}
</div>

    </div>
  )
}

export default Home
