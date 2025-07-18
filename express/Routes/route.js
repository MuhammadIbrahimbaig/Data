const express = require("express");
const router = express.Router();
const UserController = require("../Controller/function");

router.post("/save", UserController.Register); 
router.get("/users",UserController.read)

module.exports = router;
