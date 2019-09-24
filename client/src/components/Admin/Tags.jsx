import React, {useState} from 'react'
import EmojiPicker from "emoji-picker-react";

function Tags() {

    //Cinéma, Théâtre, Expositions et Musées, Concerts, Enfants, Visites - Conférences, Sport et Aventures, Ateliers & Création, Gastronomie
    
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
        setEmoji(String.fromCodePoint(parseInt (emoji, 16)))
    }

    let tags = [
        { name: "cinéma", img: "📽" },
        { name: "théâtre", img: "🎭" },
        { name: "musées", img: "🖼" },
    ]

    console.log("coucou")
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.img}</td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form>
          <input type="text" />

          <input
            onClick={handleEmojis}
            style={{ width: "12px" }}
            type="text"
            readOnly
            value={emoji}
          />

          <button onClick={() => console.log(emoji)}>add</button>
        </form>

        {emojis.bool && (
          <EmojiPicker display={emojis.display} onEmojiClick={handleEmoji} />
        )}
      </>
    );
}

export default Tags