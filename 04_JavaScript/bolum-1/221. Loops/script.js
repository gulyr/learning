//  -- for --
// Example - 1
// let sum = 0
// for (let i = 0; i <= 10; i++) {
//   console.log(i)
//   sum += i
// }
// console.log(sum)

// Example - 2
let numbers = [1, 7, 5, 8, 4, 3]
let sum = 0
// for (let index = 0; index < numbers.length; index++) {
//   sum += numbers[index]
// }

// -- for in --
// for (let i in numbers) {
//   sum += numbers[i]
// }

// -- for of --
for (const number of numbers) {
  console.log(number)
  sum += number
}
console.log(`Sum = ${sum}`)

let user = {
  name: 'Aaaa Bbbb',
  username: 'AaBb',
  password: '12345',
  email: 'info@ab.com',
}
for (let key in user) {
  console.log(`${key}: ${user[key]}`)
}
