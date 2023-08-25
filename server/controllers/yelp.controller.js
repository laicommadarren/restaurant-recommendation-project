const axios = require('axios');
require('dotenv').config();

module.exports.get10RestaurantsBySearchParams = async (request, response) => {
    const location = request.params.location;
    const term = request.params.term;
    const category = request.params.category;
    const price = request.params.price;

    // reformat location and term 
    const locationReformat = (loc) => {
        let newString = "";
        for (let i = 0; i < loc.length; i++) {
            if (loc[i] === "_") newString += " ";
            else newString += loc[i];
        }
        return newString;
    }
    const priceReformat = (pr) => {
        let priceString = "";
        for (let i = 0; i < pr.length; i++) {
            priceString += "&price=" + pr[i];
        }
        return priceString;
    }
    const locationURI = encodeURIComponent(locationReformat(location));
    const priceURI = priceReformat(price);
    const optionURL = `https://api.yelp.com/v3/businesses/search?location=${locationURI}&term=${term}&categories=${category}${priceURI}&sort_by=best_match&limit=10`


    const options = {
        method: 'GET',
        url: optionURL,
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    };
    
    const options2 = {
        method: 'GET',
        baseURL: "https://api.yelp.com/v3/businesses/",
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    };

    const axiosInstance = axios.create({
        baseURL: "https://api.yelp.com/v3/businesses/",
        timeout: 10000,
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    })


    console.log(options.url);
    try {
        const restaurants = await axios(options);
        const restaurantData = restaurants.data;
        console.log("*********")
        // console.log(restaurantData);
        console.log("*********")
        console.log(restaurants.data.businesses[0].id);
        const tenRestaurantsObject = {};
        for (let i = 0; i < 10; i++) {
            let restaurant = await axios({
                method: 'GET',
                url: `https://api.yelp.com/v3/businesses/${restaurants.data.businesses[i].id}`,
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API_KEY}`
                }
            })
            tenRestaurantsObject[i] = restaurant.data;
        }

        // const restaurant0 = await axiosInstance.get(`/${restaurants.data.businesses[0].id}`)
        // console.log(restaurant0)
        // const restaurant1 = await axiosInstance.get(`/${restaurants.data.businesses[1].id}`)

        response.json({restaurantData, tenRestaurantsObject})
    } catch (error) {
        console.error(error);
        response.status(400).json(error);
    }

    
    // axios(options)
    //     .then(restaurants => {
    //         response.json(restaurants.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         response.status(400).json(err);
    //     });
}

const getId = (id) => {
    const baseURL = "https://api.yelp.com/v3/businesses/"
    const fetchURL = baseURL + restaurantData.businesses[0].id



    console.log(options.url)
    axios(options)
        .then(restaurants => {
            return restaurants.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
}

module.exports.getRestaurantImageByID = (request, response) => {
    const id = request.params.id;

    const fetchURL = `https://api.yelp.com/v3/businesses/${id}`


    const options = {
        method: 'GET',
        url: fetchURL,
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    };

    console.log(options.url)
    axios(options)
        .then(restaurants => {
            response.json(restaurants.data);
        })
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
        });
}