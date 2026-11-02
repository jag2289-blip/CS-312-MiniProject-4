const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})

app.post("/api/login", (req, res) =>{
    console.log(req.body)
    
    let{userId, password} = req.body
    if(userId == "Admin" && password == "root"){
        console.log("Valid User")
    }
    else{
        console.log("Invalid User")
    }

    res.json({"message":"Form Submitted"})
})

app.listen(5000, () => {console.log("Server started on port 5000")})