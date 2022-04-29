import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import rock from '../static/icon-rock.svg';
import paper from '../static/icon-paper.svg';
import scissor from '../static/icon-scissors.svg';

export default (props) => {

    function Transitioning(e) {
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
                <div id={props.myChoice} data-id={props.myChoice}>
                    <div className='hand'>
                        <img src={props.myChoice} alt={props.myChoice}/>
                    </div>
                </div>
            </div>
            <div id='winLoseDiv'>
                <h1>
                {props.PlayerWin=='Win' && <h2>You Win</h2>}
                {props.PlayerWin=='Lose' && <h2>You lose</h2>}
                {props.PlayerWin=='Draw' && <h2> Draw</h2>}
                </h1> 
                <br/>
                <button id='playAgainButton' onClick={Transitioning}>Play Again</button> </div>
            <div className='pcChoice'>
                <h2>The House Picked</h2>
                <div id={props.house} data-id={props.house}>
                    <div className='hand'>
                        <img src={props.house} alt={props.house}/>
                    </div>
                </div>
            </div>
        </div>                
        </>
    )
}
