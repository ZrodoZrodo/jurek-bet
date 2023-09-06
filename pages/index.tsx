import {UserService} from "../services/UserService";
import {useState} from "react";
import {FortunaService} from "../services/FortunaService";
import {useRouter} from "next/router";
import 'tailwindcss/tailwind.css'
import {Find} from "../components/find";

const index=()=>{



    return <>

        <br/>
        <div className={"flex-row"}>

                <Find/>

            <div className={"w-1/2"}>

            </div>
        </div>
    </>
}

export default index


