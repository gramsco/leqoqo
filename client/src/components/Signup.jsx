import React, { useState } from 'react'


function Signup(props) {
    return (
        <div className="signup-container">
            <div className="Signup">
                <h2>Signup</h2>
                <form>
                    Username:{' '}
                    <input
                        type="text"
                        value=""//{state.username}
                        name="username"
                    //     onChange={handleInputChange}
                    />{' '}
                    <br />
                    <br />
                    Name:{' '}
                    <input
                        type="text"
                        value=""//{state.name}
                        name="name"
                    // onChange={handleInputChange}
                    />{' '}
                    <br />  <br />
                    Password:{' '}
                    <input
                        type="password"
                        value="" //{state.password}
                        name="password"
                    // onChange={handleInputChange}
                    />{' '}
                    <br />
                    <button>Signup</button>
                    {/*  //onClick={e => handleClick(e)} */}
                </form>
            </div>

        </div>

    )



}

export default Signup;