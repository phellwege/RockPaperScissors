import React from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg'
import Paper from '../static/icon-paper.svg'
import Scissors from '../static/icon-scissors.svg'

export default () => {
    return (
        <>
        <div id='selectWrap'>
            
                <div id='hand'>
                    <img src={Paper} id='paper'/>
                </div>
                <div id='hand'>
                    <img src={Scissors} id='scissor'/>
                </div>
                <div id='hand'>
                    <img src={Rock} id='rock'/>
                </div>
            
        </div>
        </>
    )
}