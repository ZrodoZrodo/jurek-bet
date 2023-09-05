import {UserService} from "../services/UserService";
import {useState} from "react";

const index=(props:{email:string,name:string,nick:string})=>{
    console.log(props)
    const [array,setArray]=useState<string[]>([])
    const [date,setDate]=useState<string>("")
    return <>
        {props.email}<br/>
        {props.name}<br/>
        {props.nick}
        <button onClick={()=>setArray(prevState => [...prevState,"a"])}>dodaj</button>
        {array.map(x=><p>{x}</p>)}
        <input type={"date"} onChange={(e)=>setDate(e.target.value)}/>
        {date}
    </>
}

export default index


export const getServerSideProps = async () => {
    return {props:UserService.getUser('string')}
}