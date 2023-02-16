import React from 'react';
import './App.css';
import './App.scss'

function App() {
    const onClickHandler = () => {
        
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