import { NextApiRequest, NextApiResponse } from "next";
import {UserService} from "../../services/UserService";
import prisma from "../../prisma/prisma";



const hello = async (req: NextApiRequest, res: NextApiResponse) => {

  res.send("hello")


};

export default hello;
