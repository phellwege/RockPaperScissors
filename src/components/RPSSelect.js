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
                <img src={Paper}  class='hand'/>
            </div>
            <div id='scissor'>
                <img src={Scissors} class='hand'/>
            </div>
            <div id="rock">
                <img src={Rock}  class='hand'/>
            </div>
        </div>
        </>
    )
}