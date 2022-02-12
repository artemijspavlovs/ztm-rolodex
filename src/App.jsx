import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => {
          resp.json()
            .then(users => {setUsers(users)})
        })
    return () => {
      console.log("This happens once, on component UNMOUNT")
    }
  }, [])
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        {users.map((member) => (
            <div key={member.id}>
              {member.name}
            </div>
        ))}
      </header>
    </div>
  )
}

export default App
