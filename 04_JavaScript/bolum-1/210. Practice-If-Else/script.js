// 1 - Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
// let number = 20
// if (number >= 10 && number <= 50) {
//   console.log(number + ' is from 10-50 range')
// } else {
//   console.log(number + ' is not from 10-50 range')
// }

// 2 - Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
// let number = -15
// if (number > 0 && number % 2 != 0) {
//   console.log(number + ' is positive odd number')
// } else if (number < 0 && number % 2 != 0) {
//   console.log(number + ' is negative odd number')
// } else if ((number > 0 || number < 0) && number % 2 == 0) {
//   console.log(number + ' is not odd number')
// } else {
//   console.log(number + ' == 0')
// }

// 3 - x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)
let x = 10,
  y = 50,
  z = 30
if (x > y && x > z) {
  console.log('x is maximum')
} else if (y > x && y > z) {
  console.log('y is maximum')
} else if (z > x && z > y) {
  console.log('z is maximum')
} else {
  console.log('Numbers are equal')
}
// 4 - 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
// a - Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
// b - Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c - Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.
