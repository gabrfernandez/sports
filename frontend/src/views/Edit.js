import React from 'react'
import DeleteButton from '../components/DeleteButton'
import Form from '../components/Form'
import axios from 'axios'
import {navigate} from '@reach/router'

const Edit = ({id}) => {
    const onSubmitHandler=(e, data)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/athletes/'+id, data)
            .then(response=>{
                navigate('/')
            })
            .catch(err=>{
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Edit Page</h1>
            <Form 
                onSubmitHandler={onSubmitHandler}
            />
            <DeleteButton />
        </div>
    )
}

export default Edit
