import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ALL_STARSHIPS from '../../apollo/queries/getShips';
import { ShipContainer, ShipName, HyperRating, ShipsWrapper } from './styled';

const Ships = ({ sideBarOpen }) => {
    const {loading, error, data} = useQuery(ALL_STARSHIPS);
    if (loading) return <p>Loading...</p>;
    
    if (error) {
      console.log(error);
      
      return <p>Error... </p>
    }

    const cards = data.allStarships.starships.map(({id, name, hyperdriveRating}) => (
      <ShipContainer key={id}>
        <ShipName>{id}: {name}</ShipName>
        <HyperRating>Speed: {hyperdriveRating}</HyperRating>
      </ShipContainer>
    ));

    return <ShipsWrapper sideBarOpen={sideBarOpen}>{cards}</ShipsWrapper>
  }

  export default Ships; 