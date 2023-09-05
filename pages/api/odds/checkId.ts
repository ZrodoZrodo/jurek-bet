import { NextApiRequest, NextApiResponse } from "next";
import {FortunaService} from "../../../services/FortunaService";






const checkId = async (req: NextApiRequest, res: NextApiResponse) => {

    res.json(await FortunaService.checkId("a"))

}

export default checkId;