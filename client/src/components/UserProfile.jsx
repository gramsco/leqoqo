import React, { useState } from 'react'
// import Select from "react-select"
import EmojiPicker from 'emoji-picker-react'
import Subscriptions from './Admin/Subscriptions'
import api from '../api'


function UserProfile(props) {


    const [page,setPage] = useState(1)

    const [state, setState] = useState({
        user: JSON.parse(localStorage.user)._id,
        username:"",
        emoji: '😍',
        bio: '',
        address: '',
        question:'',
  
    })

    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        setState({ ...state, [name]: value })
    }

    const handleSubmitOne = e => {
      e.preventDefault()
      setPage(2)

        // api
        //   .editUserProfile(state.user,state.username,state.emoji,state.bio)
        //     .then(res => props.history.push('/home'))
        //     .catch(err => console.log(err))
    }

    const [emoji, setEmoji] = useState('😍')

    const [emojis, setEmojis] = useState({
        bool: false,
        display: 'visible',
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
        handleEmojis()
        setEmoji(String.fromCodePoint(parseInt(emoji, 16)))
      setState({ ...state, emoji: String.fromCodePoint(parseInt(emoji, 16)) })
    }

    

    return (
      <div className="container">
        <header>
          <h1>Complete your profil</h1>
        </header>
        <div className="userprofile-container">
          {page === 1 && (
            <div className="page1">
              <div className="userprofile__form__questions">
                <div className="userprofile__form__number">1</div>
                <div>Choose your QoQomoji and your avatar</div>
              </div>
              <div className="emoji_and_name">
                <input
                  className="profile-username"
                  type="text"
                  value={state.username}
                  name="username"
                  placeholder="You"
                  onChange={handleChange}
                />
                {emojis.bool && (
                  <EmojiPicker
                    className="Emoji_picker"
                    // display={emojis.display}
                    display={emoji.display}
                    onEmojiClick={handleEmoji}
                    emojiResolution="128"
                  />
                )}

                <input
                  className="profile-image"
                  onClick={handleEmojis}
                  type="text"
                  readOnly
                  value={emoji}
                />
              </div>

              <div className="userprofile__form__questions">
                <div className="userprofile__form__number">2</div>
                <div>Who the qoqo are you?</div>
              </div>
              <textarea
                className="userprofile_bio"
                onChange={handleChange}
                value={state.bio}
                name="bio"
                id="info"
              />
              <h2 className="Validate" onClick={handleSubmitOne}>
                VALIDER 1/2
              </h2>
            </div>
          )}

          {page === 2 && (
            <div className="page1">
              <div className="userprofile__form__questions">
                <div>
                  <div className="userprofile__form__number">3</div>
                  <div>
                    When would you be available to meet your fellow qoqonuts ?
                  </div>

                  <div>
                    <div>
                      <label>Week day</label>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <label>Week nights</label>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <label>Weekend</label>
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="userprofile__form__questions">
                <div className="userprofile__form__number">4</div>
                <div>
                  {state.username && `${state.username},what drives you nut ?`}
                </div>
                <div>{!state.username && `What drives you nut ?`}</div>
              </div>
              <div>
                If I were {' '}
                <select name="question">
                  <option value="animal">an animal</option>
                  <option value="movie">a movie</option>
                  <option value="book">a book</option>
                  <option value="food">food</option>
                  <option value="flower">a flower</option>
                  <option value="person">another person</option>
                  <option value="train">a train</option>
                </select>
                {' '} I'd be {' '}
                <input type="text"></input>
              </div>

              <h2 className="Validate">VALIDER 2/2</h2>
            </div>
          )}
        </div>
        <a href="/home">Ignore this step</a>
      </div>
    )
}

export default UserProfile

