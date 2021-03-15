import React, {useState} from 'react'
import {FormControl, InputLabel, OutlinedInput, Button, Paper} from '@material-ui/core'
import styled from 'styled-components'

const Form = ({onSubmitHandler, initialFirstName, initialLastName, initialSport, initialTeam}) => {
    const [firstName, setFirstName]=useState(initialFirstName);
    const [lastName, setLastName]=useState(initialLastName);
    const [sport, setSport]=useState(initialSport);
    const [team, setTeam]=useState(initialTeam);

    return (
        <div>
            <Paper elevation={3}>
                <form onSubmit={e=>{onSubmitHandler(e,{firstName, lastName, sport, team})}}>
                    <FormControl variant="outlined">
                        <InputLabel>First Name</InputLabel>
                        <OutlinedInput type="text" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel>Last Name</InputLabel>
                        <OutlinedInput type="text" name="lastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel>Sport</InputLabel>
                        <OutlinedInput type="text" name="sport" value={sport} onChange={(e)=>{setSport(e.target.value)}}/>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel>Team</InputLabel>
                        <OutlinedInput type="text" name="team" value={team} onChange={(e)=>{setTeam(e.target.value)}}/>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
            </Paper>
        </div>
    )
}

const form=styled.div`
    display:flex;
`;

export default Form
