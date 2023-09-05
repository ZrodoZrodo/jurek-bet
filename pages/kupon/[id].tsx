
import {ReactChild, ReactFragment, ReactPortal, useState} from "react";
import {FortunaService} from "../../services/FortunaService";
import {useRouter} from "next/router";

// @ts-ignore
const index = ({data}) => {


    const [pen, setPen] = useState("")
    const [url, setUrl] = useState("")
    console.log(data)

    const router = useRouter()
    if(data.status==404)
    {
        router.push('/')
        return
    }
    return <>
        test<br/>
        <button onClick={() => setPen(prevState => prevState + "=")}>powiększ</button>
        <br/>
        3={pen}D
        <br/>
        <input type={"text"} style={{width:'100vw',height:'30px',fontSize:"20px"}}  onChange={(e) => setUrl(prevState => e.target.value)}/>
        <button onClick={() => router.push(`/kupon/${url.slice(url.indexOf("=") + 1)}`)}>Sprawdź</button>
        {data.legs.map((leg: { result: string; fixtureName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; marketName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; oddsPlaced: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; marketOutcomeResult: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; })=>
            <span style={{background:`${leg.result=="WINNING"?"green":leg.result==="UNKNOWN"?"":"red"}`}}>
               <p> mecz : {leg.fixtureName}</p>  zakład : {leg.marketName} <br/> kurs : {leg.oddsPlaced}  <br/> wynik : {leg.marketOutcomeResult}
            </span>
        )
        }
        <hr/> kurs całkowity : {data.oddsTotal} <br/> stawka : {data.placementDetailsPaid} zł <br/>  EWK : {data.potentialWinning} zł<br/>
        bilans: {data.potentialWinning-data.placementDetailsPaid} zł

    </>
}

export default index

export const getServerSideProps = async (context: { params: { id: string; }; }) => {

    const data=await FortunaService.checkId(context.params.id as string)

    return { props: { data } }
}
