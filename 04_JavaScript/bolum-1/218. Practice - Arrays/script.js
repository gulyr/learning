// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let fruits = ['Elma', 'Armut', 'Muz', 'Cilek']

// 2- Dizi kaç elemanlıdır?
let result1 = fruits.length
console.log(`result1 = ${result1}`)

// 3- Dizinin ilk ve son elemanı nedir?
console.log(
  `First element - ${fruits[0]}, Last element - ${fruits[fruits.length - 1]}`
)

// 4- Elma dizinin bir elemanımıdır?
console.log(fruits.includes('Pomegranate'))

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
// fruits[fruits.length] = 'Kiraz' // way:1
let result2 = fruits.push('Kiraz') // way:2
console.log(`result2 = ${result2}`)
console.log(fruits)

// 6- Dizinin son 2 elemanını siliniz.
let result3 = fruits.splice(fruits.length - 2, 2)
console.log(`result3 = ${result3}`)
console.log(fruits)

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
    Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
    Öğrenci 2: Ada Bilgi 2012   (80,80,90)
    Öğrenci 3: Ahmet Turan 2009 (60,60,70)
*/
let student1 = ['Yiğit', 'Bilgi', 2010, [70, 60, 80]]
let student2 = ['Ada', 'Bilgi', 2012, [80, 80, 90]]
let student3 = ['Ahmet', 'Turan', 2009, [60, 60, 70]]
let students = [student1, student2, student3]
console.log(`Students: ${students}`)

// Her öğrencinin yaşı
let age_student1 = new Date().getFullYear() - student1[2]
let age_student2 = new Date().getFullYear() - student2[2]
let age_student3 = new Date().getFullYear() - student3[2]
console.log(
  `age_student1: ${age_student1}; age_student2: ${age_student2}; age_student3: ${age_student3}`
)

// Her öğrencinin not ortalaması
let avg_student1 = (student1[3][0] + student1[3][1] + student1[3][2]) / 3
let avg_student2 = (student2[3][0] + student2[3][1] + student2[3][2]) / 3
let avg_student3 = (student3[3][0] + student3[3][1] + student3[3][2]) / 3

console.log(
  `avg_student1: ${avg_student1.toFixed(
    1
  )}; avg_student2: ${avg_student2.toFixed(
    1
  )}; avg_student3: ${avg_student3.toFixed(1)}`
)
