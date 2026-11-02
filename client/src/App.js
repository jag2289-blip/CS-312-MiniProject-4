import React, {useEffect, useState} from 'react'
import UserLogin from './components/UserLogin';

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
    <div>
      <h1>UserLogin Form</h1>
      <UserLogin />
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App