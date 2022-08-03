import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// import Routes from './routes/Routes.js';
import mongoose from 'mongoose'
import DefaultData from './Default.js';
import Routes from "./routes/routes.js"


dotenv.config();
const app = express();

const PORT = 8000||process.env.PORT ;

const username=process.env.MONGO_USERNAME
const password=process.env.MONGO_PASSWORD 


// export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTM_MID,
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
// paytmParams['ORDER_ID'] = uuid(),
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
// paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
// paytmParams['EMAIL'] = 'codeforinterview01@gmail.com'
// paytmParams['MOBILE_NO'] = '1234567852'



const mongo_url=`mongodb+srv://subhambhowmik:baikhora123@cluster0.qorby.mongodb.net/ecomerce-database?retryWrites=true&w=majority`
// const url1=`mongodb+srv://czsubham:baikhora123@cluster0.odqtm.mongodb.net/ecommerce?retryWrites=true&w=majority`;
//mongodb+srv://czsubham:<password>@cluster0.odqtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect( process.env.MONGODB_URI||mongo_url,{
    useNewUrlParser: true, useUnifiedTopology: true
}) ;
const db=mongoose.connection;
db.once('open',()=>{
    console.log('DB is established');
})


if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'))
}



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.listen(process.env.PORT || PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

app.use('/', Routes);
