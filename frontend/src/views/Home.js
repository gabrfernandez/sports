import { Link } from '@reach/router'
import React from 'react'
import DeleteButton from '../components/DeleteButton'

const Home = () => {
    return (
        <div>
            <h1>Athletes</h1>
            <Link to="/create">Add Athlete</Link>
            <ul>
                <li><Link to="/5">Gabe Fern</Link>  | <Link to="/5/edit">Edit</Link> | <DeleteButton /></li>
            </ul>
        </div>
    )
}

export default Home
