import React, { useState } from 'react';
import { InfoContainer } from './styled';



const CardData = ({title, id, releaseDate, episodeID}) => {
    const [ show, setShow ] = useState(false);

    if (show) {
        return (
            <InfoContainer onClick={() => setShow(false)}>
                <p>{title}</p>
                <p>{id}</p>
                <p>{releaseDate}</p>
                <p>{episodeID}</p>
            </ InfoContainer>
        )
    } else {
        return (
            <InfoContainer onClick={() => setShow(true)} >
                <p>{title}</p>
                <p>{episodeID}</p>
            </InfoContainer>
        )
    }
};

export default CardData;