import { gql } from 'apollo-boost';


const ALL_STARSHIPS = gql`
    {
        allStarships {
            starships {
                name,
                id,
                hyperdriveRating
            }
        }
    }
`

export default ALL_STARSHIPS;