import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import AddSales from './Components/AddSales';
import TopSales from './Components/TopSales';
import TodayRevenue from './Components/TodayRevenue';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';

function App() {
  return (  
    <Router>
      <div className="app-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <Link className="navbar-brand" to="/">
            <h3 className='text-white fw-bold'>Sales App</h3> 
          </Link>
          <button
          className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/AddSales">
                  Add Sales
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TopSales">
                  Top 5 Sales
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TodayRevenue">
                  Today's Total Revenue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled text-white-50" to="/">
                  Logout
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>

        <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/AddSales" element={<AddSales/>} />
          <Route path="/TopSales" element={<TopSales/>} />
          <Route path="/TodayRevenue" element={<TodayRevenue/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
        <Footer/>
      </div>
      

    </Router>
  );
}

export default App;
