let result
result = document.getElementsByClassName('task')[0]
result = document.getElementsByClassName('task')[1]

// taskList = document.getElementsByClassName('task')
// ul = document.getElementById('task-list')
// taskList = ul.getElementsByTagName('li')

taskList = document.querySelectorAll('#task-list li')

// for (let i = 0; i < taskList.length; i++) {
//   console.log(taskList[i])
// }

for (const task of taskList) {
  task.style.color = 'red'
  task.style.fontSize = '30px'
  //   task.innerText = 'Item'
}
// console.log(result)
