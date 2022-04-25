import React, { useEffect, useState, state } from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import Logo from '../static/logo.svg';
import Modal from '../components/Rules.js';
import '../RPS.css'


export default () => {
    const [show, setShow] = useState(false);
    function onClose(e) {
        setShow(false);
    };
    const [score, setScore] = useState(0);
    const [myChoice, setMyChoice] = useState('')
    return (
        <>
            <div class='wrapper'>
                <div id='topDiv'>
                    <div>
                        <img src={Logo}/>
                    </div>
                    <div id='scoreTracker'>
                        <h3 id='scoreText'>Score</h3>
                        <h1 id='darkText'>{score}</h1>
                    </div>
                </div>
                <div className='select'>
                    <RPSSelect setMyChoice={setMyChoice}/>
                </div>
                <div className='result'>
                    <RPSResult myChoice={myChoice} score={score} setScore={setScore}/>
                </div>
                <Modal show={show} onClose={onClose} />
                <div id='rulesButton' onClick={e => {setShow(true)}}>
                    Rules
                </div>
            </div>
        </>
    )
}