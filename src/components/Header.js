import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import Logo from '../static/logo.svg';


export default () => {
    const [score, setScore] = useState(0);
    return(
        <>
                <div id='topDiv'>
                    <div>
                        <img src={Logo}/>
                    </div>
                    <div id='scoreTracker'>
                        <h3 id='scoreText'>Score</h3>
                        <h1 id='darkText'>{score}</h1>
                    </div>
                </div>
        </>
    )
}