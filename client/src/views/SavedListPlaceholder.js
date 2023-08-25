import React, { useState } from 'react'

const SavedListPlaceholder = (props) => {


    return (
        <>
        <h2 style={{textAlign:"center", marginTop:"80px"}}>Your Saved List</h2>
            <table style={{border:"1px solid", borderCollapse:"collapse"}}>
                <tr>
                    <th style={{border:"1px solid"}}>Restaurant Name</th>
                    <th style={{border:"1px solid"}}>Tried?</th>
                    <th style={{border:"1px solid"}}>Favorite</th>
                    <th style={{border:"1px solid"}}>Actions </th>
                </tr>
                <tr style={{textAlign:"center"}}>
                    <td style={{border:"1px solid"}}>placeholder name</td>
                    <td style={{border:"1px solid"}}>
                        <input type="checkbox"></input>
                    </td>
                    <td style={{border:"1px solid"}}>
                        <input type="checkbox"></input>
                    </td>
                    <td style={{border:"1px solid"}}>
                        <button>
                            Details (Yelp)
                        </button>
                        <button>
                            Remove
                        </button>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default SavedListPlaceholder;