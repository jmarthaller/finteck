import { Progress } from '@chakra-ui/react';

function BeachesTile({ _id, name, position, level, confidenceScore, mapSRCForIframe }: any) {

    return (
        <>
        <h1>{name}</h1>
        <h3>{position}</h3>
        <br />
        <h3>Likelihood of Shark Attack</h3>
        <iframe src={mapSRCForIframe}></iframe>
        <Progress value={confidenceScore * 100} hasStripe={true}  />
        </>
    )


}


export default BeachesTile;