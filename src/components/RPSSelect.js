import React from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg'
import Paper from '../static/icon-paper.svg'
import Scissors from '../static/icon-scissors.svg'

export default () => {
    return (
        <>
        <div id='selectWrap'>
            
                <div class='hand' id='paper'>
                    <img src={Paper} />
                </div>
                <div class='hand' id='scissor'>
                    <img src={Scissors}/>
                </div>
                <div class='hand' id="rock">
                    <img src={Rock} />
                </div>
            
        </div>
        </>
    )
}