import React, { useState } from 'react'
// import Select from "react-select"
import EmojiPicker from 'emoji-picker-react'
import Subscriptions from './Admin/Subscriptions'
import api from '../api'

function UserProfile(props) {
    const [state, setState] = useState({
        emoji: '',
        info: '',
        address: '',

    })

    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        setState({ ...state, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        api
            .addUserProfile()
            .then(res => props.history.push('/'))
            .catch(err => console.log(err))
    }

    const [emoji, setEmoji] = useState('😍')

    const [emojis, setEmojis] = useState({
        bool: false,
        display: 'hidden',
    })

    function handleEmojis() {
        if (!emojis.bool) {
            setEmojis({
                ...emojis,
                bool: true,
                display: 'visible',
            })
        } else {
            setEmojis({
                ...emojis,
                bool: false,
                display: 'hidden',
            })
        }
    }

    function handleEmoji(emoji) {
        setEmoji(String.fromCodePoint(parseInt(emoji, 16)))
    }

    function handleLogout() {
        api
            .logout()
            .then(result => {
                console.log('SUCCESS!')
                props.history.push('/') // Redirect to the home page
            })
            .catch(err => {
                return 'cannot logout'
            })
    }

    return (
        <div className="container">

            <header className="Header-in-userprofile">
                <div className="logo">
                    <i className="fas fa-search"></i>o <i class="fas fa-search "></i>o</div>

                <button onClick={handleLogout}><i class="fas fa-power-off logout-icon"></i></button>

            </header>


            <div className="userprofile-container" >

                <form onChange={handleChange} onSubmit={handleSubmit}>

                    <div className="profile-image">{emoji}
                        &nbsp;
                        <input
                            className="inputEmoji"
                            onClick={handleEmojis}
                            style={{ height: '50px', width: '50px' }}
                            type="text"
                            readOnly
                            value={emoji}
                        />
                    </div>

                    {emojis.bool && (
                        <EmojiPicker display={emojis.display} onEmojiClick={handleEmoji} />
                    )}

                    <hr />
                    <div className="horlala">
                        <h1>HORLALA</h1> &nbsp; &nbsp;&nbsp;

                        {api.isLoggedIn() && <div className="horlala">
                            <h1> <i class="fas fa-plus-circle"></i></h1> &nbsp; &nbsp;
                            <h1> <i class="fas fa-envelope-square"></i> </h1> </div>
                        }

                    </div>

                    <h2 className="something-about-you">something about you</h2>
                    <input type="text" name="info" id="info" />
                    <h2 className="something-about-you">where do you live</h2>
                    <input type="text" name="address" id="address" />


                    <button>Submit</button>
                </form>
            </div>

            <login />
        </div>
    )
}

export default UserProfile

