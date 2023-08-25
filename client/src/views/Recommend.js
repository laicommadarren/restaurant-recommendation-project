import React, { useEffect, useState } from 'react';
import TwoButtonsWithPics from '../components/TwoButtonsWithPics';
import CitySearch from '../components/CitySearch';
import RestaurantInfo1 from '../components/RestaurantInfo1';
import RestaurantInfo2 from '../components/RestaurantInfo2';
import RestaurantInfoUpdated from '../components/RestaurantInfoUpdated';
import AfterCategoryChoice from '../components/AfterCategoryChoice';
import AfterCategoryOptions from '../components/AfterCategoryOptions';
import ButtonMUI from '../components/ButtonMUI';
import '@fontsource/roboto/700.css';
import { Typography, Checkbox, FormControlLabel, Button } from '@mui/material';
import MealType from '../components/MealType';

// I want to have this go through the questions. 
const Recommend = (props) => {
    const {savedList, setSavedList} = props;
    const [counter, setCounter] = useState(1);
    const [searchParams, setSearchParams] = useState({
        location: "Los Angeles, CA",
        price: { "1": false, "2": false, "3": false, "4": false, "all": true }
    })
    const [counterForGoingBack, setCounterForGoingBack] = useState(0);
    const [restaurantData, setRestaurantData] = useState();
    const [priceURI, setPriceURI] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [restaurantChoice, setRestaurantChoice] = useState();
    const [currentCategory, setCurrentCategory] = useState("")
    const categories = [
        "American (New)",
        "Japanese",
        "Italian",
        "Chinese",
        "Korean",
        "Thai",
        "French",
        "Mexican",
        "Vietnamese",
        "Mediterranean"
    ]

    const handleChange = (e) => {
        e.target.checked ?
            setSearchParams({ ...searchParams, price: { ...searchParams.price, [e.target.value]: e.target.checked, all: false } }) :
            setSearchParams({ ...searchParams, price: { ...searchParams.price, [e.target.value]: e.target.checked } });

    }
    const handleChangeAll = (e) => {
        setSearchParams({ ...searchParams, price: { "1": false, "2": false, "3": false, "4": false, "all": e.target.checked } })
    }

    const handlePrice = () => {
        setCounter(4);
        let priceString = "";
        if (searchParams.price["1"]) priceString += "&price=1";
        if (searchParams.price["2"]) priceString += "&price=2";
        if (searchParams.price["3"]) priceString += "&price=3";
        if (searchParams.price["4"]) priceString += "&price=4";
        setPriceURI(priceString);

    }

    const handleSearchTerm = (e) => {
        setSearchParams({ ...searchParams, term: e.target.value })
        setCounter(5);

    }

    const handleCategoryClick = (e) => {
        setCounterForGoingBack(counter);
        setSearchParams({ ...searchParams, category: e.target.value })
        setCounter(6);
        setCurrentCategory(e.target.name)
    }
    const handleRestaurantClick = (e) => {
        setCounterForGoingBack(counter);
        setCounter(7);
        setRestaurantChoice(e.target.name);
    }

    return (
        <>
            {/* <p>{counter}</p> */}
            {counter === 0 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        {/* wrap below text */}
                        <Typography variant="h4" style={{ textAlign: "center" }}>Ready for a<br />recommendation?</Typography>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            <ButtonMUI variant="contained" color="success" onClickProp={() => setCounter(1)} message="Let's Go!" />
                        </div>
                    </div>
                </div>
            }
            {counter === 1 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        <Typography variant="h5" style={{ textAlign: "center" }}>Search near default location?</Typography>
                        <Typography variant="h6" style={{ textAlign: "center" }}>({searchParams.location})</Typography>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            <ButtonMUI variant="contained" color="success" onClickProp={() => setCounter(2)} message="Yes" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <ButtonMUI variant="contained" color="error" onClickProp={() => setCounter(1.5)} message="No" />
                        </div>
                    </div>
                </div>
            }
            {counter === 1.5 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography sx={{ mb: 1 }} variant="h5">Enter location</Typography>
                        <CitySearch onClickProp={() => setCounter(2)} setLocation={setSearchParams} searchParams={searchParams} />
                    </div>
                </div>
            }
            {counter === 2 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <div>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant="h5" sx={{ mb: 1 }} >Price:</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel control={
                                <Checkbox name="$" value="1" checked={searchParams.price["1"]} onChange={(e) => handleChange(e)} />
                            } label="$" />
                            <Typography>(under $10)</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel control={
                                <Checkbox name="$$" value="2" checked={searchParams.price["2"]} onChange={(e) => handleChange(e)} />
                            } label="$$" />
                            <Typography>($11-$30)</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel control={
                                <Checkbox name="$$$" value="3" checked={searchParams.price["3"]} onChange={(e) => handleChange(e)} />
                            } label="$$$" />
                            <Typography>($31-$60)</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel control={
                                <Checkbox name="$$$$" value="4" checked={searchParams.price["4"]} onChange={(e) => handleChange(e)} />
                            } label="$$$$" />
                            <Typography>($61+)</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel control={
                                <Checkbox name="all" value="all" checked={searchParams.price["all"]} onChange={(e) => handleChangeAll(e)} />
                            } label="doesn't matter" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <ButtonMUI variant="contained" color="success" onClickProp={() => handlePrice()} message="Submit"></ButtonMUI>
                        </div>
                    </div>
                </div>
            }
            {counter === 3 &&
                <div>
                    <h3>Let's try something...</h3>
                    <Button message="I liked before" onClickProp={() => { setCounter(4); setSearchParams({ ...searchParams, filter: "favorites" }) }} /><br />
                    <Button message="familiar" onClickProp={() => { setCounter(4); setSearchParams({ ...searchParams, filter: "familiar" }) }} /><br />
                    <Button message="different" onClickProp={() => { setCounter(4); setSearchParams({ ...searchParams, filter: "different" }) }} />
                </div>
            }
            {counter === 4 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <MealType onClickProp={(e) => handleSearchTerm(e)} message1="Breakfast" message2="Lunch" message3="Dinner" searchParams={searchParams} setSearchParams={setSearchParams} />
                </div>
            }
            {counter === 5 &&
                <div>
                    <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant="h4">Category:</Typography>
                            <TwoButtonsWithPics onClickProp={((e) => handleCategoryClick(e))} message1={categories[0]} message2={categories[1]} value1={categories[0]} value2={categories[1]}
                                imgOneSrc="https://s3-media0.fl.yelpcdn.com/bphoto/M-VyE8nCcWShNeZyqI20dg/o.jpg" imgTwoSrc="https://s3-media0.fl.yelpcdn.com/bphoto/ZWxkXDQoSPh0S0iwVmjJTg/o.jpg" />
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                <ButtonMUI variant="outlined" message="more options" onClickProp={() => setCounter(5.1)} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {counter === 5.1 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4">Category:</Typography>
                        <TwoButtonsWithPics onClickProp={((e) => handleCategoryClick(e))} message1={categories[2]} message2={categories[3]} value1={categories[2]} value2={categories[3]}
                            imgOneSrc="https://s3-media0.fl.yelpcdn.com/bphoto/y3ABxby3AsE0eLmdZUP7uA/o.jpg"
                            imgTwoSrc="https://s3-media0.fl.yelpcdn.com/bphoto/em0Oat4tsCHR6c7FPfd-dA/o.jpg" />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <ButtonMUI color="secondary" variant="outlined" message="previous options" onClickProp={() => setCounter(5)} />
                            <ButtonMUI variant="outlined" message="more options" onClickProp={() => setCounter(5.2)} />
                        </div>
                    </div>
                </div>
            }
            {counter === 5.2 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4">Category:</Typography>
                        <TwoButtonsWithPics onClickProp={((e) => handleCategoryClick(e))} message1={categories[4]} message2={categories[5]} value1={categories[4]} value2={categories[5]} 
                            imgOneSrc="https://s3-media0.fl.yelpcdn.com/bphoto/X_U65O9YnvMyb42h1BZ0JQ/o.jpg"
                            imgTwoSrc="https://s3-media0.fl.yelpcdn.com/bphoto/ZpZdaFPjZ0LTRlk4qEYiBw/o.jpg" />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <ButtonMUI color="secondary" variant="outlined" message="previous options" onClickProp={() => setCounter(5.1)} />
                            <ButtonMUI variant="outlined" message="more options" onClickProp={() => setCounter(5.3)} />
                        </div>
                    </div>
                </div>
            }
            {counter === 5.3 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4">Category:</Typography>
                        <TwoButtonsWithPics onClickProp={((e) => handleCategoryClick(e))} message1={categories[6]} message2={categories[7]} value1={categories[6]} value2={categories[7]}
                            imgOneSrc="https://s3-media0.fl.yelpcdn.com/bphoto/L1ql_jlyfAjazLscAHxhvw/o.jpg"
                            imgTwoSrc="https://s3-media0.fl.yelpcdn.com/bphoto/4zjN9DxYWCrMY1xDbshR4Q/o.jpg" />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <ButtonMUI color="secondary" variant="outlined" message="previous options" onClickProp={() => setCounter(5.2)} />
                            <ButtonMUI variant="outlined" message="more options" onClickProp={() => setCounter(5.4)} />
                        </div>
                    </div>
                </div>
            }
            {counter === 5.4 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4">Category:</Typography>
                        <TwoButtonsWithPics onClickProp={((e) => handleCategoryClick(e))} message1={categories[8]} message2={categories[9]} value1={categories[8]} value2={categories[9]}
                            imgOneSrc="https://s3-media0.fl.yelpcdn.com/bphoto/OnZhtuQxGEKMjK0OeZsUsg/o.jpg"
                            imgTwoSrc="https://s3-media0.fl.yelpcdn.com/bphoto/Ej1BCIwmfghErc_Aa5fF7Q/o.jpg" />
                        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px" }}>
                            <ButtonMUI color="secondary" variant="outlined" message="previous options" onClickProp={() => setCounter(5.2)} />
                        </div>
                    </div>
                </div>
            }
            {counter === 6 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <AfterCategoryChoice restaurantData={restaurantData} setCounter={setCounter} index1={0} index2={1} handleRestaurantClick={handleRestaurantClick} searchParams={searchParams} loaded={loaded} setLoaded={setLoaded} setRestaurantData={setRestaurantData} currentCategory={currentCategory} />
                </div>
            }
            {loaded && counter === 6.1 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <AfterCategoryOptions restaurantData={restaurantData} index1={2} index2={3} setCounter={setCounter} counter={counter} handleRestaurantClick={handleRestaurantClick} currentCategory={currentCategory}/>
                </div>
            }
            {counter === 6.2 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <AfterCategoryOptions restaurantData={restaurantData} index1={4} index2={5} setCounter={setCounter} counter={counter} handleRestaurantClick={handleRestaurantClick} currentCategory={currentCategory}/>
                </div>
            }
            {counter === 6.3 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <AfterCategoryOptions restaurantData={restaurantData} index1={6} index2={7} setCounter={setCounter} counter={counter} handleRestaurantClick={handleRestaurantClick} currentCategory={currentCategory}/>
                </div>
            }
            {counter === 6.4 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <AfterCategoryOptions restaurantData={restaurantData} index1={8} index2={9} setCounter={setCounter} counter={counter} handleRestaurantClick={handleRestaurantClick} currentCategory={currentCategory}/>
                </div>
            }
            {counter === 7 &&
                <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                    <RestaurantInfo1
                        goBack={() => setCounter(counterForGoingBack)}
                        restaurantData={restaurantData}
                        restaurantChoice={restaurantChoice}
                        savedList={savedList}
                        setSavedList={setSavedList}
                    />
                </div>
            }
            {counter === 7.5 &&
                <div>
                    <RestaurantInfo1 />
                </div>
            }
        </>

    )
}

export default Recommend