import React, { useEffect, useState, state } from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import Logo from '../static/logo.svg';
import Modal from '../components/Rules.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../RPS.css'


export default () => {
    const [show, setShow] = useState(false);
    function onClose(e) {
        setShow(false);
    };
    const [score, setScore] = useState(0);
    const [myChoice, setMyChoice] = useState('')

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
    return (
        <>
            <div class='wrapper'>
                <Header/>
                <div className='select'>
                    <RPSSelect myChoice={myChoice} score={score} setScore={setScore} setMyChoice={setMyChoice}/>
                </div>
                <div className='result'>
                    <RPSResult myChoice={myChoice} score={score} setScore={setScore}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}