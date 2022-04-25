import React from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg'
import Paper from '../static/icon-paper.svg'
import Scissors from '../static/icon-scissors.svg'
export default () => {
    return (
        <>
        <div class='resultsWrap'>
            <div>
                <h2>You Picked</h2>
                    <div id='paper'>
                        <div class='hand'>
                            <img src={Paper} />
                        </div>
                    </div>
                    <div id='scissor'>
                        <div class='hand'>
                            <img src={Scissors}/>
                        </div>
                    </div>
                    <div id="rock">
                        <div class='hand'>
                            <img src={Rock} />
                        </div>
                    </div>
            </div>
            <div id='winLoseDiv'>
                <h1>You</h1> 
                <br/>
                <button id='playAgainButton'>Play Again</button> </div>
            <div>
                <h2>House Picked</h2>
                    <div id='paper'>
                        <div class='hand'>
                            <img src={Paper} />
                        </div>
                    </div>
                    <div id='scissor'>
                        <div class='hand'>
                            <img src={Scissors}/>
                        </div>
                    </div>
                    <div id="rock">
                        <div class='hand'>
                            <img src={Rock} />
                        </div>
                    </div>
            </div>
        </div>                
        </>
    )
}