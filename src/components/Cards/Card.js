import React from 'react';
import { CardWrapper } from './styled';
import CardData from '../CardData/CardData';
import GET_ALL_FILMS from '../../apollo/queries/getMovies';
import { useQuery } from '@apollo/react-hooks';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Cards = ({sidebar}) => {
    const {loading, error, data} = useQuery(GET_ALL_FILMS);
    if (loading) return <LoadingSpinner/>;
    
    if (error) {
      console.log(error);
      
      return <p>Error... </p>
    }
    data.allFilms.films.sort((a, b) => a.episodeID - b.episodeID);
    const filmData = data.allFilms.films.map(({title, episodeID, releaseDate, id}) => {
       return(
          <CardData
          episodeID={episodeID}
          title={title}
          releaseDate={releaseDate}
          id={id}
          data-testid={`star-wars-${episodeID}`}
          key={episodeID}
          />
       )
    });
    return <CardWrapper sideBarOpen={sidebar}>{filmData}</CardWrapper>
};

export default Cards;