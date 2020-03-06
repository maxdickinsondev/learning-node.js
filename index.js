const express = require('express');

const server = express();

server.use(express.json());

const users = ['Max', 'Denilson', 'Ismael', 'Lorim'];

server.get('/users', (req,res) => {
    return res.json(users);
});

server.get('/user/:index', (req, res) => {

    const index = req.params.index;

    return res.json(users[index]);
});

server.post('/users', (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/user/:index', (req, res) => {
    const index = req.params.index;
    const { name } = req.body;

    users[index] = name;
    return res.json(users);
});

server.delete('/users/:index', (req, res) => {
    const index = req.params.index;

    users.splice(index, 1);
    return res.json(users);
});

server.listen(3000);