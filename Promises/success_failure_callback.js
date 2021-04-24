'use strict';

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(resolved){
  console.log(resolved);
}

function handleFailure(failure){
  console.log(failure);
}

checkInventory(order).then(handleSuccess,handleFailure);



