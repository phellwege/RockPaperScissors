import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import rock from '../static/icon-rock.svg';
import paper from '../static/icon-paper.svg';
import scissor from '../static/icon-scissors.svg';

export default (props) => {

    return (
        <>
        <div className='resultsWrap'>
            <div className='playersChoice'>
                <h2>You Picked</h2>
                <div id={props.myChoice} data-id={props.myChoice}>
                    <div className='hand'>
                        <img src={props.myChoice === 'rock' ? rock :props.myChoice === 'scissor' ? scissor : props.myChoice === 'paper' ? paper : rock} alt={props.myChoice}/>
                    </div>
                </div>
            </div>
            <div id='winLoseDiv'>
                {props.PlayerWin=='Win' && <h1>You Win</h1>}
                {props.PlayerWin=='Lose' && <h1>You lose</h1>}
                {props.PlayerWin=='Draw' && <h1>Draw</h1>}
                <br/>
                <button id='playAgainButton' onClick={(e)=> {props.Transitioning()}}>Play Again</button> </div>
            <div className='pcChoice'>
                <h2>The House Picked</h2>
                <div id={props.house} data-id={props.house}>
                    <div className='hand'>
                        <img src={props.house === 'rock' ? rock :props.house === 'scissor' ? scissor : props.house === 'paper' ? paper : rock} alt={props.house}/>
                    </div>
                </div>
            </div>
        </div>                
        </>
    )
}
