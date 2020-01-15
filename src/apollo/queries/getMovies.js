import { gql } from 'apollo-boost';


const GET_ALL_FILMS = gql`
    {
        allFilms {
            films {
            title
            episodeID
            releaseDate
        }
        }
    }
`


export default GET_ALL_FILMS;