import prisma from "../prisma/prisma";
import bcrypt from "bcrypt"
export abstract class UserService {

    public static async addUser({password,nick}:{email:string,name:string,password:string,nick:string|undefined})
    {
        const passwd=await bcrypt.hash(password,12)
        return prisma.user.create({
            data: {
                password:passwd,
                nick
            }
        })
    }







}