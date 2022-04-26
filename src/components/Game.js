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
            y.style.display = 'none';
            x.style.display = 'block';
        }
    }

const Game = ({score, myChoice, setScore}) => {
    const [house, setHouse] = useState('');
    const [PlayerWin, setPlayerWin] = useState('');

    const newHousePick = () => {
        const choices = ['rock', 'paper', 'scissor'];
        setHouse(choices[Math.floor(Math.random() * 3)]);
    }
    useEffect(() => {
        newHousePick();
    }, []);
    const Result = () => {
        if(myChoice==='rock' & house==='scissor'){
            setPlayerWin('Win')
            setScore + 1;
        }
        else if(myChoice==='paper' & house==='rock'){
            setPlayerWin('Win')
            setScore + 1;
        }
        else if(myChoice==='scissor' & house==='paper'){
            setPlayerWin('Win')
            setScore + 1;
        }
        else if(myChoice==='rock' & house==='paper'){
            setPlayerWin('Lose')
            setScore - 1;
        }
        else if(myChoice==='paper' & house==='scissor'){
            setPlayerWin('Lose')
            setScore - 1;
        }
        else if(myChoice==='scissor' & house==='rock'){
            setPlayerWin('Lose')
            setScore - 1;
        }
        else{
            setPlayerWin('Draw')
        }
    }
    useEffect(() => {
        Result();
    }, [house]);
    

    return (
        <div>
            my choice:{myChoice} 
            <br/>
            House Choice: {house}
            Result: 
                {PlayerWin=='Win' && <h2>You Win</h2>}
                {PlayerWin=='Lose' && <h2>You lose</h2>}
                {PlayerWin=='Draw' && <h2> Draw</h2>}
        </div>
    )
}
}