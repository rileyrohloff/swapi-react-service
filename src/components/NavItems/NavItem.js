import React from 'react';
import { NavItem } from './styled';

const NavItems = () => {
    const navItems = ['Ships', 'Movies', 'Races'];
    const data = navItems.map(i => {
        return (   
            <NavItem>{i}</NavItem>
        )
    })
return data
};


export default NavItems;