import React from 'react';
// import SharkBar from './SharkBar';

function BeachesTile({ _id, name, position, level, confidenceScore, mapSRCForIframe }: any) {

    return (
        <>
        <h1>{name}</h1>
        <h3>{position}</h3>
        <p>{confidenceScore}</p>
        <iframe src={mapSRCForIframe}></iframe>
        </>
    )


}


export default BeachesTile;