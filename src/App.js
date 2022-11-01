import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import NBA from './components/pages/NBA';
import NFL from './components/pages/NFL';
import NoPage from './components/pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Router basename='/React-E-J-Sports/build'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={ <Home /> } />
                    <Route path='nfl' element={ <NFL /> } />
                    <Route path='nba' element={ <NBA /> } />
                    <Route path="*" element={ <NoPage /> } />
                </Routes>
            </Router>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark bottom justify-content-center fixed-bottom">
                <a class="navbar-brand" href="https://github.com/jellis206/React-E-J-Sports">
                    <p class="footer"><small class="muted-footer">Brought to you by J. Ellis and Ethan Kaloi (this is a link to our repo)</small></p>
                </a>
            </nav>
        </>
    );
};

export default App;