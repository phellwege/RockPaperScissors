import React, { useEffect, useState, state } from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg';
import Paper from '../static/icon-paper.svg';
import Scissors from '../static/icon-scissors.svg';


export default (props) => {
    
    function Transitioning(e) {
        const x = document.getElementsByClassName('select')[0];
        const y = document.getElementsByClassName('result')[0];
        if(x.style.display === 'block') {
            x.style.display= 'block';
            y.style.display = 'none';
        }
        else {
            y.style.display = 'block';
            x.style.display = 'none';
        }
    }
// this doesnt work
    return (
        <>
        <div className='selectBkg'>
            <div className='selectWrap'>
                <div id='paper' data-id='paper' onClick={(e)=> {Transitioning(e); props.setMyChoice('paper')}}>
                    <div className='hand'>
                        <img src={Paper} alt='paper icon'/>
                    </div>
                </div>
                <div id='scissor' data-id='scissor' onClick={(e)=> {Transitioning(e); props.setMyChoice('scissor')}}>
                    <div className='hand'>
                        <img src={Scissors} alt='scissor icon'/>
                    </div>
                </div>
                <div id="rock" data-id='rock' onClick={(e)=> {Transitioning(e); props.setMyChoice('rock')}}>
                    <div className='hand'>
                        <img src={Rock} alt='rock icon'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
