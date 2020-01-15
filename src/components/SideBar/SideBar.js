import React from 'react';
import { Bar, SideBarButton } from './styled';
import NavItems from './../NavItems/NavItem';

const SideBar = ({open, setOpen}) => {
    if (open) {
        return (
            <Bar open={open}>
                <ul>
                <NavItems/>
                </ul>
                <SideBarButton onClick={() => setOpen(!open)}>
                    {open ? '<' : '>'}
                </SideBarButton>
            </Bar>
        )
    } else {
        return (
            <Bar open={open}>
                <SideBarButton onClick={() => setOpen(!open)}>
                    {open ? '<' : '>'}
                </SideBarButton>
            </Bar>
        )
    }
};


export default SideBar; 