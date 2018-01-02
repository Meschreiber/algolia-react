import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

const app = document.getElementById('app');

let location = {};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    location = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
  });
}

ReactDOM.render(<Search location={location} />, app);
