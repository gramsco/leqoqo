import React, { useState,useEffect } from 'react'
// import Select from "react-select"
import EmojiPicker from 'emoji-picker-react'
import Subscriptions from './Admin/Subscriptions'
import api from '../api'


function UserProfile(props) {

  
    
  const [currentUserProfile, setCurrentUserProfile] = useState({})
  
  console.log(currentUserProfile)
  useEffect(() => {
    
    api
      .getUserProfileWithUser(JSON.parse(localStorage.user)._id)
      .then((res) => {
        console.log(res)
        setEmoji(res.emoji ?res.emoji:'🐒')
        setState({
          ...state,
          username: res.username,
          emoji: res.emoji,
          bio: res.bio,
          question_type: res.question_type,
          question_answer: res.question_answer,
          weekday: res.weekday,
          weeknights: res.weeknights,
          weekends: res.weekends,
        })

      })
      .catch(err => console.log(err))

    },[])

    const [page,setPage] = useState(1)

    const [state, setState] = useState({
      user: JSON.parse(localStorage.user)._id,
      username:'',
      emoji: '😍',
      bio: '',
      question_type:'',
      question_answer: '',
      weekday: false,
      weeknights: false,
      weekends:false
    })

  function handleChange (e) {
        let name = e.target.name
        let value =  e.target.value 
          setState({ ...state, [name]: value })
  }
  
  function handleChecked(e) {

    let checked = e.target.checked
    let name = e.target.name
    console.log(checked,name)
    setState({...state, [name]:checked})

  }

  const handleSubmitOne = e => {
      
    e.preventDefault()
    
    
    
    let body = {
      user:state.user,
      username:state.username,
      emoji:state.emoji,
      bio:state.bio
    }
    
        api
          .editUserProfile(body)
          .then(res => setPage(2))
          .catch(err => console.log(err))
  }
  const handleSubmitTwo = e => {
    e.preventDefault()

    let body = {
      user:state.user,
      question_type:state.question_type,
      question_answer:state.question_answer,
      weekday:state.weekday,
      weekends:state.weekends,
      weeknights:state.weeknights
    }

    api
      .editUserProfile(body)
      .then(res => props.history.push("/"))
      .catch(err => console.log(err))
  }

    const [emoji, setEmoji] = useState('')

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
                      <input
                        name="weekday"
                        checked={state.weekday}
                        onChange={handleChecked}
                        type="checkbox"
                      />
                    </div>
                    <div>
                      <label>Week nights</label>
                      <input
                        name="weeknights"
                        checked={state.weeknights}
                        onChange={handleChecked}
                        type="checkbox"
                      />
                    </div>
                    <div>
                      <label>Weekend</label>
                      <input
                        name="weekend"
                        checked={state.weekend}
                        onChange={handleChecked}
                        type="checkbox"
                      />
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
                If I were{' '}
                <select
                  onChange={handleChange}
                  value={state.question_type}
                  name="question_type"
                >
                  <option value="an animal">an animal</option>
                  <option value="a movie">a movie</option>
                  <option value="a book">a book</option>
                  <option value="food">food</option>
                  <option value="a flower">a flower</option>
                  <option value="a person">another person</option>
                  <option value="a train">a train</option>
                </select>{' '}
                I'd be{' '}
                <input
                  onChange={handleChange}
                  value={state.question_answer}
                  name="question_answer"
                  type="text"
                />
              </div>
              <h2 className="Validate" onClick={handleSubmitTwo}>
                VALIDER 2/2
              </h2>
            </div>
          )}
        </div>
        <a href="/home">Ignore this step</a>
      </div>
    )
}

export default UserProfile

