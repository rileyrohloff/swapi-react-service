import React from 'react';
import { CardWrapper, CardsContainer } from './styled';
import GET_ALL_FILMS from '../../apollo/queries/getMovies';
import { useQuery } from '@apollo/react-hooks';

const Cards = ({sidebar}) => {
    const {loading, error, data} = useQuery(GET_ALL_FILMS);
    if (loading) return <p>Loading...</p>;
    
    if (error) {
      console.log(error);
      
      return <p>Error... </p>
    }

    const filmData = data.allFilms.films.map(({title, episodeID, releaseDate}) => {
       return(
        <CardsContainer key={episodeID}>
            <p>{title}</p>
       <p>{episodeID}</p>
        </CardsContainer>
       )
    })
    return <CardWrapper sideBarOpen={sidebar}>{filmData}</CardWrapper>
};

export default Cards;