import { useEffect, useState } from "react"
import Showusers from "./Showusers"


export default function Friend(){
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    const friendStyle = {
        border: '2px solid green',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return (
        <div style={friendStyle}>
            <h3>frinds: {friends.length}</h3>
            {
                friends.map(friend => <Showusers friend={friend}></Showusers>)

            }
        </div>
    )
}


/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 */