import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import Modal from '../components/Rules.js';

export default () => {
    const [show, setShow] = useState(false);
    function onClose(e) {
        setShow(false);
    };
    const [score, setScore] = useState(0);
    const [myChoice, setMyChoice] = useState('')
    return(
        <>
            <Modal show={show} onClose={onClose} />
                <div id='rulesButton' onClick={e => {setShow(true)}}>
                    Rules
                </div>
        </>
    )
}