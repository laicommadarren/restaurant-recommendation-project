# Restaurant Recommendation Project

I often come across the situation where I am trying to decide what to eat at the last minute and I can't decide or I mind numbingly scroll through Yelp getting overwhelmed by all the choices. I often want the decision made for me and I generally trust yelp to give me an option I like with their best match sorting. 

That was my inspiration to create this project, which utilizes Yelp Fusion API to help simplify the decision making process for choosing a restaurant to eat at.

This app would be suitable for indecisive people, people who don't have the time to do research especially at a moment's notice, and people who just don't want to make such a decision for one reason or the other.



## Installation

see client/server README.md files for installation instructions

## Usage/Features

Preliminary notes: This app prototype is designed to be used in mobile view.

### Navigation Bar

Home button: redirects to dashboard

Recommendation: initializes prompts for restaurant recommendation (will not initialize if already in the prompts)

Saved List: currently displays a dummy table (functionality not implemented yet)

### Dashboard

"Let's Go" button initializes restaurant recommendation prompts
 
"Saved List" currently displays a dummy table (functionality not implemented yet)

"About Us" redirects to about us page. On that page, "Get Started" button initializes restaurant recommendation prompts

### Recommendation Prompts

#### 1. Initialize recommendation prompts with a method described above

#### 2.  Set Location:
Choose whether or not to search near default location (currently is hard-set to "Los Angeles, CA" which can be updated later when changing the default location functionality is added. 

"Yes" will proceed to the next option. 

"No" will proceed to a prompt that allows you to enter a location. Typing will trigger autocomplete options, which can be clicked on to Autofill. Character minimum is set to 3 characters and the submit button is disabled if fewer than 3 characters. Input field can be cleared by clicking "clear input" button. Click "submit" to proceed to the next option.

#### 3. Set Price:
Default Price options is set to "doesn't matter". Click as many options that apply. 

Checking "doesn't matter" automatically unchecks all options.

Click Submit to proceed to the next option.

#### 4. Choose meal type:
Choose between breakfast, lunch, or dinner. Click the respective button to select it and proceed to the next option.

#### 5. Choose food category:
In this prototype there are 10 preselected options to choose from.

Each page shows 2 options, with "more options" and "previous options" buttons allowing you to scan through the food categories.

Click on the button of the respective category to select it and proceed to the next option. 

#### 6. Choose restaurant:
Upon selecting the previous food category, Yelp API will be accessed and start retrieving restaurants based on your selected criteria. 

Similar to food categories, there are 10 options that can be scanned through with "more options" and "previous options".

Click on the button of the respective restaurant to select it and proceed to the next option. 

#### 7. Restaurant Display:
This page shows limited information attributed to the selected restaurant.

Clicking "Get directions with Google Maps" button will redirect to Google Maps page showing the address of the selected restaurant.

Clicking "more info: Yelp.com" button will redirect to the Yelp page of the selected restaurant where you can find more information about the restaurant

"Save to List" button currently does not do anything.

Clicking "Choose a different restaurant" will go back to the previous page where you can scan through the restaurants.

## Contributing



## License

[MIT](https://choosealicense.com/licenses/mit/)
## Contact

LinkedIn:
https://www.linkedin.com/in/laicommadarren/

## Acknowledgements
Yelp Fusion API provides all of the restaurant data.

https://javascript.plainenglish.io/create-a-simple-city-autocomplete-field-in-react-f7675d249c74#5057 was used to get a template for creating autocomplete function for location input.


