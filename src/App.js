import React, { useState, useEffect } from 'react';
import MainRouter from "./router";
import { auth } from './firebase/utils'
import './App.css';

const App = props => {

    const [currentUser, setCurrentUser] = useState(null)
    
    let authListener = null;
    useEffect(() => {
        authListener = auth.onAuthStateChanged=(userAuth)=>{
            if(!userAuth) {
                setCurrentUser(null);
            }
            setCurrentUser(userAuth);
            console.log(userAuth)
        }
    }, []);

    return (
        <MainRouter />
    )
}
export default App;