import { NextApiRequest, NextApiResponse } from "next";
import {UserService} from "../../services/UserService";
import {TrainingService} from "../../services/TrainingService";
import prisma from "../../prisma/prisma";



const hello = async (req: NextApiRequest, res: NextApiResponse) => {
//test id usera 64b6d657ea09d0d4b5f1c2ff
   //res.json(await UserService.addUser({email:"string",name:"string",password:"string",nick:"string"}))

  // res.json(await TrainingService.addExercise({id:"64b6d657ea09d0d4b5f1c2ff",name:"Przysiad",comment:"lubie lubie"}))
  res.send("hello")
  // res.json(await prisma.user.findFirst({
  //   where:{id:"64b6d657ea09d0d4b5f1c2ff"},
  //   select:{
  //     exercise:{
  //       select:{
  //         name:true,
  //         weeks:true
  //       }
  //     }
  //   }
  // }))
  // res.json(await TrainingService.addTraining(
  //     {
  //       name:"trening2",
  //       Userid:"64b6d657ea09d0d4b5f1c2ff",
  //       date:"28-12-1999",
  //       week:[
  //         {
  //           exerciseId:"64b6dbc1ea09d0d4b5f1c303",
  //           date:"26-12-1999",
  //           numberOfSeries:23,
  //           numberOfReplication:33,
  //           weight:132,
  //             comment:"siadłem normlanie poraz drugi"
  //         },
  //         {
  //           exerciseId:"64b6dbcbea09d0d4b5f1c304",
  //           date:"26-12-1999",
  //           numberOfSeries:43,
  //           numberOfReplication:53,
  //           weight:1311,
  //             comment:"nie wiem co pisać xxddddd poraz trzeci"
  //         },
  //       ],
  //       comment:"bul ucha lewego części górnej"
  //     }
  //     ))




  //  res.json(await prisma.user.findFirst({
  //    where:{id:"64b6d657ea09d0d4b5f1c2ff"},
  //    select:{
  //       trainings: {
  //
  //         select:{
  //           name:true,
  //           exercises:{
  //             select: {
  //               name:true,
  //               weeks:true,
  //             }
  //
  //           }
  //         }
  //       }
  //    }
  // }))
  // res.json(await prisma.training.findFirst({
  //   where:{id:"64b6dbf2ea09d0d4b5f1c305"},
  //   select:{
  //     exercises:{
  //       select:{
  //         name:true,
  //         weeks:{
  //           select: {
  //             date:true
  //           }
  //         }
  //       }
  //     }
  //   }
  // }))


};

export default hello;
