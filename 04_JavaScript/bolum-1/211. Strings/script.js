let name = 'Aaa'
let surname = 'Bbb'
let age = 25
let city = 'Baku'

// let msg ='My name ' + name + ' and my surname ' + surname + '.' + 'I live in ' + city + '.'

// backtick => ``
let msg = `My name ${name} and my surname ${surname}. I live in ${city}.`

// ternary operators => condition ? exprIfTrue : exprIfFalse
let retiredAge =
  65 - age > 0 ? 'Remaning age to retired ' + (65 - age) : 'Retired age'
msg = `My name ${name} and my surname ${surname}. I live in ${city}. ${retiredAge}`
console.log(msg)
