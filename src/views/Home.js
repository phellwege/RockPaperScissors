import React, { useEffect, useState, state } from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import RPSLoad from '../components/RPSLoad';
import Logo from '../static/logo.svg';
import Modal from '../components/Rules.js';
import '../RPS.css'


export default () => {
    const [show, setShow] = useState(false);
    function onClose(e) {
        setShow(false);
    };
    return (
        <>
            <div class='wrapper'>
                <div id='topDiv'>
                    <div>
                        <img src={Logo}/>
                    </div>
                    <div id='scoreTracker'>
                        <h3 id='scoreText'>Score</h3>
                        <h2 id='darkText'>15</h2>
                    </div>
                </div>
                <div>
                    <RPSSelect id='select'/>
                    <Modal show={show} onClose={onClose} />
                    <div id='rulesButton' onClick={e => {setShow(true)}}>Rules</div>
                </div>
                {/* <div>
                    <RPSLoad id='load'/>
                    <Modal show={show} onClose={onClose} />
                    <div id='rulesButton' onClick={e => {setShow(true)}}>Rules</div>
                </div>
                <div>
                    <RPSResult id='result'/>
                    <Modal show={show} onClose={() => setShow(false)} />
                    <div id='rulesButton' onClick={e => {setShow(true)}}>Rules</div>
                </div> */}
            </div>
        </>
    )
}