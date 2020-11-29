const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());


//routes

// create a todo
app.post("/todos", async(req, res)=>{
    try {
        const { todo_id,description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (todo_id,description) VALUES($1,$2) RETURNING *", [todo_id,description]);
        res.json(newTodo)
    } catch (error) {
        console.error(error.message)
    }
})

// get all todo

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message)
    }
})
// get a single todo

app.get("/todos/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    } catch (error) {
        console.error(error.message)
    }
})
// delete a todo
app.delete("todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo= await pool.query("DELETE FROM todo WHERE todo_id = $id", [id]);

        res.json("to do was deleted successfully");
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});