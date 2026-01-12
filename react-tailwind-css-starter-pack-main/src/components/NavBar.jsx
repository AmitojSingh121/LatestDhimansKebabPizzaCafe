import React ,  {useContext  , useEffect} from "react";
import DhimansLogoimg from "../assests/DhimansLogoimg.webp";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { dataContext } from "../Context/UserContext";
import {food_items} from '../Foods'

function NavBar({  }) {
  let {input, setInput , setCate , showCart , setShowCart} = useContext(dataContext)

    // 🔥 SEARCH FILTER

  useEffect(() =>{
    const newlist =  food_items.filter((item)=>item.food_name.includes(input) ||item.food_name.toLowerCase().includes(input))
    setCate(newlist)
  } , [input])

  return (

    // NavBar component code
    <div className="w-full h-[100px] justify-between items-center flex  bg-gray-200 px-5 md:px-8">

       <div className="flex justify-between items-center  p-4">
          {/* 1st way to load the image in React Js  */}
        <a href="index">
         <img 
          src={DhimansLogoimg}   
          alt="Dhiman's Kebab & Pizza Logo"
          className="w-24"/>
        </a>
       </div>

        {/* 2nd is Search Bar */}
        <form className="w-[40%] h-[60px] flex items-center px-5 gap-5 rounded-md md:w-[70%]" onSubmit={(e)=>e.preventDefault()}>
              <IoSearch className="w-[20px] h-[20px] text-yellow-400 "></IoSearch>
              <input type="text" placeholder=" Encontre seu sabor favorito..." className="mt-4 p-2 w-[100%] rounded-md border border-gray-300 outline-none text-[16px] md:text-[20px]" onChange={(e)=> setInput(e.target.value) } value={input}></input>
         </form>
         
         {/* 3rd is Shopping Cart */}
         <div className="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-full shadow-xl relative" onClick={()=>{
          setShowCart(true)
         }}>
            <span className="absolute top-0 right-2 text-yellow-400 font-bold">0</span>
            <LuShoppingCart className="w-[20px] h-[20px] text-yellow-500"></LuShoppingCart>
         </div>         
    </div>
  );  
}

export default NavBar;




