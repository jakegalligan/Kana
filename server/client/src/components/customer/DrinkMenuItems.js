import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Drink from './Drink'
const DrinkMenuItems = () => {

    //go through array of drinks and render them accordingly

    const RenderDrinks = () => {
        return testDate.map((drink) => {
            return <p>{drink.name}</p>
        })
    }
    return (
        <div>
         {RenderDrinks()}
         <Drink />   
        </div>
    )
}


const testDate = [{
    name: 'Red wine',
    price: '10',
    Ounces: '4',
    description: 'feafeawfeafae from italy befuatiflly crafted'
}]

export default DrinkMenuItems;