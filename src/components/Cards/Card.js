import React, { useState } from 'react';
import { CardWrapper, CardsContainer } from './styled';
import GET_ALL_FILMS from '../../apollo/queries/getMovies';
import { useQuery } from '@apollo/react-hooks';

const Cards = ({sidebar}) => {
    const {loading, error, data} = useQuery(GET_ALL_FILMS);
    const [ display, setDisplay ] = useState(true)
    if (loading) return <p>Loading...</p>;
    
    if (error) {
      console.log(error);
      
      return <p>Error... </p>
    }
    data.allFilms.films.sort((a, b) => a.episodeID - b.episodeID);
    const filmData = data.allFilms.films.map(({title, episodeID, releaseDate, id}) => {

      if (display !== true) {
       return(
        <CardsContainer key={episodeID}>
          <p>{title}</p>
          <p>{episodeID}</p>
          <p>releaseDate</p>
          <p>id</p>
        </CardsContainer>
       )
      } else {
        return (
          <CardsContainer key={episodeID}>
          <p>{title}</p>
        </CardsContainer>
        )
      }
    });
    return <CardWrapper onClick={() => setDisplay(!display)} sideBarOpen={sidebar}>{filmData}</CardWrapper>
};

export default Cards;