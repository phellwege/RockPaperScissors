import React, { useEffect, useState, state } from 'react';
import '../RPS.css'
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
            y.style.display = 'block';
            x.style.display = 'none';
        }
    }
    return (
        <>
        <div className='selectBkg'>
            <div class='selectWrap'>
                <div id='paper' onClick={Transitioning}>
                    <div class='hand'>
                        <img src={Paper} />
                    </div>
                </div>
                <div id='scissor' onClick={Transitioning}>
                    <div class='hand'>
                        <img src={Scissors}/>
                    </div>
                </div>
                <div id="rock" onClick={Transitioning}>
                    <div class='hand'>
                        <img src={Rock} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}