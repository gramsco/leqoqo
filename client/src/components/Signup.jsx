import React, { useState } from 'react'
import api from '../api'


function Signup(props) {
    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        message: null,
    })

    function handleInputChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    function handleClick(e) {
        e.preventDefault()
        let data = {
            username: state.name,
            email: state.email,
            password: state.password,
        }
        api
            .signup(data)
            .then(result => {
                console.log('SUCCESS!')
                props.history.push('/UserProfile') // Redirect to the home page
            })
            .catch(err => setState({ message: err.toString() }))
    }

    return (
        <div className="signup-container">
            {/* <div className="heading">
                <h2>Signup with facebook</h2>

            </div> */}
            <div className="Signup">
                <form>
                    Username:{' '}
                    <input
                        type="text"
                        value={state.username}
                        name="username"
                        onChange={handleInputChange}
                    />{' '}
                    <br />
                    <br />
                    Email:{' '}
                    <input
                        type="email"
                        value={state.email}
                        name="email"
                        onChange={handleInputChange}
                    />{' '}
                    <br />  <br />
                    Password:{' '}
                    <input
                        type="password"
                        value={state.password}
                        name="password"
                        onChange={handleInputChange}
                    />{' '}
                    <br />  <br />
                    <div className="heading" onClick={e => handleClick(e)}><h2>Signup</h2></div>
                </form>
                {state.message && <div>{state.message}</div>}
            </div>

        </div>

    )



}

export default Signup;