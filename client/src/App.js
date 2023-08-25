import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Recommend from './views/Recommend';
import Welcome from './views/Welcome';
import SavedList from './views/SavedList';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/start" element={<Recommend />} />
                <Route path="/list" element={<SavedList />} />
            </Routes>

        </div>
    );
}
export default App;