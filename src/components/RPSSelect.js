import React from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg'
import Paper from '../static/icon-paper.svg'
import Scissors from '../static/icon-scissors.svg'

export default () => {
    return (
        <>
        <div class='selectWrap'>
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
        </>
    )
}