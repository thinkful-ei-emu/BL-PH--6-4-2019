'use strict';

function repeat(fn, n){
  for (let i=0; i<n; i++){
    fn();
  }
}

function hello(){
  console.log('hello');
}

function goodbye(){
  console.log('goodbye');
}

repeat(hello, 5);