
import { useState } from 'react';
import { fetchPlace } from '../hooks/fetchPlace';
import { Button } from '@mui/material';

const CitySearch = (props) => {
    const [city, setCity] = useState("");
    const [autocompleteCities, setAutocompleteCities] = useState([]);
    const [autocompleteErr, setAutocompleteErr] = useState("");
    const { onClickProp, setLocation, searchParams } = props;
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = (e) => {
        onClickProp();
        setLocation({ ...searchParams, "location": city })
    }

    const handleCityChange = async (e) => {
        setCity(e.target.value);
        if (!city) return;

        const res = await fetchPlace(city);
        !autocompleteCities.includes(e.target.value) &&
            res.features &&
            setAutocompleteCities(res.features.map((place) => place.place_name));
        res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
    };

    return (
        <div className="placesAutocomplete">
            <div className="placesAutocomplete__inputWrap">
                <p style={{marginBottom:"10px"}} className="placesAutocomplete__hint">
                    *start typing to see autocomplete suggestions <br/>
                    and click on an option to autofill
                </p>
                <label htmlFor="city" className="label">
                    {autocompleteErr && (
                        <span className="inputError">{autocompleteErr}</span>
                    )}
                </label>
                <input style={{ width: "250px", height:"25px" }}
                    list="places"
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleCityChange}
                    value={city}
                    required
                    pattern={autocompleteCities.join("|")}
                    autoComplete="off"
                />
                <datalist id="places">
                    {autocompleteCities.map((city, i) => (
                        <option key={i}>{city}</option>
                    ))}
                </datalist>
                <button style={{marginLeft:"5px"}} onClick={() => setCity("")}>Clear Input</button>
                <br />
                <Button sx={{mt: 2}} disabled={city.length < 3} variant="contained" color="success" type="submit" onClick={handleClick} >Submit</Button>
            </div>
        </div>
    );
};

export default CitySearch;