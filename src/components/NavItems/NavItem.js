import React from 'react';
import { NavTitle } from './styled';

const NavItems = () => {
    const navItems = ['Ships', 'Movies', 'Races'];
    const data = navItems.map(i => {
        return (   
        <NavTitle>{i}</NavTitle>
        )
    })
return data
};


export default NavItems;