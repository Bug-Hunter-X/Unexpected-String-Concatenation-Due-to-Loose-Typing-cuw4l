function myFunction(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(myFunction(5, '5')); // Output: Error: Inputs must be numbers
console.log(myFunction(5, 5)); // Output: 10

//Alternative using Number() for type conversion
function myFunction2(a,b){
    return Number(a) + Number(b);
}
console.log(myFunction2(5, '5')); // Output: 10