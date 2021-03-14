import React, {useState} from 'react'

const Form = ({onSubmitHandler}) => {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [sport, setSport]=useState("");
    const [team, setTeam]=useState("");

    return (
        <div>
            <form onSubmit={e=>{onSubmitHandler(e,{firstName, lastName, sport, team})}}>
                <p>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}}/>
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={(e)=>{setLastName(e.target.value)}}/>
                </p>
                <p>
                    <label>Sport</label>
                    <input type="text" name="sport" onChange={(e)=>{setSport(e.target.value)}}/>
                </p>
                <p>
                    <label>Team</label>
                    <input type="text" name="team" onChange={(e)=>{setTeam(e.target.value)}}/>
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
