import React, {useState} from "react";



function Blog(){
    const [title, setTitle] = useState({})
    const [body, setBody] = useState({})
    

    function handleForm(event){
        event.preventDefault()

        let blogPost = {
            title:title,
            body:body
        }

        fetch("/api/blog", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(blogPost)
        }).then(response => response.json()).then(data =>{
            console.log(data)
        })

        console.log("Clicked")
    }
    return(
        <div>
            <form onSubmit={handleForm}>
                <label>Title</label>
                <input type="text" name="title" onChange={e => setTitle(e.target.value)} /><br/>
                <label>Body</label>
                <input type="text" name="body" onChange={e => setBody(e.target.value)} /><br/>
                <input type="submit" value="Post your Blog" />
            </form>
        </div>
    )
}

export default Blog