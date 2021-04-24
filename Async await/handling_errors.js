'use strict';

const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty(){
  try{
    let risultato = await cookBeanSouffle();
    console.log(risultato+" is served!");
  }catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();




