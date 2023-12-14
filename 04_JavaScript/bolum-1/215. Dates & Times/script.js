let now = new Date() // hal-hazirki tarix ve saat
let result

// Get Methods
result = now
result = now.getDate() // day
result = now.getDay() // 0 - Sunday, 6 - Saturday
result = now.getFullYear() // year
result = now.getTime()
result = now.getHours()

// Set Methods
// now.setFullYear(2025)
now.setMonth(7) // 0 - January
now.setDate(15)
result = now

let birthday = new Date(1990, 5, 15)
result = now.getFullYear() - birthday.getFullYear()
let msecond = now - birthday
let second = msecond / 1000
let minute = second / 60
let hour = minute / 60
let day = hour / 24
result = day

console.log(result)
console.log(typeof result)
