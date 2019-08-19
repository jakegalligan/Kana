import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DrinkCategories from './DrinkCategories'
import MenuItems from './DrinkMenuItems';
import OrderPopUp from './OrderPopUpMenu';

const Menu = () => {
    return (
        <div>
            <Link to='/'>Back </Link>
            <DrinkCategories />
            <MenuItems />
            <OrderPopUp />
        </div>
    )
}

export default Menu;