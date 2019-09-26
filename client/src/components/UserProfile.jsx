import React, { useState } from "react"
// import Select from "react-select"
import EmojiPicker from "emoji-picker-react";
import Subscriptions from "./Admin/Subscriptions"
import api from "../api";



function UserProfile(props) {

    const [state, setState] = useState({
        emoji: "",
        info: "",
        address: "",
        hobbies: ""
    });

    const handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        api.addUserProfile
            .then(res => {
                props.history.push("/");
            })
            .catch(err => console.log(err));
    };

    const [emoji, setEmoji] = useState("😍");

    const [emojis, setEmojis] = useState({
        bool: false,
        display: "hidden",
    });

    function handleEmojis() {
        if (!emojis.bool) {
            setEmojis(
                {
                    ...emojis,
                    bool: true,
                    display: "visible",
                })
        }
        else {
            setEmojis({
                ...emojis,
                bool: false,
                display: "hidden",
            });
        }
    }

    function handleEmoji(emoji) {
        setEmoji(String.fromCodePoint(parseInt(emoji, 16)))
    }



    return (
        <div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div className="profile-image">
                    {emoji}
                </div>

                <input className="inputEmoji"
                    onClick={handleEmojis}
                    style={{ width: "30px" }}
                    type="text"
                    readOnly
                    value={emoji}
                />
                {emojis.bool && (<EmojiPicker display={emojis.display} onEmojiClick={handleEmoji} />)}

                <h1>HORLALA</h1> &nbsp; &nbsp;&nbsp;
                <h1> <i class="fas fa-plus-circle"></i></h1> &nbsp; &nbsp;&nbsp; <h1><i class="fas fa-envelope-square"></i></h1>

                <h2 className="something-about-you">something about you</h2>
                <input type="text" name="info" id="info" />

                <h2 className="something-about-you">where do you live</h2>
                <input type="text" name="address" id="address" />

                <h2 className="something-about-you">Hobbies</h2>
                <input type="text" name="hobbies" id="hobbies" />

                <select>option</select>

                <button>Submit</button>
            </form>
        </div>
    )

}

export default UserProfile;



// return (
    //     <div className="userprofile-container">
    //         <h1>WELCOME user</h1>

    //         <div className="profile-image">
    //             {emoji}
    //         </div>

    //         <div className="selector">
    //             <form>
    //                 <input className="inputEmoji"
    //                     onClick={handleEmojis}
    //                     style={{ width: "30px" }}
    //                     type="text"
    //                     readOnly
    //                     value={emoji}
    //                 />
    //             </form>
    //             {emojis.bool && (
    //                 <EmojiPicker display={emojis.display} onEmojiClick={handleEmoji} />
    //             )}
    //         </div>

    //         <div class="head">
    //             <h1>HORLALA</h1> &nbsp; &nbsp;&nbsp;
    //             {/* <h1> <i class="fas fa-plus-circle"></i></h1> &nbsp; &nbsp;&nbsp;
    //             <h1><i class="fas fa-envelope-square"></i></h1> */}
    //         </div>

    //         <div className="question-container">
    //             <div className="small-questions">
    //                 <h2 className="something-about-you">something about you</h2>
    //                 <input
    //                     type="text"
    //                     value=""
    //                 />
    //             </div>
    //             <div className="small-questions">
    //                 <h2 className="something-about-you">where do you live</h2>
    //                 <input
    //                     type="text"
    //                     value=""
    //                 />
    //             </div>
    //         </div>
    //         <div className="question-container">
    //             <div className="small-questions">
    //                 <h2 className="something-about-you">Hobbies</h2>
    //                 <input
    //                     type="text"
    //                     value=""
    //                 />
    //             </div>
    //             <div className="small-questions">
    //                 <h2 className="something-about-you">where do you live</h2>
    //                 <input
    //                     type="text"
    //                     value=""
    //                 />
    //             </div>
    //         </div>

    //         <div>


    //         </div>


    //     </div>}
