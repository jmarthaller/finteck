import React from 'react';
import BeachesTile from './BeachesTile';


function BeachesContainer({ beachesData }:any) {

    const allBeaches = beachesData.map((beach: any) => {
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
            {/* {allBeaches} */}
        </>
    )


}


export default BeachesContainer;