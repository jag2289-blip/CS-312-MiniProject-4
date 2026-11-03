const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

//dummy data to show
let posts = {
    id: 0,
    title: "MFP",
    body: "React speaking",
    author: "AI"
}

let i = 1

app.get("/api", (req, res) => {
    
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})

//Blog posts and adding new post
app.get("/api/blog", (req,res) => {
    res.json({posts})
})

app.post("/api/blog", (req, res) => {
    let {title, body, author} = req.body
    let newPost = {id: i++, title, body, author}
    console.log("New post")
    console.log(newPost)
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