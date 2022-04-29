import React, { useEffect, useState, state } from 'react';
import '../RPS.css';
import Modal from '../components/Rules.js';

export default () => {
    const [show, setShow] = useState(false);
    function onClose(e) {
        setShow(false);
    };
    
    return(
        <>
            <Modal show={show} onClose={onClose} />
                <div id='rulesButton' onClick={e => {setShow(true)}}>
                    Rules
                </div>
        </>
    )
}