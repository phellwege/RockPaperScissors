import React from 'react';
import '../RPS.css'
import Rock from '../static/icon-rock.svg';
import Paper from '../static/icon-paper.svg';
import Scissors from '../static/icon-scissors.svg';

    function Transitioning() {
        const x = document.getElementsByClassName('selectBkg')
        const y = document.getElementsByClassName('resultsWrap')
        if(x.style.display === 'block') {
            x.style.display = 'none';
            y.style.display = 'block';
        }
        else {
            y.style.display = 'none';
            x.style.display = 'block';
        }
    }
export default () => {

    return (
        <>
        <div className='selectBkg'>
            <div class='selectWrap'>
                <div id='paper' onClick={Transitioning}>
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