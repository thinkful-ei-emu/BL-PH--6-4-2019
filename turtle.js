'use strict';
let turtleMoves=[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function getBackOnlyBothPositive(moveset){
  return moveset.filter( coord => { 
    if(coord[0]<0 || coord[1]<0){
      return false;
    }
    return true;
  });
}

function totalStepsForEachMove(moveset){
  return moveset.map( coord => Math.abs(coord[0]) +Math.abs(coord[1])   );
}


function printTotalStepsForEachMove(moveset){
  moveset.forEach( (coord,index) => {
    console.log(`Movement #${index+1}: ${Math.abs(coord[0]) +Math.abs(coord[1])} steps` )
  });
}


console.log(getBackOnlyBothPositive(turtleMoves));
console.log(totalStepsForEachMove(turtleMoves));
printTotalStepsForEachMove(turtleMoves);