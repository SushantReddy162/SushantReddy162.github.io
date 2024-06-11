import React from 'react';
import './styles.css';
import moment from 'moment';

const CardExampleCard = ({ weatherdata }) => (
    <div className="weather-card">
        <div className="header">City Name: {weatherdata.name}</div>
        <p>Temperature: <span>{weatherdata.main.temp}&deg;C</span></p>
        <p>Sunrise: <span>{new Date(weatherdata.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</span></p>
        <p>Sunset: <span>{new Date(weatherdata.sys.sunset * 1000).toLocaleTimeString('en-IN')}</span></p>
        <p>Description: <span>{weatherdata.weather[0].description}</span></p>
        <p>Humidity: <span>{weatherdata.main.humidity} %</span></p>
        <p>Day: <span>{moment().format('dddd')}</span></p>
        <p>Date: <span>{moment().format('LL')}</span></p>
    </div>
);

export default CardExampleCard;
