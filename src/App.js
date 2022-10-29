import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import NBA from './components/pages/NBA';
import NFL from './components/pages/NFL';
import NoPage from './components/pages/NoPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact component={ Home } />
                <Route path='/nfl' component={ NFL } />
                <Route path='/nba' component={ NBA } />
                <Route path="*" element={ <NoPage /> } />
            </Routes>
        </Router>
    );
}

export default App;