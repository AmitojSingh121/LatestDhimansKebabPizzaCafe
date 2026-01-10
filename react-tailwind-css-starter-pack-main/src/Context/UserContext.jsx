import React, {createContext , useState} from 'react'
import {food_items} from '../Foods'
export const dataContext = createContext()
function UserContext({children}) {
     let[cate , setCate] = useState(food_items)
    //  UseState 
    let [input , setInput] = useState("")
    // 1st Step is This 
    let data = {
        input , setInput , cate , setCate
    }
  return (

        <div>
            {/*jehra upar data context banaya ha oh sare children nuh data provide karega */}
            <dataContext.Provider value={data}>
            {children}
            </dataContext.Provider>
       </div>
  )
}

export default UserContext
