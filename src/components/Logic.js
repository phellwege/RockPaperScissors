import React, { useEffect, useState, state } from 'react';
import '../RPS.css';


export default () => {

    const [score, setScore] = useState(0);
    const [myChoice, setMyChoice] = useState('');
    const [house, setHouse] = useState('');
    const [PlayerWin, setPlayerWin] = useState('');

    const Game = ({score, myChoice, setScore}) => {
        
        
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
                setScore(score + 1);
            }
            else if(myChoice==='paper' & house==='rock'){
                setPlayerWin('Win')
                setScore(score + 1);
            }
            else if(myChoice==='scissor' & house==='paper'){
                setPlayerWin('Win')
                setScore(score + 1);
            }
            else if(myChoice==='rock' & house==='paper'){
                setPlayerWin('Lose')
                setScore(score - 1);
            }
            else if(myChoice==='paper' & house==='scissor'){
                setPlayerWin('Lose')
                setScore(score - 1);
            }
            else if(myChoice==='scissor' & house==='rock'){
                setPlayerWin('Lose')
                setScore(score - 1);
            }
            else{
                setPlayerWin('Draw')
            }
        }
        useEffect(() => {
            Result();
        }, [house]);
    }
}