// Do Tasks
let sayilar = [1, 5, 7, 15, 3, 25, 12, 24]

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
// for (const sayi of sayilar) {
//   console.log(`Task-1 result: ${Math.pow(sayi, 2)}`)
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
// for (const sayi of sayilar) {
//   if (sayi % 5 == 0) {
//     console.log(`Task-2 result: ${sayi}`)
//   }
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
// let sum = 0
// for (const sayi of sayilar) {
//   if (sayi % 2 == 0) {
//     sum += sayi
//   }
// }
// console.log(`Task-3 result: ${sum}`)

let urunler = [
  'iphone 12',
  'samsung s22',
  'iphone 13',
  'samsung s23',
  'samsung s20',
]

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// console.log('Task-4 result:')
// for (const urun of urunler) {
//   console.log(`${urun} - ${urun.toUpperCase()}`)
// }

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let sayi = 0
for (const urun of urunler) {
  if (urun.includes('samsung')) {
    console.log(urun)
    sayi++
  }
}
console.log(`Task-5 result: ${sayi}`)

let ogrenciler = [
  { ad: 'yiğit', soyad: 'bilgi', notlar: [60, 70, 60] },
  { ad: 'ada', soyad: 'bilgi', notlar: [80, 70, 80] },
  { ad: 'çınar', soyad: 'turan', notlar: [10, 20, 60] },
]

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
// tüm öğrencilerin not ortalaması kaçtır?
