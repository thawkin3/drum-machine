import React from 'react';
import './DrumPads.css';
import DrumPad from './DrumPad';

const DrumPads = ({ instruments, clickHandlerToPlayDrumSound }) => {
    return (
        <div className="DrumPads">
            <DrumPad keyName="Q" instrumentName={instruments.q.instrumentName} audioClip={instruments.q.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="W" instrumentName={instruments.w.instrumentName} audioClip={instruments.w.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="E" instrumentName={instruments.e.instrumentName} audioClip={instruments.e.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="A" instrumentName={instruments.a.instrumentName} audioClip={instruments.a.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="S" instrumentName={instruments.s.instrumentName} audioClip={instruments.s.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="D" instrumentName={instruments.d.instrumentName} audioClip={instruments.d.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="Z" instrumentName={instruments.z.instrumentName} audioClip={instruments.z.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="X" instrumentName={instruments.x.instrumentName} audioClip={instruments.x.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
            <DrumPad keyName="C" instrumentName={instruments.c.instrumentName} audioClip={instruments.c.audioClip} clickHandlerToPlayDrumSound={clickHandlerToPlayDrumSound} />
        </div>
    );
}

export default DrumPads;
