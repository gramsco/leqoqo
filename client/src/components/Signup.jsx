import React, { useState } from 'react'
import api from '../api'
import Login from './Login'
import { Link } from 'react-router-dom'
import Header from './Header'


function Signup(props) {

    console.log("props in signup", props)

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

    function handleSignup(e) {
        e.preventDefault()
        let data = {
            username: state.username,
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

    function handleLogin(e) {
        e.preventDefault()
        api
            .login(state.email, state.password)
            .then(result => {
                console.log('SUCCESS!')
                console.log('--------')
                console.log(props)
                console.log('--------')
                props.history.push('/') // Redirect to the home page
            })
            .catch(err => { return ("error") })
    }

    return (

        <div className="signup-container">
            <header className="Header">
                <div className="logo">
                    <i class="fas fa-search"></i>o <i class="fas fa-search"></i>o
            </div>

            </header>

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
                    {
                        !props.isLogin &&
                        <div className="heading" onClick={e => handleSignup(e)}><h2>Signup</h2></div>
                    }
                    {
                        props.isLogin &&
                        <div className="heading" onClick={e => handleLogin(e)}><h2>Login</h2></div>
                    }

                    {props.isLogin && <p>No account yet ?
                        <Link to="/Signup"> Signup here</Link>  <i class="fas fa-user-plus"></i></p>}
                    {!props.isLogin && <p>Already have an account ?
                        <Link to="/login">Login here</Link> <i class="fas fa-key"></i> </p>}


                </form>
                {state.message && <div>{state.message}</div>}
            </div>


        </div >

    )



}

export default Signup;