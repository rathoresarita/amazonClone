import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { HomePage } from './Components'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage></HomePage>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
