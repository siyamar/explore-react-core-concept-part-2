import './friends.css'
import Friend from '../Friend'
import { useEffect, useState } from "react"

export default function Friends (){
    const[friends, setFriends] = useState([])

    useEffect(()=>{  //anonimas callback function
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
1. State to hold data
2. use effect with defendency array.
3. use fetch to load data
4. set loaded data to the state
5. Display Data on the component
*/