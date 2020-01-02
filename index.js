const express=require('express');//for express
const bodyParser=require('body-parser')//for bodyparser

const todo=require('./todo');
todo.addTodo("todo");
const app=express(); //app as express
app.use(bodyParser.json());//for bodyparser
const port=3001;//port to execute
app.get('/',function(req,res){
    const todos = todo.getTodo();
    res.send(todos);
})
app.get('/add',function(req,res){
    const todos=todo.addTodo();
    res.json(todos);
})
/*
app.get('/delete/:id',function(req,res){
    console.log(req.query.id);
    const todos=todo.deleteTodo(req.query.id);
    res.json(todos);
    //url parameter 
})*/
app.put('/edit/:id',function(req,res){
    const  todos=todo.editTodo(req.params.id,req.body.name,req.body.desc);
        //res.json({message: "edit"});
        res.json(todos);
})
app.delete('/delete',function(req,res){
    console.log(req.query.id,"id");
    const todos=todo.deleteTodo(req.query.id);
    res.json(todos);///delete?id=1 in url, querry parameter
})
app.post('/create',function(req,res){
    console.log(req.body);
    res.json([]);
})
app.listen(port,()=>console.log(`example app listening on port ${port}!`));//not single quotes, its tilde
app.get('/',(req,res)=>{console.log(req.query);//call back function
    //res.send('hello world...');
    res.send(req.query);//sending response
})
