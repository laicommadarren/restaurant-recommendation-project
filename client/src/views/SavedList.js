import React, { useState } from 'react'

const SavedList = (props) => {

    const {savedList, setSavedList} = props;

    const getDetails = () => {
        // an axios api call
        // yelp link maybe
        
    }
    const deleteRestaurantFromList = () => {
        setSavedList() // filter 
    }

    return (
        <table>
            <tr>
                <th>Restaurant Name</th>
                <th>City</th>
                <th>Price</th>
                <th>Tried?</th>
                <th>Favorite</th>
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
                        <button onClick={getDetails}>
                            Details (Yelp)
                        </button>
                        <button onClick={deleteRestaurantFromList}>
                            Remove
                        </button>
                    </td>
                </tr>
            })}
        </table>
    )
}

export default SavedList;