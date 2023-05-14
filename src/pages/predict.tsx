import React from 'react';
import Waveform from '../components/wavesurfer/waveform';
import Layout from '../layout/_layout';

const Predict = () => {
    return (
        <div>
            <p className="font-medium text-center lg:text-3xl text-xl">Import sound to get information about recorded Bird sound.</p>
            <Waveform />
        </div>
    );
};

Predict.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default Predict;
