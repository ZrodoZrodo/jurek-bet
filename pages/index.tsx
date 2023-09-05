import {UserService} from "../services/UserService";
import {useState} from "react";

const index=()=>{

    const [pen,setPen]=useState("")

    return <>
test<br/>
        <button onClick={()=>setPen(prevState => prevState+"=")}>powiększ</button>
        <br/>
    3={pen}D
    </>
}

export default index


