import React from 'react'

function Users() {
    console.log("coucou")

    // this is just an example
    let Roger = {
        id: 1,
        username: "Roger",
        email: "roger@roger.com",
        emoji_img: "💩",
        questions:
        [
            { type: "cinema", answer: "Le Chardonneret" },
            { type: "music", answer: "Toccata & fuga in blabla" },
            { type: "BD", answer: "Asterix et Obelix" },
        ],
        presentation: "Je suis né en 1912 dans la Creuse et j'aime bien creuser oh lala j'adore ça.",
        abonnements: [1, 2, "..."],
        interests: [4, 5],
        creation: "12 janvier 2005",
        edit:"23 septembre 2019"
    }

    return (
        <>
        <button>Add user</button>
        <table>
            
            <thead>
                <tr>
                    <th>ID</th>
                    <th>username</th>
                    <th>email</th>
                    <th>emoji</th>
                    <th>Date of creation</th>
                    <th>Last edit</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <td>{Roger.id}</td>
                <td>{Roger.username}</td>
                <td>{Roger.email}</td>
                <td>{Roger.emoji_img}</td>
                <td>{Roger.creation}</td>
                <td>{Roger.edit}</td>
                <td><button>Edit</button><button>Delete</button></td>
                
            </tbody>
            </table>
            </>
    
        )
}

export default Users