const all = require("../Function/logic");

 

// Expres import
let exp = require("express");

let r = exp.Router();

r.get("/",all.Home);
r.get("/a",all.About);
r.get("/c",all.Service);
r.get("/p",all.Product);
r.get("/con",all.Contact);



module.exports = r;