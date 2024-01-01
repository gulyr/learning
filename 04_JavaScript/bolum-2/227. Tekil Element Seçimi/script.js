let result
result = document.getElementById('title')
result = document.getElementById('title').id
result = document.getElementById('title').className
result = document.getElementById('title').classList

document.getElementById('title').style.fontSize = '50px'
document.getElementById('title').style.color = 'blue'
// document.getElementById('title').style.display = 'none'

document.getElementById('title').innerText = 'ToDo App'
document.getElementById('title').innerHTML = '<p>ToDo App</p>'

result = document.querySelector('#title')
result = document.querySelector('.card-header')
result = document.querySelector('div')

result = document.querySelector('li')
result = document.querySelector('li:first-child')
result = document.querySelector('li:last-child')
result = document.querySelector('li:nth-child(2)')

console.log(result)
