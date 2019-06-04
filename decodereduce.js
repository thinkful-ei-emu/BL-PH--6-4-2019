'use strict';

const wordsArray = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(' ');
const newString = wordsArray.reduce((accumulatedString, currentWord) => {
  if (currentWord.length === 3){
    return accumulatedString += ' ';
  }
  else {
    return accumulatedString += (currentWord[currentWord.length - 1]).toUpperCase();
  }
} , ''
);
console.log(newString);