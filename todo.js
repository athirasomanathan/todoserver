function addTodo(todo){
    console.log(todo);
}
let todos=[{id:0, name:"todo0", desc:"todo0 desc"},
{id:1, name:"todo1", desc:"todo1 desc"},
{id:2, name:"todo2", desc:"todo2 desc"},
{id:3, name:"todo3", desc:"todo3 desc"},
]
function addTodo(id){
    todos.push({name:"todo1",desc:"todo1 desc"});
    return todos;
}
function editTodo(id,name,desc){
    let todo=todos.find(function(todo){
        return todo.id==id;
    });
    todo.name=name;
    todo.desc=desc;
    return todo;

}

function deleteTodo(id){
    todos=todos.filter(function(todo){
        return todo.id!=id;
    })
    return todos;
}
function getTodo(){
    return todos;
}
var name="todo";
exports.addTodo=addTodo;
exports.getTodo=getTodo;
exports.name=name;
exports.deleteTodo=deleteTodo;
exports.editTodo=editTodo;