/* @flow */

import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';

import Navbar from './Navbar';
import MainContent from './MainContent';

const App = () => (
    <div>
        <Navbar />
        <ToastContainer />
        <MainContent />
    </div>
);

export default App;
