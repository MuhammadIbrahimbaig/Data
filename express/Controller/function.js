let User = require("../Collection/User");

let data = {
    Register: async function (req, res) {
        try {
            let { name, email, password, age } = req.body;
            let Users = new User({
                name: name,
                email: email,
                password: password,
                age: age
            });

            await Users.save()
            res.status(200).json({ msg: "Data inserted!" })
        }
        catch (error) {
            res.status(500).json({ msg: error.message });
            console.log(error);

        }
    }
}

module.exports = data;