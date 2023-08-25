// import React from 'react';
// import { Typography, Button } from '@mui/material';

// const RestaurantInfo2 = (props) => {
//     const { setCounter, restaurantData, restaurantChoice, savedList, setSavedList } = props;
//     const thisRestaurant = restaurantData.tenRestaurantsObject[restaurantChoice]
//     const restaurantName = thisRestaurant.name;
//     // const restaurantImage = thisRestaurant.photos[0]; // decided to use the next 2 images available
//     const restaurantImage2 = thisRestaurant.photos[1];
//     const restaurantImage3 = thisRestaurant.photos[2];
//     const restaurantId = thisRestaurant.id;
//     const restaurantLoc = thisRestaurant.location;
//     restaurantCityState = `${restaurantLoc.city}, ${restaurantLoc.state}`

//     let city = [restaurantLoc.display_address[0], restaurantLoc.display_address[1], restaurantLoc.display_address[2]].join(" ")
//     let linkString = ""
//     for (let i = 0; i < city.length; i++) {
//         if (city[i] === " ") linkString += "+";
//         else linkString += city[i];
//     }

//     commented out because it wasn't working and giving "Rest element must be last element"
//     const handleSaveClick = {
//         setSavedList([...savedList, {id: restaurantId, name: restaurantName, city: thisRestaurant.city}  ])
//     }


//     const mapsLink = `https://www.google.com/maps/place/${linkString}`
//     return (
//         <div style={{ width: "100%" }}>
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//                 <Typography sx={{mb: 2}} variant="h5">{restaurantName}</Typography>
//             </div>
//             <div style={{ display: "flex", justifyContent: "space-between", width: "95%", margin:"auto"}}>
//                 <div>
//                     <img style={{ borderRadius: "10px", width: "175px", height: "175px" }} src={restaurantImage2} alt={restaurantName} />

//                     <p style={{ textAlign: "center" }}><b>Yelp Rating:</b><br />
//                         <b>{thisRestaurant.rating} / 5 </b><br/> (with <b><i>{thisRestaurant.review_count}</i></b> reviews)
//                     </p>
//                 </div>
//                 <div>
//                     <p style={{ textAlign: "center" }}>
//                         <b>Categories:</b><br />
//                         <i>{thisRestaurant.categories.map((cat) => cat.title).join(", ")}</i>
//                     </p>
//                     <p style={{ textAlign: "center" }}>
//                         <b>Price:</b><br />
//                         {thisRestaurant.price}
//                     </p>
//                     <p style={{ textAlign: "center" }}>
//                         <b>Address:</b><br />
//                         {restaurantLoc.address1} {restaurantLoc.address2} {restaurantLoc.address3}<br />
//                         {restaurantLoc.city}, {restaurantLoc.state} {restaurantLoc.zip_code}
//                     </p>
//                 </div>
//             </div>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//                 <Button variant="link" variant="contained" color="primary" href={mapsLink}>get directions with Google maps</Button>
//             </div>
//             <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "7px" }}>
//                 <Button variant="link" variant="contained" color="error" href={thisRestaurant.url}>more Info: Yelp.com</Button>
//                 <Button variant="contained" color="success" onClick={handleSaveClick}>Save to List</Button>
//             </div>
//             <div style={{ display: "flex", justifyContent: "center", marginTop: "7px" }}>
//                 <Button variant="contained" color="secondary" onClick={() => setCounter()} >choose a different restaurant</Button>
//             </div>

//         </div>
//     )
// }

// export default RestaurantInfo2;