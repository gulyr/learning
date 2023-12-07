// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

let sum,
  subtraction,
  multiplication,
  division,
  mod,
  increment,
  decrement,
  result
let a = 10,
  b = 20,
  c = 30
// 1 - Arithmetic Operators
sum = a + b
subtraction = a - b
multiplication = a * b
division = a / b
mod = c % a
increment = a++ // (ilk olaraq a-nin qiymeti increment-e beraberlesdirilir, daha sonra a-nin qiymeti 1 vahid artir)
// increment = ++a // (ilk olaraq a-nin qiymeti 1 vahid artir, daha sonra a-nin qiymeti increment-e beraberlesdirilir)
decrement = a--
// decrement = --a

console.log('Sum = ' + sum)
console.log('Subtraction = ' + subtraction)
console.log('Multiplication = ' + multiplication)
console.log('Division = ' + division)
console.log('Mod = ' + mod)
console.log('Increment = ' + increment)
console.log('Decrement = ' + decrement)

// 2 - Assignment Operators
result = a
result += a // result = result + a
result -= a // result = result - a
result *= a // result = result * a
result /= a // result = result / a
result %= a // result = result % a

// 3 - Comparison Operators
result = a == b
result = a != b
result = a === b // data type and value are comparised
result = a > b
result = a < b
result = a >= b
result = a <= b
