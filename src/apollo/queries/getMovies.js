import { gql } from 'apollo-boost';


const GET_ALL_FILMS = gql`
    {
        allFilms {
            films {
            title
            episodeID
            releaseDate
            id
        }
        }
    }
`


export default GET_ALL_FILMS;