var todos = ['Buy New Turtle'];

var input = prompt("What would you like to do?")

while (input !== "quit") {
    //hanlde input
    if (input === "list") {
        listTodos()
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app")

listTodos = () => {
    console.log("**********")
    todos.forEach((todo, i) => {
        console.log(i + ": " + todo)
    })
    console.log("**********")
}

addTodo = () => {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todo.push(newTodo)
}

deleteTodo = () => {
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index, 1)
}

