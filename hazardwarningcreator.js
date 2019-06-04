'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER!!!, There is a ${typeOfWarning} hazard at ${location} !!!`);
    console.log(`the ${typeOfWarning} hazard alert, has triggered ${warningCounter} times today!!`);
  };
}

let warningOne = hazardWarningCreator('firestorm');
warningOne('USA');
let warningTwo = hazardWarningCreator('Godzilla');
warningTwo('JAPAN');
let warningThree = hazardWarningCreator('Tsunami');
warningThree('Hong Kong');
warningOne('JAPAN');
warningThree('JAPAN');
