import React, { Component } from 'react';
import './DrumContainer.css';
import DrumPads from './DrumPads';
import CurrentInstrument from './CurrentInstrument';
import Clap from '../assets/audio/Clap.mp3';
import ClosedHiHat from '../assets/audio/ClosedHiHat.mp3';
import Kick from '../assets/audio/Kick.mp3';
import KickAndHiHat from '../assets/audio/KickAndHiHat.mp3';
import OpenHiHat from '../assets/audio/OpenHiHat.mp3';
import PunchyKick from '../assets/audio/PunchyKick.mp3';
import Shaker from '../assets/audio/Shaker.mp3';
import SideStick from '../assets/audio/SideStick.mp3';
import Snare from '../assets/audio/Snare.mp3';

const playableKeys = [
    'q', 'w', 'e',
    'a', 's', 'd',
    'z', 'x', 'c',
    'Q', 'W', 'E',
    'A', 'S', 'D',
    'Z', 'X', 'C'
];

const instruments = {
    q: { key: 'q', instrumentName: 'Clap', audioClip: Clap },
    w: { key: 'w', instrumentName: 'ClosedHiHat', audioClip: ClosedHiHat },
    e: { key: 'e', instrumentName: 'Kick', audioClip: Kick },
    a: { key: 'a', instrumentName: 'KickAndHiHat', audioClip: KickAndHiHat },
    s: { key: 's', instrumentName: 'OpenHiHat', audioClip: OpenHiHat },
    d: { key: 'd', instrumentName: 'PunchyKick', audioClip: PunchyKick },
    z: { key: 'z', instrumentName: 'Shaker', audioClip: Shaker },
    x: { key: 'x', instrumentName: 'SideStick', audioClip: SideStick },
    c: { key: 'c', instrumentName: 'Snare', audioClip: Snare },
};

class DrumContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInstrument: '',
        };

        this.playDrumSound = this.playDrumSound.bind(this);
        this.clickHandlerToPlayDrumSound = this.clickHandlerToPlayDrumSound.bind(this);
    }

    playDrumSound(e) {
        if (playableKeys.indexOf(e.key) !== -1) {
            const audioElement = document.getElementById(`audio${e.key.toUpperCase()}`);
            if (audioElement) {
                audioElement.currentTime = 0;
                audioElement.play();
                this.setState({
                    currentInstrument: instruments[e.key.toLowerCase()].instrumentName,
                });
            }
        }
    }

    clickHandlerToPlayDrumSound(key) {
        if (playableKeys.indexOf(key) !== -1) {
            const audioElement = document.getElementById(`audio${key.toUpperCase()}`);
            if (audioElement) {
                audioElement.currentTime = 0;
                audioElement.play();
                this.setState({
                    currentInstrument: instruments[key.toLowerCase()].instrumentName,
                });
            }
        }
    }

    componentDidMount() {
        document.addEventListener('keypress', this.playDrumSound);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.playDrumSound);
    }

    render() {
        return (
            <div className="DrumContainer">
                <DrumPads
                    instruments={instruments}
                    playableKeys={playableKeys}
                    clickHandlerToPlayDrumSound={this.clickHandlerToPlayDrumSound}
                />
                <CurrentInstrument currentInstrument={this.state.currentInstrument} />
            </div>
        );
    }
}

export default DrumContainer;
