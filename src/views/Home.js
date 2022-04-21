import React from 'react';
import RPSSelect from '../components/RPSSelect';
import RPSResult from '../components/RPSResult';
import '../RPS.css'

export default () => {
    return (
        <>
            <div id='wrapper'>
                <div id='topDiv'>
                    <div>
                        <h1>
                            Rock
                            <br/>
                            Paper
                            <br/>
                            Scissors
                        </h1>
                    </div>
                    <div><RPSSelect id='select'/></div>
                    <div><RPSResult id='result'/></div>
                </div>
            
            <button>Rules</button>
            </div>
        </>
    )
}