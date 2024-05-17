// Synchronous Example

console.log('Step 1');
console.log('Step 2');
console.log('Step 3');

// This code executes each step in order, one at a time. 




//Asynchronous Example using Callbacks

console.log('Step 1');
setTimeout(function() {
  console.log('Step 2');
}, 2000);
console.log('Step 3');

// This code executes Step 1 and Step 3 immediately, but Step 2 is delayed by 2 seconds using setTimeout. The output will be
