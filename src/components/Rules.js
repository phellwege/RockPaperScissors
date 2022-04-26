import React, { useEffect, useState, state } from 'react';
import Close from '../static/icon-close.svg'
import '../RPS.css'

export default (props) => {
    
    if(!props.show){
        return null;
    }
        return (
            <div className='rulesBkg'>
                    <div>
                        <h1 id='darkText'>Rules</h1>
                    </div>
                    <div>
                        <img src={Close} onClick={props.onClose} alt='' />
                    </div>
            </div>
        )
    }
