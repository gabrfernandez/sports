import { navigate } from '@reach/router'
import axios from 'axios'
import React from 'react'

const DeleteButton = ({id}) => {
    
    const onClickHandler= e =>{
        axios.delete('http://localhost:8000/api/athletes/'+id)
            .then(response=>{
                console.log(response);
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return (
        <div>
            <button onClick={onClickHandler}>Delete</button>
        </div>
    )
}

export default DeleteButton
