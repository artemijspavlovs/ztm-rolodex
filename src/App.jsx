import './App.css'
import CardList from "./components/CardList/CardList";
import {useEffect, useState} from "react";
import SearchBox from "./components/SearchBox/SearchBox";


const App = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [users, setUsers] = useState([])
    const monsters = users.filter(
        user => user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => {
                resp.json()
                    .then(users => {
                        setUsers(users)
                    })
            })
        return () => {
            console.log("This happens once, on component UNMOUNT")
        }
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <SearchBox
                    handleChange={e => setSearchQuery(e.target.value)}
                    placeholder="search robots"
                />
                <CardList monsters={monsters}/>
            </header>
        </div>
    )
}

export default App
