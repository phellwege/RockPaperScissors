import React from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import Logo from '../static/logo.svg';
import '../RPS.css'

export default () => {
    return (
        <>
            <div class='wrapper'>
                <div id='topDiv'>
                    <div>
                        <img src={Logo}/>
                    </div>
                    <div id='scoreTracker'>
                        <h3>Score</h3>
                        <h2>Showing Score</h2>
                    </div>
                </div>
            <div><RPSSelect id='select'/></div>
            <div><RPSResult id='result'/></div>
            <div id='rulesButton'>Rules</div>
            </div>
        </>
    )
}