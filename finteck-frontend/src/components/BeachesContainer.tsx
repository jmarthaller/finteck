import React from 'react';
import BeachesTile from './BeachesTile';

interface beachesProps {
    _id: string
    name: string,
    position: string,
    level: string,
    confidenceScore: number,
    mapSRCForIframe: string | null,
}


function BeachesContainer({ beachesData }:any) {

    const allBeaches = beachesData.map((beach: beachesProps) => {
        return <BeachesTile
        key={beach._id}
        name={beach.name}
        position={beach.position}
        level={beach.level}
        confidenceScore={beach.confidenceScore}
        mapSRCForIframe={beach.mapSRCForIframe}
        />
    })

    return (
        <>
            BeachesContainer | 
            {allBeaches}
        </>
    )


}


export default BeachesContainer;