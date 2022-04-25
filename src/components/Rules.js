import React, { useEffect, useState, state } from 'react';
import Close from '../static/icon-close.svg'
import '../RPS.css'

export default (props) => {
    
    if(!props.show){
        return null;
    }
        return (
            <div className='rulesBkg'>
                    <div><h2 id='darkText'>Rules</h2></div>
                    <div><img src={Close} onClick={props.onClose} /></div>
            </div>
        )
    }
