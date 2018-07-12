import React from 'react';
import DrumContainer from './components/DrumContainer';
import drumset from './assets/img/drumset.png';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={drumset} className="App-logo" alt="drum set" />
                <h1 className="App-title">Drum Machine</h1>
            </header>
            <DrumContainer />
        </div>
    );
}

export default App;
