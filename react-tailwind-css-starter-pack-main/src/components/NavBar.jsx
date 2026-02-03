import React ,  {useContext  , useEffect} from "react";
import DhimansLogoimg from "../assests/DhimansLogoimg.webp";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { dataContext } from "../Context/UserContext";
import {food_items} from '../Foods'
import { useSelector } from "react-redux";

function NavBar({  }) {
  let {input, setInput , setCate , showCart , setShowCart} = useContext(dataContext)

    // 🔥 SEARCH FILTER

  useEffect(() =>{
    const newlist =  food_items.filter((item)=>item.food_name.includes(input) ||item.food_name.toLowerCase().includes(input))
    setCate(newlist)
  } , [input])

  let items = useSelector(state=>state.cart)
  console.log(items)

  return (

    // NavBar component code
    <div className="w-full h-[80px] justify-between items-center flex  bg-gray-200 px-5 md:px-8 gap-3">

       <div className="flex justify-between items-center  p-4">
          {/* 1st way to load the image in React Js  */}
        <a href="index">
         <img 
          src={DhimansLogoimg}   
          alt="Dhiman's Kebab & Pizza Logo"
          className="w-20 md:w-24"/>
        </a>
       </div>

        {/* 2nd is Search Bar */}
        <form className="flex items-center bg-white rounded-md px-3 gap-2 w-full max-w-[500px]" onSubmit={(e)=>e.preventDefault()}>
              <IoSearch className="w-5 h-5 text-yellow-400 "></IoSearch>
              <input type="text" placeholder=" Encontre seu sabor favorito..."
               className="w-full p-2 border
                border-gray-300
               outline-none
               text-sm
               md:text-base" 
                value={input}
               onChange={(e)=> setInput(e.target.value) }></input>
         </form>
         
         {/* 3rd is Shopping Cart */}
         <div className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-full shadow-xl relative" onClick={()=>{
          setShowCart(true)
         }}>
            <span className="absolute top-1 right-1 text-xs bg-yellow-400 text-black
            font-bold w-5 h-5 flex items-center justify-center rounded-full">{items.length}</span>
            <LuShoppingCart className="w-5 h-5 text-yellow-500"></LuShoppingCart>
         </div>         
    </div>
  );  
}

export default NavBar;




