import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import Rock from '../static/icon-rock.svg';
import Paper from '../static/icon-paper.svg';
import Scissors from '../static/icon-scissors.svg';


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
                
                <div id='paper'>
                    <div class='hand'>
                        <img src={Paper} />
                    </div>
                </div>
                {/* <div id='scissor'>
                    <div class='hand'>
                        <img src={Scissors}/>
                    </div>
                </div>
                <div id="rock">
                    <div class='hand'>
                        <img src={Rock} />
                    </div>
                </div> */}
            </div>

            <div id='winLoseDiv'>
                <h1>You 
                
                </h1> 
                <br/>
                <button id='playAgainButton' onClick={Transitioning}>Play Again</button> </div>
            <div className='pcChoice'>
                <h2>House Picked</h2>
                
                <div id='paper'>
                    <div class='hand'>
                        <img src={Paper} />
                    </div>
                </div>
                {/* <div id='scissor'>
                    <div class='hand'>
                        <img src={Scissors}/>
                    </div>
                </div>
                <div id="rock">
                    <div class='hand'>
                        <img src={Rock} />
                    </div>
                </div> */}
            </div>
        </div>                
        </>
    )
}