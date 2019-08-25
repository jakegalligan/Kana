import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import DrinkCategories from './DrinkCategories'
import DrinkMenuItems from './DrinkMenuItems';
import OrderSubmitBar from './OrderSubmitBar';
import HeaderBar from '../shared/HeaderBar'

const Menu = (props) => {
    
    return (
        <div>
            <HeaderBar />
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