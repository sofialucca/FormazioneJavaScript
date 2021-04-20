'use strict';
// Write your code below
let bobsFollowers=['Andrea','Sofia','Luca','Anna'];
let tinasFollowers=['Sofia','Anna','Margherita'];

let mutualFollowers =[];

for(let i=0;i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
    if(tinasFollowers[j]===bobsFollowers[i]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

