import React, { useEffect, useState, state } from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../RPS.css';


export default () => {
    const newHousePick = () => {
            const choices = ['rock', 'paper', 'scissor'];
            setHouse(choices[Math.floor(Math.random() * 3)]);
        }
    const [score, setScore] = useState(0);
    const [myChoice, setMyChoice] = useState('');
    const [house, setHouse] = useState('');
    const [PlayerWin, setPlayerWin] = useState('');
    
        const Result = () => {
            newHousePick();
            if(myChoice == house) {
                setPlayerWin('Draw')
            }
            else if(myChoice==='rock'){
                if (house ==='scissor'){
                setPlayerWin('Win')
                setScore(score + 1)}
            else {
                setPlayerWin('Lose')
                setScore(score - 1)}
                }
            else if(myChoice==='paper'){
                if (house ==='rock'){
                setPlayerWin('Win')
                setScore(score + 1)}
            else {
                setPlayerWin('Lose')
                setScore(score - 1)}
                }
            else if(myChoice==='scissor'){
                if (house ==='paper'){
                setPlayerWin('Win')
                setScore(score + 1)}
            else {
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
                    <RPSSelect setMyChoice={setMyChoice} setPlayerWin={setPlayerWin}/>
                </div>
                <div className='result'>
                    <RPSResult PlayerWin={PlayerWin} myChoice={myChoice} setScore={setScore} house={house}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
