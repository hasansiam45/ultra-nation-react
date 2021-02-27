import React from 'react';

const Country = (props) => {
    const { name, capital, area, region, flag } = props.countryDetails;
    const addCountryHandler = props.addCountryHandler;
    const countryStyle = {
        border: '1px solid green',
        margin: '15px',
        padding: '15px'
    }
    return (
        <div style={countryStyle}>
            <h3>Name: {name}</h3>
            <h4>Capital: {capital}</h4>
            <img style={{width:'50px'}} src={flag} alt=""/> <br/>
            <button onClick={() => addCountryHandler(props)} style={{padding: '10px 15px', borderRadius: '12px', cursor: 'pointer'}}>Add Country</button>
        </div>
    );
}

export default Country;
