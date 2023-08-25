import React from 'react'
import TwoButtonsWithPics from './TwoButtonsWithPics';
import { Typography, Button } from '@mui/material';

const AfterCategoryOptions = (props) => {
    const { restaurantData, setCounter, index1, index2, handleRestaurantClick, counter, currentCategory } = props;



    return (
        <div style={{ textAlign: "center", width:"95%"}}>
            <Typography variant="h4">Restaurant:</Typography>
            <TwoButtonsWithPics imgOneSrc={restaurantData.tenRestaurantsObject[index1].image_url}
                imgTwoSrc={restaurantData.tenRestaurantsObject[index2].image_url}
                onClickProp={((e) => handleRestaurantClick(e))}
                message1={restaurantData.restaurantData.businesses[index1].name}
                message2={restaurantData.restaurantData.businesses[index2].name}
                value1={index1} value2={index2}
            />
            {counter < 6.4 &&
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", width: "95%" }}>
                    <Button color="secondary" variant="outlined" onClick={() => setCounter((counter * 10 - 1) / 10)}>previous options</Button>
                    <Button variant="outlined" onClick={() => setCounter((counter * 10 + 1) / 10)}>more options</Button>
                </div>
            }
            {counter === 6.4 &&
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", width: "95%" }}>
                    <Button color="secondary" variant="outlined" onClick={() =>setCounter((counter * 10 - 1) / 10)}>previous options</Button>
                </div>
            }
        </div>
    )
}

export default AfterCategoryOptions