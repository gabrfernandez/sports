import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'
import {Button, ListItem, Link} from '@material-ui/core'

const Home = () => {
    const [athletes, setAthletes] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/athletes")
            .then((response)=>{
                setAthletes(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[athletes])

    const removeFromDom=personId=>{
        setAthletes(athletes.filter(athlete=>athlete._id !== personId))
    }

    return (
        <div>
            <h1>Athletes</h1>
            <Button variant="contained" color="primary" href="/create">Add Athlete</Button>
            <Center>
                <ul>
                    {athletes.map((athlete, index)=>{
                        return(
                        
                            <ListItem key={index} removeFromDom={removeFromDom}><Link href={"/"+athlete._id}>{athlete.firstName} {athlete.lastName}</Link>  | <Button variant="contained" href={"/"+athlete._id+"/edit"}>Edit</Button>  <DeleteButton id={athlete._id}/></ListItem>
                            
                        ) 
                    })}
                </ul>
            </Center>
        </div>
    )
}

const Center=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default Home
