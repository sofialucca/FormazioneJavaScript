'use strict';

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  function greenEnergy(oggetto){
    oggetto['Fuel Type']='avocado oil';
  }
  
  function remotelyDisable(oggetto){
    oggetto.disabled=true;
  }
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);