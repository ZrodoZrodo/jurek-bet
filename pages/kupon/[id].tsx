import 'tailwindcss/tailwind.css'
import {ReactChild, ReactFragment, ReactPortal, useState} from "react";
import {FortunaService} from "../../services/FortunaService";
import {useRouter} from "next/router";
import {Find} from "../../components/find";


// @ts-ignore
const index = ({data}) => {




    const handleSubmit=()=>{

    }

    const router = useRouter()
    if(data.status==404)
    {
        router.push('/')
        return
    }
    return <>
        <div className={"flex flex-row"}>
            <Find/>
            <div className={"w-1/2 px-3 mt-4 space-y-2"}>
                {data.legs.map((leg: { result: string; fixtureName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; marketName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; oddsPlaced: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; marketOutcomeResult: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; selectionName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; } )=>
                        <div className={"space-y-2"} style={{background:`${leg.result==="WINNING"?"green":leg.result==="UNKNOWN"?"":leg.result==="VOIDED"?"orange":"red"}`}}>
                        <span>
                   <p> mecz : {leg.fixtureName}</p>  zakład : {leg.marketName} <br/> kurs : {leg.oddsPlaced}  <br/> wynik : {leg.marketOutcomeResult}<br/> typ : {leg.selectionName}

                </span>

                        </div>

                )
                }
                <hr/> kurs całkowity : {data.oddsTotal} <br/> stawka : {data.placementDetailsPaid} zł <br/>  EWK : {data.potentialWinning} zł<br/>
                {data.result!=="PREPARED"&&<span>bilans: {(data.potentialWinning*(data.result=="WINNING"?1:0)-data.placementDetailsPaid)} zł</span>}
                <button className={"bg-bermuda border-2 mt-2 p-2 rounded-md"} onClick={handleSubmit}>Obstaw</button>
            </div>
        </div>

    </>
}

export default index

export const getServerSideProps = async (context: { params: { id: string; }; }) => {

    console.log(context.params.id)
    const data=await FortunaService.checkId(context.params.id as string)

    return { props: { data } }
}
