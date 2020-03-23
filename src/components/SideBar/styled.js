import styled from 'styled-components';


export const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 250px;
    ${({ open }) =>  !open && `
     width: 25px;
    `}
    background-color: dodgerblue;
    position: fixed;
    transition: width .2s ease; 
    padding: 10px;
    border-top-right-radius: 10px;
    
`
export const SideBarButton = styled.button`
    display: flex;
    height: 25px;
    width: 25px;
    background-color: white;
    cursor: pointer;
    user-select: none;
    font-weight: bold;

`

export const MainNav = styled.nav`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
