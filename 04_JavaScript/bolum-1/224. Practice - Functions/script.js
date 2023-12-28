// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
// function writeword(word, count) {
//   for (let index = 0; index < count; index++) {
//     console.log(word)
//   }
// }
// console.log('Task-1 result:')
// writeword('Aaaa', 5)

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
// function findperimeterandarea(a, b) {
//   let perimeter, area
//   perimeter = 2 * (a + b)
//   area = a * b
//   return `Perimeter = ${perimeter}; Area = ${area}`
// }
// let result = findperimeterandarea(4, 5)
// console.log(`Task-2 result: ${result}`)

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
// function convertnumbertoarray(number) {
//   let array = []
//   for (let index = 2; index < number; index++) {
//     if (number % index == 0) {
//       array.push(index)
//     }
//   }
//   return array
// }
// console.log('Task-4 result:')
// console.log(convertnumbertoarray(50))

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam() {
  let result = 0
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}
console.log(toplam(2, 5, 6, 7))
