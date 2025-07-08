
let all_function = {
     Home : async function(req, res) {
        res.send("Hello I'm Home Page")
        res.end();
    },
    
     About : async function(req, res) {
        res.send("About Page")
        res.end();
    },
    
     Service : async function(req, res) {
        res.send("Service Page")
        res.end();
    },
    
     Product : async function(req, res) {
        res.send("Product Page")
        res.end();
    },
    
     Contact : async function(req, res) {
        res.send("Contact Page")
        res.end();
    },
}




module.exports = all_function