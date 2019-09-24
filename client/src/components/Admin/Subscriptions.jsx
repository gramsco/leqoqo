import React from 'react'

function Users() {
    console.log("coucou")
    return (
        <>
            <a href="new-subscription">New Subscription</a>
            <hr/>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Organization</th>
                    <th>Brief description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>34567891</td>
                    <td>La super carte</td>
                    <td>Cinema</td>
                    <td>UGC</td>
                    <td>Une carte qui permet de faire des choses</td>
                </tr>
            </tbody>

            </table>
            </>
       

    )
}

export default Users