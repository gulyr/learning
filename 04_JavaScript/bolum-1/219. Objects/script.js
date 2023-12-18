// let user1 = ['Name1', 'Surname1', 20]
// let user2 = ['Name2', 'Surname2', 25]

// dict, json
let result
let user1 = {
  name: 'Name1',
  lastname: 'Surname1',
  age: 20,
  address: {
    country: 'Azerbaijan',
    city: 'Baku',
  },
  hobbies: ['cinema', 'sport'],
}
let user2 = {
  name: 'Name2',
  lastname: 'Surname2',
  age: 20,
  address: {
    country: 'Azerbaijan',
    city: 'Sumgait',
  },
  hobbies: ['chess', 'music'],
}

result = user1.name
result = user1['lastname']
result = user1.address.country
result = user1.address.city
result = user1.hobbies[0]
result = user1.hobbies[1]
console.log(result)

let users = [user1, user2]
result = users[0]
result = users[1].name
console.log(users)
console.log(result)

let products = [
  { productName: 'Iphone', price: 3000 },
  { productName: 'Samsung', price: 2000 },
]
result = products[1].productName
console.log(result)
