import { navigate } from '@reach/router'
import axios from 'axios'
import React from 'react'
import {Button} from '@material-ui/core'

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
            <Button variant="contained" color="secondary" onClick={onClickHandler}>Delete</Button>
        </div>
    )
}

export default DeleteButton
