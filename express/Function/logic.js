const User = require("../collection/User");
let all_fun = {
    register: async function (req, res) {
        let { a, b, c, d } = req.body;
        let u = new User({
            name: a,
            email: b,
            password: c,
            age: d
        })
        await u.save()
        res.status(200).json({ msg: "Data is Succesfully svaed" })
    },

    // Login: async function (req, res) {
    //     res.send(" wellcome Login page ");
    //     res.end();
    // },


}

module.exports = all_fun
