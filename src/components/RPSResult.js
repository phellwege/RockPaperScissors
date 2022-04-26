import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import Rock from '../static/icon-rock.svg';
import Paper from '../static/icon-paper.svg';
import Scissors from '../static/icon-scissors.svg';
import house from '../views/Home'
import myChoice from '../views/Home'
import PlayerWin from '../views/Home'
import Game from '../views/Home'

export default () => {
    function Transitioning() {
        const x = document.getElementsByClassName('select')[0];
        const y = document.getElementsByClassName('result')[0];
        if(x.style.display === 'block') {
            x.style.display= 'block';
            y.style.display = 'none';
        }
        else {
            y.style.display = 'none';
            x.style.display = 'block';
        }
    }

    
    return (
        <>
        <div className='resultsWrap'>
            <div className='playersChoice'>
                <h2>You Picked</h2>
                {myChoice}
            </div>

            <div id='winLoseDiv'>
                <h1>
                {PlayerWin=='Win' && <h2>You Win</h2>}
                {PlayerWin=='Lose' && <h2>You lose</h2>}
                {PlayerWin=='Draw' && <h2> Draw</h2>}
                </h1> 
                <br/>
                <button id='playAgainButton' onClick={Transitioning}>Play Again</button> </div>
            <div className='pcChoice'>
                <h2>The House Picked</h2>
                {house}
            </div>
        </div>                
        </>
    )
}
