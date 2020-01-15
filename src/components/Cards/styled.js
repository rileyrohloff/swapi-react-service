import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    margin-left: 270px;
    ${({ sideBarOpen }) =>  !sideBarOpen && `
        margin-left: 45px;
    `}
    transition: margin-left .2s ease;

`
export const CardsContainer = styled.div`
    background-color: tomato;
    border-radius: 5px; 
    padding: 10px;
    margin: 10px;
    `