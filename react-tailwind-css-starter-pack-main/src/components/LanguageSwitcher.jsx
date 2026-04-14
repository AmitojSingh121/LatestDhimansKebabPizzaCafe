import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher(){

const { i18n } = useTranslation();

const [open,setOpen]=useState(false);

const languages = [
{code:"en",name:"English"},
{code:"pt",name:"Português"},
];

return(

<div className="relative mt-4">

<button
onClick={()=>setOpen(!open)}
className="border border-[#c9a84c]/40 px-4 py-2 text-sm text-[#c9a84c] hover:bg-[#c9a84c]/10 rounded"
>
🌍 Language
</button>

{open && (

<div className="absolute bottom-12 left-0 bg-[#111] border border-[#333] rounded shadow-lg w-40">

{languages.map(lang=>(

<div
key={lang.code}
onClick={()=>{
i18n.changeLanguage(lang.code);
setOpen(false);
}}

className="px-4 py-2 text-sm text-white hover:bg-[#c9a84c]/20 cursor-pointer"
>

{lang.name}

</div>

))}

</div>

)}

</div>

);

}

export default LanguageSwitcher;