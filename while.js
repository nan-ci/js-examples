'use strict'

/*
  while

  While is the first loop statement that we will learn to use.
  It allows you to repeat a block of code while the condition is truthy.

  Here is the basic syntax :
  while (condition) {
    // code
  }
 */

// The most common while loop is a simple counter
let count = 0 // `count` value will change so it needs to be declared with let !

while (count < 10) {
  count = count + 1 // we update the value of count to it's previous value + 1
  console.log('counter at', count)
  // Here we can add all the code we want to repeat !
}

// Let's create a function that add the given argument 5 times with while
const times5 = n => {
  let result = 0
  let count = 0

  while (count < 5) {
    count = count + 1
    result = result + n
  }

  return result
}
