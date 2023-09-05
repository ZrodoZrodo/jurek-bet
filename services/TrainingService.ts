import {IAddExercise, ITraining} from "../interfaces/Training";
import prisma from "../prisma/prisma";
export abstract class TrainingService {


    public static async addExercise({name, comment,id}:IAddExercise)
    {
        try{
            return await prisma.exercises.create({
                data:{
                    name,
                    comment,
                    User:{
                        connect:{id}
                    }
                }
            })
        }catch (e)
        {
            return e
        }
    }


    public static async addSavedTraining({name,exercises,userId,description}:{name:string,exercises:string[],userId:string,description:string}){
        return await prisma.savedTrainings.create({
            data:{
                name,
                description,
                User:{
                    connect:{id:userId}
                },
                exercises:{
                    connect: exercises.map((ex) => ({id: ex})),
                }
            }
        })
    }

    public static async addTraining(training:ITraining ) {
        try {
            for (const ex of training.week) {

                    await prisma.week.create({
                        data: {
                            date: ex.date,
                            numberOfSeries: ex.numberOfSeries,
                            numberOfReplication: ex.numberOfReplication,
                            weight: ex.weight,
                            comment: ex.comment,
                            Exercises: {
                                connect: { id: ex.exerciseId },
                            },
                        },
                    });
            }



            return await prisma.training.create({
                data:{
                    name:training.name,
                    date:training.date,
                    exercises:{
                        connect: training.week.map((ex) => ({id: ex.exerciseId})),
                    },
                    User: {
                        connect: {id:training.Userid}
                    },

                }
            });
        }catch(e)
        {
            console.log(e)
        }
    }


    /*
    json must be like this
    {
        "id":"64b424649c79afa7537d8393",
        "exercise":{
            "name": "test",
            "numberOfSeries": 222,
            "numberOfReplication": 3,
            "weight": 90
        }
    }
     */

}