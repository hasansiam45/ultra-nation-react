import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    const totalPopulation = cart.reduce((sum, country) => sum + country.countryDetails.population, 0);
    let totalCountryAdded = [];
    for (let i = 0; i < cart.length; i++){
        const country = cart[i].countryDetails.name;
        totalCountryAdded.push(country, ' . ');
    }

    return (
        <div style={{border: '1px solid yellow', borderRadius: '15px'}}>
            <h2>Cart : {cart.length}</h2>
            <h4>Country added: {totalCountryAdded}</h4>
            <h2>Total population: {totalPopulation}</h2>
        </div>
    );
}

export default Cart;
