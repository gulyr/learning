let url = 'https://www.sadikturan.com'
let kursAdi = 'Komple Web Geliştirme Kursu'

// 1- url kaç karakterlidir?
// console.log(url.length)

// 2- kursAdi kaç kelimeden oluşmaktadır?

// 3- url https ile mi başlıyor?
// console.log(url.startsWith('https'))

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
// console.log(kursAdi.includes('Eğitimi'))

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
// https://www.sadikturan.com/komple-web-gelistirme-kursu
console.log(url.concat('/', kursAdi.toLowerCase().replaceAll(' ', '-')))
