import React, { Fragment } from 'react';
import './DrumPad.css';

const DrumPad = ({ keyName, audioClip, clickHandlerToPlayDrumSound }) => {
    return (
        <Fragment>
            <div
                className="DrumPad"
                id={keyName}
                onClick={() => clickHandlerToPlayDrumSound(keyName)}
            >
                {keyName}
            </div>
            <audio
                src={audioClip}
                id={`audio${keyName}`}
            >
                Your browser does not support the audio element
            </audio>
        </Fragment>
    );
}

export default DrumPad;
