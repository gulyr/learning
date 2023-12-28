// -- 1 --
// function selamlama() {
//   console.log('Hello')
// }
// selamlama()

// -- 2 --
// function selamlama(msg) {
//   console.log(msg)
// }
// selamlama('Hello')

// -- 3 --
function yashesapla(dogumyili) {
  return new Date().getFullYear() - dogumyili
}
// console.log(yashesapla(1996))

// -- 4 --
function emekliliyekacyilkaldi(dogumyili, isim) {
  let yas = yashesapla(dogumyili)
  if (yas < 65) {
    console.log(`${isim}, emekliliye ${65 - yas} yil kaldi`)
  } else {
    console.log(`${isim}, emekli oldunuz`)
  }
}
emekliliyekacyilkaldi(1996, 'Aaaa')
emekliliyekacyilkaldi(1950, 'Bbbb')
