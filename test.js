
const fs = require('fs');

const content = 'Some content!';


fetch('https://api.efortuna.pl/betslip-history/detail?id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOTkwMTMyNDc0MTc1NzAwIiwicHJmIjoiUFVCTElDIn0.xgQqITNPU8Uu_R9cqB2cWz_8Y4_WV6Uq-DpfLe5Zym4&source=SB')
    .then(x=>x.json())
    .then(x=> console.log(` ${x.legs.map(leg=>`mecz : ${leg.fixtureName}\n zakład : ${leg.marketName} \n kurs : ${leg.oddsPlaced} \n rezultat : ${leg.result} \n wynik : ${leg.marketOutcomeResult}  \n \n \n`)} \n kurs całkowity : ${x.oddsTotal} \n stawka : ${x.placementDetailsPaid} \n EWK : ${x.potentialWinning}`))


