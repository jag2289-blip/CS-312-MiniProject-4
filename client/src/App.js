import React, {useEffect, useState} from 'react'
import UserLogin from './components/UserLogin';
import Blog from './components/Blog';

function App(){

  const [backendData, setBackendData] = useState({});

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return(
    <div className = "App">      
      <h1>UserLogin Form</h1>
      <UserLogin />
      <h2>New Blogs</h2>
      <Blog />
      {(typeof backendData.posts === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>By {"Guest"}</small>
          </div>
        ))
      )}

    </div>
  )
}

export default App