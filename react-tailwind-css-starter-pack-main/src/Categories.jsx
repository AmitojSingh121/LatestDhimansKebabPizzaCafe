import { TiThSmall } from "react-icons/ti";
import { GiFullPizza } from "react-icons/gi";
import { GiDonerKebab } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { LuVegan } from "react-icons/lu";
import { FaCookieBite } from "react-icons/fa";
import { GiFrenchFries} from "react-icons/gi";
import { GiKebabSpit } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";

const Categories =[
    {
        id:1,
        name:"All",
        image: <TiThSmall />
    },

    {
        id:2,
        name:"Pizza",
        image: <GiFullPizza />
    },

    {
        id:3,
        name:"Kebab",
        image: <GiDonerKebab /> 
    },

    {
        id:4,
        name:"Desserts",
        image: <LuSalad />
    },

    {
        id:5,
        name:"Vegitarian",
        image:<LuVegan/>
    },

    {
        id:6,
        name:"Deserts",
        image:<FaCookieBite/>
    },

    {
        id:7,
        name:"Snacks",
        image:<GiFrenchFries/>
    },

    {
        id:8,
        name:"Pizza Seekh Kebab",
        image:<GiKebabSpit/>
        
    },

    {
        id:9,
        name:"Creamy Pizza Catupiry",
        image:<FaPizzaSlice/>
    }
]

export default Categories;