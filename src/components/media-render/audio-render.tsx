import React from 'react';
interface IAudioRenderer {
    audioSrc;
}
const AudioRenderer = ({ audioSrc }: IAudioRenderer) => (
    <audio controls className="centered-flex w-full object-cover">
        <track kind="captions" />
        <source src={audioSrc} />
    </audio>
);

export default AudioRenderer;
