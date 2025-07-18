const User = require("../Collection/User");
let crypt = require("bcrypt");
let data = {
  Register: async function (req, res) {
    try {
      let { name, email, password, age } = req.body;
      let email_check = await User.findOne({email: email});
      if (email_check) {
        res.status(409).json({msg: "Email is already exist!"})
      }
      else{
        let hashed_p = crypt.hashSync(password,10)
        console.log(hashed_p);
        let Users = new User({ name, email, password:hashed_p, age });
        await Users.save();
        res.status(200).json({ msg: "Data inserted!" });
      }

    } catch (error) {
      res.status(500).json({ msg: error.message });
      console.log(error);
    }
  }
};

module.exports = data;
