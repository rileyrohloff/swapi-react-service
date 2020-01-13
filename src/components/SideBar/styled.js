import styled from 'styled-components';


export const Bar = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 250px;
    ${({ open }) =>  !open && `
     width: 25px;
    `}
    background-color: dodgerblue;
    position: fixed;
    transition: width .2s ease; 
    padding: 10px;
    
`
export const SideBarButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    background-color: white;
    cursor: pointer;
    user-select: none;
    font-weight: bold;

`