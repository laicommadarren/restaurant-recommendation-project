import React, { useEffect } from 'react'
import TwoButtonsWithPics from './TwoButtonsWithPics';
import axios from 'axios';
import { Typography, Button } from '@mui/material';


const AfterCategoryChoice = (props) => {
    const { restaurantData, setCounter, index1, index2, handleRestaurantClick, searchParams, loaded, setLoaded, setRestaurantData, currentCategory } = props;

    const reformatLocation = (loc) => {
        let locString = "";
        for (let i = 0; i < loc.length; i++) {
            if (loc[i] === ",") continue;
            else if (loc[i] === " ") locString += "_";
            else locString += loc[i];
        }
        return locString;
    }
    const reformatPrice = () => {
        let priceString = "";
        if (searchParams.price["1"]) priceString += "1";
        if (searchParams.price["2"]) priceString += "2";
        if (searchParams.price["3"]) priceString += "3";
        if (searchParams.price["4"]) priceString += "4";
        if (priceString === "") priceString = "1234";
        return priceString;
    }

    useEffect(() => {
        if (!restaurantData) {
            const locationToPass = reformatLocation(searchParams.location);
            const priceToPass = reformatPrice();
            const url = `http://localhost:8000/api/${locationToPass}/${searchParams.term}/${searchParams.category}/${priceToPass}`;
            axios.get(url)
                .then(response => {
                    setRestaurantData(response.data);
                    console.log(response.data);
                    setLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                    setLoaded(false);
                });
        }
    }, []);


    return (
        <>
            {loaded &&
                <div style={{ textAlign: "center", width:"95%"}}>
                    <Typography variant="h4">Restaurant:</Typography>
                    <Typography variant="h6">(category: {currentCategory})</Typography>
                    <TwoButtonsWithPics imgOneSrc={restaurantData.tenRestaurantsObject[index1].image_url}
                        imgTwoSrc={restaurantData.tenRestaurantsObject[index2].image_url}
                        onClickProp={((e) => handleRestaurantClick(e))}
                        message1={restaurantData.restaurantData.businesses[index1].name}
                        message2={restaurantData.restaurantData.businesses[index2].name}
                        value1={index1} value2={index2}
                    />
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", width:"95%"}}>
                        <Button variant="outlined"  onClick={() => setCounter(6.1)}>more options</Button>
                    </div>
                </div>
            }
            {!loaded &&
                <div>
                    <h2>Loading...</h2>
                    <h3>(It may take a few seconds to finish loading)</h3>
                </div>
            }

        </>
    )
}

export default AfterCategoryChoice