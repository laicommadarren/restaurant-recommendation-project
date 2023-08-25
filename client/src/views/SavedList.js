import React, { useState } from 'react'

const SavedList = () => {

    const [savedList, setSavedList] = useState([])

    const handleClick ={
        
    }

    return (
        <table>
            <tr>
                <th>Restaurant Name</th>
                <th>City</th>
                <th>Price</th>
                <th>tried?</th>
                <th>favorite</th>
                <th>Actions </th>
            </tr>
            {savedList.map(restaurant => {
                <tr>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.city}</td>
                    <td>{restaurant.price}</td>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>
                        <button onClick={handleClick}>
                            Details
                        </button>
                    </td>
                </tr>
            })}
        </table>
    )
}

export default SavedList;