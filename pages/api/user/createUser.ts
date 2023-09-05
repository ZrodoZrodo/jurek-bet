import { NextApiRequest, NextApiResponse } from "next";

import {Validation} from "../../../validation/validation";




const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
res.json(req.body)

}

export default createUser;