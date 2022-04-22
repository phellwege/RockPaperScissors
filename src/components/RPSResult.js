import React from 'react';
import '../RPS.css'

export default () => {
    return (
        <>
        <div class='resultsWrap'>
            <div><h2>You Picked</h2></div>
            <div id='winLoseDiv'>
                <h1>You</h1> 
                <br/>
                <button id='playAgainButton'>Play Again</button> </div>
            <div><h2>House Picked</h2></div>
        </div>                
        </>
    )
}