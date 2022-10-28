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

export default function App() {
    return (
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
    );
}