const resultModelCtrl=require('../models/resultModel')

async function resultRegistrationController(req,res){
    console.log(req.body)
    let resultData=resultModelCtrl.resultModel
    ({
        rollNumber:req.body.rollNumber,
        studentName:req.body.studentName,
        semester:req.body.semester,
        subjectCode:req.body.subjects.subjectCode,
        subjectName:req.body.subjects.subjectName,
        attempts:req.body.subjects.attempts,
        grade:req.body.subjects.grade,
        credits:req.body.subjects.credits,
        status:req.body.subjects.status
    })
    // console.log(result_data)
    resultModelCtrl.resultModel.find({ rollNumber:req.body.rollNumber, studentName:req.body.studentName }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            resultData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("result request sent")
                }
            })
        }
    })
}

async function resultDataFetching(req,res){
    resultModelCtrl.resultModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


module.exports={ resultRegistrationController , resultDataFetching }