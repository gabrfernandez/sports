import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <p>
                    <label>First Name</label>
                    <input type="text" name="firstName" />
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" name="lastName" />
                </p>
                <p>
                    <label>Sport</label>
                    <input type="text" name="sport" />
                </p>
                <p>
                    <label>Team</label>
                    <input type="text" name="team" />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
