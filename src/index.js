'use strict'
//Given: number, your task is to implement function that reverse digits of this number.
function reverse (n) {
    return +n.toString().split('').reverse().join('');
  }