let students = ['Student-1', 'Student-2', 'Student-3']
let result
result = students.length

// array to string
result = students.toString()
result = students.join(' ')

// delete element
// result = students.pop() // son elementi silir ve bu silinen elementi ekrana yazdirir
// result = students.shift() // ilk elementi silir ve bu silinen elementi ekrana yazdirir

// add element
// result = students.push('Student-4') // array-in sonuna element elave edir
// result = students.unshift('Student-4') // array-in evveline element elave edir

let brends1 = ['Mazda', 'Toyota']
let brends2 = ['Opel', 'Renault']
let brends3 = ['Mercedes']
// result = brends1.concat(brends2, brends3)
// result = brends1.splice(0, 0, brends2) // 0-ci indexden baslayaraq brand2-ni elave edir
// result = brends1.splice(0, 1, 'BMW', 'Audi')
// result = brends1.splice(0, 1) // 0-ci indexden baslayaraq bir element silir
console.log(result)
// console.log(students)
console.log(brends1)
