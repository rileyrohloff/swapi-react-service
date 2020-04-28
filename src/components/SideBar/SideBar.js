import React from 'react';
import { Bar, SideBarButton, MainNav, MainNavItemsContainer } from './styled';
import NavItems from './../NavItems/NavItem';

const SideBar = ({open, setOpen}) => {
    if (open) {
        return (
            <Bar open={open}>
                <MainNav>
                    <MainNavItemsContainer>
                        <NavItems/>
                    </MainNavItemsContainer>
                </MainNav>
                <SideBarButton onClick={() => setOpen(!open)}>
                    {open ? '<' : '>'}
                </SideBarButton>
            </Bar>
        )
    } else {
        return (
            <Bar open={open}>
                <div></div>
                <SideBarButton onClick={() => setOpen(!open)}>
                    {open ? '<' : '>'}
                </SideBarButton>
            </Bar>
        )
    }
};


export default SideBar; 