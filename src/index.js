
// load dom elements first, grab form, set submit event
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        // prevent auto refresh
        e.preventDefault();
        //   form is parent to inputs, we can chain on attribute input id newtastkdescription
        buildTodo(e.target.newtaskdescription.value)
        form.reset()
    })
})
// function to handle form, this function will be invoked above for the submit event, giving it a place to put the input
function buildTodo(todo) {
    // make a dom element P tag to append the input there
    let p = document.createElement('p')
    // make a button with "x" click event that will .remove when clicked
    let button = document.createElement('button')
    button.addEventListener('click', handleDelete)
    button.textContent = "x"
    p.textContent = todo
    p.appendChild(button)
    document.getElementById("list").appendChild(p)
}

// the target of the event is the button
function handleDelete(e) {
    e.target.parentNode.remove()
}