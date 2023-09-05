import {UserService} from "../services/UserService";
import {useState} from "react";
import {FortunaService} from "../services/FortunaService";
import {useRouter} from "next/router";


const index=()=>{


    const [pen,setPen]=useState("")
    const [url,setUrl]=useState("")


        const router=useRouter();

    return <>
        test<br/>
        <button onClick={()=>setPen(prevState => prevState+"=")}>powiększ</button>
        <br/>
    3={pen}D
        <br/>
        <input type={"text"} style={{width:'100vw',height:'30px',fontSize:"20px"}} onChange={(e)=>setUrl(prevState => e.target.value)}/>
        <button onClick={()=>router.push(`/kupon/${url.slice(url.indexOf("=")+1)}`)}>Sprawdź</button>
    </>
}

export default index


