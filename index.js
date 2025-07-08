let exp = require("express");
let route = require('./Routes/webp');
require('dotenv').config();
let port_no = process.env.PORT || 4000
let app = exp();
app.use("/ins/", route);

app.listen(port_no,function() {
    console.log(`Server started at http://localhost:${port_no}/ins`);
})