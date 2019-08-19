import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DrinkCategories from './DrinkCategories'
import MenuItems from './DrinkMenuItems'

const Menu = () => {
    return (
        <div>
            <Link to='/'>Back </Link>
            <DrinkCategories />
            <MenuItems />
        </div>
    )
}

export default Menu;