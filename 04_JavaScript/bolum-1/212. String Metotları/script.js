let text = '   Aaaa Bbbb Cccc Dddd '
let result
result = text.toLowerCase()
result = text.toUpperCase()
result = text.length
result = text[0]
result = text.slice(0, 4)
result = text.slice(10)
result = text.substring(0, 4)
result = text.substring(10)
result = text.replace('Cccc', 'Abcd')
result = text.trim()
result = text.trimStart()
result = text.trimEnd()
result = text.indexOf('Cccc')
result = text.split(' ')
// result = text.split(' ')[0]
console.log(result)
