document.addEventListener("DOMContentLoaded", () => {
  // your code here
const todoForm = document.getElementById("create-task-form" );
// elements are just objects, pass submit through, then the handleSubmit function will be invoked
todoForm.addEventListener('submit', handleSubmit);

  
});
function handleSubmit(event) {
  event.preventDefault();
console.log(event.target.taskDescription.value)

const taskList = document.getElementById('tasks ');
const task = document.createElement('li');
task.textContent = event.target.taskDescription.value;
taskList.append(task);
}
