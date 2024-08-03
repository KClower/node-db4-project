const express = require('express');
const recipesRouter = require('./recipes-router')


const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to the Node Database Project</h2>`)
})


module.exports = server;