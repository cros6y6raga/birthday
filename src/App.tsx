import React, {useState} from 'react';
import './App.css';
import './App.scss'
import 'animate.css';

function App() {
    const onClickHandler = () => {
        alert('С ДР')
    }

    return (
        <>
            <div className="App">
                <button className='Button' onClick={onClickHandler}>Лёх, нажми на меня!</button>
            </div>
            <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="icon">С ДР!</div>
            </div>
        </>
    );
}

export default App;