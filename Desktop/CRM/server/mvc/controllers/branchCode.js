const branchCodeModelCtrl=require('../models/branchCodeModel')

async function branchCodeRegistrationController(req,res){
    console.log(req.body)
    let branchCodeData=branchCodeModelCtrl.branchCodeModel
    ({
        branchName:req.body.branchName,
        branchCode:req.body.branchCode
    })
    // console.log(branchCode_data)
    branchCodeModelCtrl.branchCodeModel.find({ branchName:req.body.branchName,     branchCode:req.body.branchCode }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            branchCodeData.save((err, branchCode) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("request sent")
                }
            })
        }
    })
}

async function branchCodeDataFetching(req,res){
    branchCodeModelCtrl.branchCodeModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


module.exports={ branchCodeRegistrationController , branchCodeDataFetching }