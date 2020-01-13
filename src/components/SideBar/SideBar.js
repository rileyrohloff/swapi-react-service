import React from 'react';
import { Bar, SideBarButton } from './styled';

const SideBar = ({open, setOpen}) => {

    return (
        <Bar open={open}>
            <SideBarButton onClick={() => setOpen(!open)}>
                {open ? '<' : '>'}
            </SideBarButton>
        </Bar>
    )
};


export default SideBar; 