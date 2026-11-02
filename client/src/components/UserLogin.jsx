import React, {useState} from "react";



function UserLogin(){
    const [userId, setUserId] = useState({})
    const [password, setPassword] = useState({})

    function handleForm(event){
        event.preventDefault()

        let userData = {
            userId:userId,
            password:password
        }

        fetch("/api/login", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        }).then(response => response.json()).then(data =>{
            console.log(data)
        })

        console.log("Clicked")
    }
    return(
        <div>
            <form onSubmit={handleForm}>
                <label>User ID</label>
                <input type="text" name="userId" onChange={e => setUserId(e.target.value)} /><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} /><br/>
                <input type="submit" value="Login Form" />
            </form>
        </div>
    )
}

export default UserLogin