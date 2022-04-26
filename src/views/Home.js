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
    return (
        <>
            <div class='wrapper'>
                <Header/>
                <div className='select'>
                    <RPSSelect setMyChoice={setMyChoice}/>
                </div>
                <div className='result'>
                    <RPSResult myChoice={myChoice} score={score} setScore={setScore}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}