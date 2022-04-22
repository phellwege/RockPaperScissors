import React from 'react';
import Close from '../static/icon-close.svg'
import '../RPS.css'

export default () => {

    const Modal = ({showModal, onClick}) => {
        return (
            <>
            <div class='rulesBkg'>
                <div>
                    <h2>Rules</h2>
                    <img src={Close} onClick={onClick} className={`toggle${showModal ? ' night' : ""}`}/>
                </div>
            </div>
        </>
        )
    }
}