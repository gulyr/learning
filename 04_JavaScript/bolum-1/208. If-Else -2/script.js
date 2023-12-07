// age >= 18
// education == 'bachelor' or education == 'master
let age = 20
let education = 'bachelor'
if (age >= 18 && (education == 'bachelor' || education == 'master')) {
  console.log('Passport can be given')
} else {
  console.log('Passport can not be given')
}
//  and - &&
//  true, true => true
//  true, false => false

// or
// true, true => true
// true, false => true
// false, false => false
