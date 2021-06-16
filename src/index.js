document.addEventListener("DOMContentLoaded", () => {
  let taskInputForm = document.getElementById('create-task-form')
  let newTaskInputBox = document.getElementById('new-task-description')
  let taskHolderBox = document.getElementById('tasks')

  taskInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let taskList = document.createElement('li');
    let newTask = newTaskInputBox.value;
    taskList.innerText = newTask;
    taskHolderBox.append(taskList);
  }
  )
}
)

