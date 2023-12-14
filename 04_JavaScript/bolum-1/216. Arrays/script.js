// let product1 = 'iphone 12'
// let product2 = 'iphone 13'
// let product3 = 'iphone 14'

let products = ['iphone 12', 'iphone 13', 'iphone 14']
let prices = [9000, 12000, 20000]
let colors = ['gold', 'black', 'gray']

let product1 = ['iphone 12', 9000, 'gold']
let product2 = []
product2[0] = 'iphone 12'
product2[1] = 12000
product2[2] = 'black'
let product3 = ['iphone 14', 20000, ['black', 'white', 'blue']]
console.log(product3[2])
console.log(product3[2][1])
console.log(typeof product3[2])

console.log(products[1])
console.log(`${products[0]} - ${prices[0]} - ${colors[0]}`)
console.log(`${products[1]} - ${prices[1]} - ${colors[1]}`)
console.log(`${products[2]} - ${prices[2]} - ${colors[2]}`)

let coursename = 'Aaaa Bbbb Cccc Dddd'
console.log(coursename[2])
console.log(coursename.split(' '))
console.log(coursename.split(' ')[1])
