import prisma from "../prisma/prisma";
import bcrypt from "bcrypt"
export abstract class UserService {

    public static async addUser({email,name,password,nick}:{email:string,name:string,password:string,nick:string|undefined})
    {
        const passwd=await bcrypt.hash(password,12)
        return prisma.user.create({
            data: {
                email,
                name,
                password:passwd,
                nick
            }
        })
    }


    public static async getUser(email:string)
    {
        return prisma.user.findFirst({
            where:{
                email
            },
            select:{
                email:true,
                name: true,
                nick: true
            }
        })
    }





}