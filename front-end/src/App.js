import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import NBA from './components/pages/NBA';
import NFL from './components/pages/NFL';
import NoPage from './components/pages/NoPage';
import Signin from './components/pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserStore } from './services/user-store';
import AccountPage from './components/pages/AccountPage';

function App() {
  const userState = useUserStore();

  return (
    <div>
      {/* when deploying put E-J-Sports/build between quotes */ }
      <Router basename="">
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/nfl" element={ <NFL /> } />
          <Route path="/nba" element={ <NBA /> } />
          { userState.loggedIN && (<Route path="/account" element={ <AccountPage /> } />) }
          { !userState.loggedIN && (<Route path="/signin" element={ <Signin /> } />) }
          <Route path="*" element={ <NoPage /> } />
        </Routes>
      </Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bottom justify-content-center">
        <a
          className="navbar-brand"
          href="https://github.com/jellis206/React-E-J-Sports">
          <p className="footer">
            <small className="muted-footer">
              Brought to you by J. Ellis and Ethan Kaloi (this is a link to our
              repo)
            </small>
          </p>
        </a>
      </nav>
    </div>
  );
}

export default App;
