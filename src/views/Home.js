import React, { useEffect, useState } from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import RPSLoad from '../components/RPSLoad';
import Rules from '../components/Rules';
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
                        <h3 id='scoreText'>Score</h3>
                        <h2 id='darkText'>15</h2>
                    </div>
                </div>
                <div>
                    <RPSSelect id='select'/>
                    <div id='rulesButton' onClick={this}>Rules</div>
                </div>
                <div>
                    <RPSLoad id='load'/>
                    <div id='rulesButton' onClick={this}>Rules</div>
                </div>
                <div
                    ><RPSResult id='result'/>
                    <div id='rulesButton'>Rules</div>
                </div>
            </div>
        </>
    )
}