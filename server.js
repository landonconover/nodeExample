const express = require('express');
const bodyParser = require('body-parser');
const _ = require('underscore');



const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static('public'))


let todos = [
    {
        id: 1,
        todo: 'Do the thing',
        done: false
    },
    {
        id: 2,
        todo: 'Do another thing',
        done: false
    }
];


app.get('/api/todos', (req, res) => {
    res.json(todos)
})

app.post('/api/todos', (req, res) => {
    console.log('Post', req.body)

    let todoObjectToAdd = {
        id: todos.length + 1,
        todo: req.body.todo,
        done: false
    }
    
    todos.push(todoObjectToAdd)

    console.log(todoObjectToAdd)

    res.json(todoObjectToAdd)
})

app.put('/api/todos', (req, res) => {
    res.json(todos)
})

app.delete('/api/todos', (req, res) => {
    res.json(todos)
})




app.listen(port, () => {
    console.log('the server is running and happy on port 8000')
})