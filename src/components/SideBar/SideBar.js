import React, { useState } from 'react';
import { Bar, SideBarButton, MainNav, MainNavItemsContainer } from './styled';
import NavItems from './../NavItems/NavItem';


const SideBar = ({open, setOpen}) => {

    const [ delay, setDelay ] = useState(true);

    const handleClick = () => {
        setOpen(!open)

        if (open) {
            setDelay(false)

            setTimeout(() => setDelay(true), 150)
        }
    };

    return(
        <Bar open={open}>
            <SideBarButton onClick={() => handleClick()}>
                        {open ? '<' : '>'}
        </SideBarButton>
            {
                (open || !delay) && (
                    
                    <MainNav>
                        <MainNavItemsContainer>
                            <NavItems/>
                        </MainNavItemsContainer>
                    </MainNav>
                )
        }
        </Bar>
        )
};

export default SideBar; 