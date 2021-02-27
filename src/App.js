import React, { useState, useEffect } from 'react';
import MainRouter from "./router";
import { auth } from './firebase/utils'
import './App.css';

const App = props => {
    return (
        <MainRouter />
    )
}
export default App;