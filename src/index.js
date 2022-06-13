import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Graphics page 
import UserActivityPage from './pages/graphics/UserActivity';
import UserScorePage from './pages/graphics/UserScore';
import UserAverageSessions from './pages/graphics/UserAverage';
import UserPerformancePage from './pages/graphics/UserPerformance';
import UserKeyDataPage from './pages/graphics/KeyData';

import Home from './pages/Home';
import Index from './pages/Index';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Error from './pages/Error';
// Style 
import './css/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
    <SideBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/user/*" element={<Error />}/>
        <Route path="/user/:id" element={<Home />} />
        <Route path="/user/:id/activity" element={<UserActivityPage />} />
        <Route path="/user/:id/average-sessions" element={<UserAverageSessions />} />
        <Route path="/user/:id/today-score" element={<UserScorePage />} />
        <Route path="/user/:id/activities" element={<UserPerformancePage />} />
        <Route path="/user/:id/key-data" element={<UserKeyDataPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
