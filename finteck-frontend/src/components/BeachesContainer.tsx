import React from 'react';
import BeachesTile from './BeachesTile';

interface beachesProps {
    _id: string
    name: string,
    position: string,
    level: string
}


function BeachesContainer({ beachesData }:any) {

    const allBeaches = beachesData.map((beach: beachesProps) => {
        return <BeachesTile
        key={beach._id}
        name={beach.name}
        position={beach.position}
        level={beach.level}
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