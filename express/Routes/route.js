let routing = require("../Controller/function")
let exp = require("express")
let router = exp.Router();

router.post("/", routing.Register)      // 👈 POST request on "/"
router.get("/b", routing.login)         // 👈 GET request on "/b"

module.exports = router
