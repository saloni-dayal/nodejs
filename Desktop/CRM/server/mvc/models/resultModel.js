const db=require('./conn').db
const mongoose=require('./conn').mongoose

const resultSchema=mongoose.Schema({
    rollNumber:{
        type:String
    },
    studentName:{
        type:String
    },
    semester:
    {
        type:Number
    },
    subjects:
    {
        subjectCode:
        {
            type:String
        },
        subjectName:
        {
            type:String
        },
        attempts:
        {
            type:Number
        },
        grade:
        {
            type:String
        },
        credits:
        {
            type:Number
        },
        status:
        {
            type:String
        }
    }
})

let resultModel=mongoose.model('results',resultSchema)
module.exports={ resultModel }