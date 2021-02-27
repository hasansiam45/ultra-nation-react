import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() =>  {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
    
  }, [])

  const addCountryHandler = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }
  return (
    <div className="App">
     
      <header>
              <h1>All Countries</h1>
              
      <h3>Country Loaded: {countries.length} </h3>
      <h4>Country Added: {cart.length}</h4>

      <Cart cart={cart}></Cart>
      
      {
       
        countries.map(country => <Country addCountryHandler={addCountryHandler} countryDetails={country}></Country> )
      }
         
      </header>
          
  
    </div>
  );
}

export default App;
