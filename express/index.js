require("dotenv").config();

const cors = require ("cors");
const exp = require("express");
const port_no = process.env.PORT || 4001
const db_url=require("./dbconnection")
const router = require("./Routes/route")

const app = exp();
app.use(cors())
app.use(exp.json())
app.use("/",router);

db_url().then(()=>{
    app.listen(port_no , function(){
        console.log(` server started at http://localhost:${port_no}/`);
    })
}).catch ((e)=>{
    console.log(e)
})