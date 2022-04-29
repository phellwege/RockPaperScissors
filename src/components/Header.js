import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import Logo from '../static/logo.svg';



export default (props) => {
    

    return(
        <>
                <div id='topDiv'>
                    <div>
                        <img src={Logo}/>
                    </div>
                    <div id='scoreTracker'>
                        <h3 id='scoreText'>Score</h3>
                        <h1 id='darkText'>{props.score}</h1>
                    </div>
                </div>
        </>
    )
}   