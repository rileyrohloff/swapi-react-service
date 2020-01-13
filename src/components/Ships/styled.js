import styled from 'styled-components';

export const ShipsWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    margin-left: 270px;
    ${({ sideBarOpen }) =>  !sideBarOpen && `
        margin-left: 45px;
    `}
    transition: margin-left .2s ease;

`

export const ShipContainer = styled.div`
    background-color: tomato;
    border-radius: 5px; 
    padding: 10px;
    margin: 10px;
`

export const ShipName = styled.p`
    font-weight: bold;
    color: white;
`

export const HyperRating = styled.p`
    font-weight: bold;
    color: blue;
`