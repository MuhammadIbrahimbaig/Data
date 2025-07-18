const express = require("express");
const cors = require("cors");
let db = require("./dbconnection")
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

const route = require("./Routes/route");
const User = require("./Collection/User");
app.use("/", route);  
app.get('/', (req, res) =>{
  User.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
db().then(()=>{
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
})
