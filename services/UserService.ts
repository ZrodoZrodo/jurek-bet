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

    public static async getTrainings({id}:{id:string})
    {
        return await prisma.user.findFirst({
            where:{id},
            select:{
                trainings:{
                    select:{
                        exercises:true,
                        date:true,
                        comment:true
                    }
                }
            }
        })

    }

    public static async getSavedTrainings(id:string)
    {
        return prisma.user.findFirst({
            where:{id},
            select:{
                savedTrainings:true
            }
        })
    }



}