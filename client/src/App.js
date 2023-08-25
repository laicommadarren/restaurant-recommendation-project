import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import Recommend from './views/Recommend';
import AboutUs from './views/AboutUs';
import SavedList from './views/SavedList';
import Dashboard from './views/Dashboard';
import NavBar from './components/NavBar';
import SavedListPlaceholder from './views/SavedListPlaceholder';

function App() {
    const [savedList, setSavedList] = useState([])

    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/start" element={<Recommend savedList={savedList} setSavedList={setSavedList} />} />
                <Route path="/list" element={<SavedListPlaceholder savedList={savedList} setSavedList={setSavedList} />} />
            </Routes>
            <div style={{position:'fixed', bottom:"0px", width:"100%", textAlign:"center"}}>
                <p>* restaurant data provided by Yelp Fusion API</p>
            </div>

        </div>
    );
}
export default App;