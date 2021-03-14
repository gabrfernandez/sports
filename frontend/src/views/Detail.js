import React, {useState, useEffect} from 'react'
import axios from 'axios';
import DeleteButton from '../components/DeleteButton'

const Detail = ({id}) => {
    const [athlete, setAthlete]=useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/athletes/'+ id)
            .then(response=>{
                setAthlete(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[id])

    return (
        <div>
            <h1>{athlete.firstName} {athlete.lastName}</h1>
            <h3>Team: {athlete.team}</h3>
            <p>Sport: {athlete.sport}</p>
            <DeleteButton />
        </div>
    )
}

export default Detail
