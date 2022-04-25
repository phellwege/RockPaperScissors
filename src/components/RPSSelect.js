import React, { useEffect, useState, state } from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg';
import Paper from '../static/icon-paper.svg';
import Scissors from '../static/icon-scissors.svg';


export default () => {

    function Transitioning() {
        const x = document.getElementById('select')
        const y = document.getElementById('result')
        if(x.style.display === 'block') {
            x.style = {display: 'none'};
            y.style.display = 'block';
        }
        else {
            y.style.display = 'none';
            x.style.display = 'block';
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