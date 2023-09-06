import {UserService} from "../services/UserService";
import {useState} from "react";
import {FortunaService} from "../services/FortunaService";
import {useRouter} from "next/router";
import 'tailwindcss/tailwind.css'

export const Find=()=>{


    const [url,setUrl]=useState("")


    const router=useRouter();

    return <>
        <div className={"w-1/2 px-3"}>
            <input type={"text"} className={"w-full h-14 mt-2 text-2xl border-blue-gray-200 border-2"} onChange={(e)=>setUrl(prevState => e.target.value)}/>
            <button className={"bg-bermuda border-2 mt-2 p-2 rounded-md"} onClick={()=>url.length>0&&router.push(`/kupon/${url.slice(url.indexOf("=")+1)}`)}>Sprawdź</button>
            <button className={"bg-bermuda border-2 ml-2 mt-2 p-2 rounded-md"} onClick={()=>setUrl("")}>Wyczyść</button>
        </div>
    </>
}
