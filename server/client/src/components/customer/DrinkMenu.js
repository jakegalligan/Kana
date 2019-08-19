import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DrinkCategories from './DrinkCategories'
import DrinkMenuItems from './DrinkMenuItems';
import OrderSubmitBar from './OrderSubmitBar';
import Modal from './OrderModal'

const Menu = () => {
    return (
        <div>
            <Link to='/'>Back </Link>
            <DrinkCategories />
            <DrinkMenuItems />
            <OrderSubmitBar />
        </div>
    )
}

export default Menu;