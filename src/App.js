import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import NavBar from './pages/NavBar';
import NFL from './pages/NFL';
import NBA from './pages/NBA';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path='/nba' element={<NBA />} />
                    <Route path="/nfl" element={<NFL />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark bottom justify-content-center fixed-bottom">
            <a class="navbar-brand" href="https://github.com/jellis206/React-E-J-Sports.git">
                <p class="footer"><small class="muted-footer">Brought to you by J. Ellis and Ethan Kaloi (this is a link to our repo)</small></p>
            </a>
        </nav>
       </>

    );
}