import React, { useEffect, useState, state } from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../RPS.css';


export default (props) => {
    const Transitioning = () => {
        const y = document.getElementsByClassName('select')[0];
        const x = document.getElementsByClassName('result')[0];
        if(x.style.display == 'block') {
            x.style.display = 'none';
            y.style.display = 'block';
        }
        else {
            y.style.display = 'none';
            x.style.display = 'block';
        }
    }

    const newHousePick = () => {
            const choices = ['rock', 'paper', 'scissor'];
            let choice =choices[Math.floor(Math.random() * 3)]
            setHouse(choice);
            return choice
        }
    const [score, setScore] = useState(0);
    const [myChoice, setMyChoice] = useState('');
    const [house, setHouse] = useState('');
    const [PlayerWin, setPlayerWin] = useState('');
        const Result = () => {
            if (myChoice === ''){
            return
        }
            let cChoice = newHousePick();
            if(myChoice === cChoice) {
                setPlayerWin('Draw')
            }
            else if (myChoice==='rock'){
                if (cChoice ==='scissor'){
                setPlayerWin('Win')
                setScore(score + 1)
            } else {
                setPlayerWin('Lose')
                setScore(score - 1)
                }
            } else if(myChoice==='paper'){
                if (cChoice ==='rock'){
                setPlayerWin('Win')
                setScore(score + 1)
            } else {
                setPlayerWin('Lose')
                setScore(score - 1)}
                }
            else if(myChoice==='scissor'){
                if (cChoice ==='paper'){
                setPlayerWin('Win')
                setScore(score + 1)
            } else {
                setPlayerWin('Lose')
                setScore(score - 1)}
                }
        }
        useEffect(() => {
        Result();
        }, [myChoice]);
    
    return (
        <>
            <div className='wrapper'>
                <Header score={score}/>
                <div className='select'>
                    <RPSSelect Transitioning={Transitioning} setMyChoice={setMyChoice} setPlayerWin={setPlayerWin}/>
                </div>
                <div className='result'>
                    <RPSResult Transitioning={Transitioning} PlayerWin={PlayerWin} myChoice={myChoice} setScore={setScore} house={house}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
