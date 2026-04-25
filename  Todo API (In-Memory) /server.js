/**
 * TODO API (Node.js + Express)
 *
 * This project demonstrates building a RESTful API from scratch
 * without using a database (in-memory array used for storage).
 *
 * Key Learnings:
 * - REST API design (CRUD operations)
 * - Route handling in Express
 * - Request validation
 * - Dynamic route params
 * - Data manipulation (create, update, delete)
 * - Basic API structuring
 *
 * Note:
 * This is a single-file implementation for learning purposes.
 * In real-world apps, this would be modularized (routes, controllers, services).
 */
const express = require("express")
const app = express()
app.use(express.json());
const todos = [
  { id: 1, title: "Learn Node.js", completed: false, createdAt: "2026-04-23" }
];
app.get('/api/todos',(req,res)=>{
    res.json({todos})
})
app.get("/api/todos/stats",(_,res)=>{
    let total = todos.length
    let completed = todos.filter((e)=>e.completed===true).length
    let pending = todos.filter((e)=>e.completed===false).length
    res.json({total,completed,pending})
})
app.get("/api/todos/:id",(req,res)=>{
    const id = Number(req.params.id)
    let todo = todos.find((elem)=>elem.id === id)
    if(!todo) {
        
        res.status(404).send("user with this id not found")
        return
    }   
    res.json({todo,id})
})
app.post("/api/todos",(req,res)=>{
    const {  title } = req.body
    if( title.length <3 ){
        res.status(400).send("Title must be min 3 characters")
        return
    }
    if(!title){res.status(400).send("tittle is required") 
        return
    }
    let id = todos.length +1 
    let completed = false
    const createdAt = new Date().toISOString().split('T')[0]
    todos.push({id,title,completed,createdAt})
    res.json(todos[id-1])
})

app.put("/api/todos/:id",(req,res)=>{
    const id = Number(req.params.id)
    const { title , completed} = req.body 
  let todo = todos.find((elem)=>elem.id === id)
    if(!todo) {
        
        res.status(404).send("user with this id not found")
        return
    }  
    if(title){ 
        if( title.length <3 ){
        res.status(400).send("Title must be min 3 characters")
        return
    }
        todo.title = title

    }
    if(completed){ todo.completed = completed}
   
    res.json(todo)
})

app.delete("/api/todos/:id",(req,res)=>{
    const id = req.params.id
     let idx = todos.findIndex((elem)=>elem.id === id)
    const deleted = todos.splice(idx , 1 )
    res.json(deleted)
})

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000")
})