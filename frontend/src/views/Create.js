import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'
import Form from '../components/Form'

const Create = () => {
    const onSubmitHandler=(e, data)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/athletes', data)
            .then(response=>{
                navigate('/')
            })
            .catch(err=>{
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Create an Athlete</h1>
            <Form 
                onSubmitHandler={onSubmitHandler}
                initialFirstName=""
                initialLastName=""
                initialSport=""
                initialTeam=""
            />
        </div>
    )
}

export default Create
