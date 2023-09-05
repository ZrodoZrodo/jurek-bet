import { NextApiRequest, NextApiResponse } from "next";
import {TrainingService} from "../../../services/TrainingService";
import {Validation} from "../../../validation/validation";




const createTraining = async (req: NextApiRequest, res: NextApiResponse) => {

    Validation.addTraining(req.body)?res.json({message:"przeszło walidacje"}):res.json({message:"nie przeszło"})

    //res.json(await TrainingService.addTraining(req.body))
}

export default createTraining;