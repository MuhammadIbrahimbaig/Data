let mail = require("nodemailer");
require("dotenv").config();

const User = require("../Collection/User");
let crypt = require("bcrypt");
// For Sending Email User Registartion
let secure_info = mail.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSKEY
  }
})
// Insert Data
let data = {
  Register: async function (req, res) {
    try {
      let { name, email, password, age } = req.body;
      let email_check = await User.findOne({ email: email });
      if (email_check) {
        res.status(409).json({ msg: "Email is already exist!" })
      }
      else {
        let hashed_p = crypt.hashSync(password, 10)
        console.log(hashed_p);
        let Users = new User({ name, email, password: hashed_p, age });
        await Users.save();
        res.status(200).json({ msg: "User Registration Succesfully!" });

        // For Sending Email User Registartion
        let EmailBodyInfo = {
          to: email,
          from: process.env.EMAIL,
          subject: "Account has been Registered!",
          html: `<h3>Hello ${name}</h3><br/><P>Your account has been created!`

        }
        secure_info.sendMail(EmailBodyInfo, function (e, i) {
          if (e) {
            console.log(e);
          }
          else {
            console.log("Email Has been Sent");
          }
        })
      }

    } catch (error) {
      res.status(500).json({ msg: error.message });
      console.log(error);
    }
  },
  // Show Data
  read: async function (req, res) {
    try {
      const users = await User.find()
      res.json(users);
      // setRecv(res.data);
    } catch (error) {
      res.status(500).json({ m: error.message })
    }
  },
};




module.exports = data;
