import { useState } from "react"

export default function Team (){
    const[team, setTeam]=useState(11)

    const teamStyles = {
        border: '2px solid red',
        margin: '20px',
        padding: '20px',
        borderRadious: '15px'
    }
    const handleAdd =()=>{
        const newTeam = team+1;
        setTeam(newTeam);

    }
    const handleRemove =()=>{
        const newTeam = team-1;
        setTeam(newTeam);
    }
    return(
        <div style={teamStyles}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}