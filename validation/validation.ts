import {ITraining} from "../interfaces/Training";

export abstract class Validation{

    static addTraining(training:ITraining)
    {
        return (
           (
               (training.name?training.name.length>0:false)&&
               (training.Userid?training.Userid.length>0:false)&&
               (training.date?training.date.match('^([0-9]{2})-([0-9]{2})-([0-9]{4})$'):false)&&
               (training.week?training.week.length>0:false)&&
               (training.comment?training.comment.length>=0:false)
            )
        )
    }
}