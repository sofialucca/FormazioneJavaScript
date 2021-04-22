'use strict';

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for(let crewNave in spaceship.crew){
  console.log(`${crewNave}: ${spaceship.crew[crewNave].name}`);
}

for(let crewNave in spaceship.crew){
  console.log(`${spaceship.crew[crewNave].name}: ${spaceship.crew[crewNave].degree}`)
}