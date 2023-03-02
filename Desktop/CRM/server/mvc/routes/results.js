const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const resultDetail = require('../controllers/result')

routes.post('/reg', resultDetail.resultRegistrationController)
routes.get('/reg', resultDetail.resultDataFetching)

module.exports = routes