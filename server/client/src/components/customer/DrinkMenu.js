import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import DrinkCategories from './DrinkCategories'
import DrinkMenuItems from './DrinkMenuItems';
import OrderSubmitBar from './OrderSubmitBar';

const Menu = (props) => {
    
    return (
        <div>
            <DrinkCategories />
            <DrinkMenuItems  />
            {props.cart.length>0? <OrderSubmitBar />: ''}
        </div>
    )
}

function mapStateToProps(state) {
	return {
		cart : state.cart
	}
}


export default connect(mapStateToProps)(Menu);