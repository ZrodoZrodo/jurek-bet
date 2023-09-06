import prisma from "../prisma/prisma";
import bcrypt from "bcrypt"
export abstract class FortunaService {

    public static async checkId(id:string)
    {

        const data=await fetch(`https://api.efortuna.pl/betslip-history/detail?id=${id}`)
        return await data.json();
    }


}