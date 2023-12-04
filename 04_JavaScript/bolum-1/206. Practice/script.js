/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

// Number()
// parseInt()

let currentDate = new Date().getFullYear()

let st1Name = 'Yiğit'
let st1Surname = 'Bilgi'
let st1BirthDate = 2012
let st1MathNote1 = 70
let st1MathNote2 = 70
let st1MathNote3 = 80
let st1Age = currentDate - st1BirthDate
let st1NoteAvarage = (st1MathNote1 + st1MathNote2 + st1MathNote3) / 3

let st2Name = 'Ada'
let st2Surname = 'Bilgi'
let st2BirthDate = 2010
let st2MathNote1 = 40
let st2MathNote2 = 40
let st2MathNote3 = 50
let st2Age = currentDate - st2BirthDate
let st2NoteAvarage = (st2MathNote1 + st2MathNote2 + st2MathNote3) / 3

console.log('Student 1 : ' + st1Name + ' ' + st1Surname)
console.log('Age = ' + st1Age)
console.log('Note Avarage = ' + parseInt(st1NoteAvarage))
console.log('Successful Or Not = ' + (st1NoteAvarage >= 50))

console.log('Student 2 : ' + st2Name + ' ' + st2Surname)
console.log('Age = ' + st2Age)
console.log('Note Avarage = ' + parseInt(st2NoteAvarage))
console.log('Successful Or Not = ' + (st2NoteAvarage >= 50))
