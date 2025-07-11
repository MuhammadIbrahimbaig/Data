
require("dotenv").config();
let exp = require("express");
let route = require("./Route/route")
let port_no = process.env.PORT || 4000
let db = require("./connection")
let cor = require("cors")
 let app = exp ()

 app.use(cor())
 app.use(exp.json())
 app.use("/lala/" ,route);

db().then(()=>{
app.listen(port_no , function () {
    console.log(`server at started at http://localhost:${port_no}/lala/`);
})


}).catch((e)=>{
    console.log(e);
})