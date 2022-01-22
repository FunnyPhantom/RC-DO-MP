'use strict';
const express = require('express')
const bodyParser = require("body-parser")
const jwt = require('express-jwt')


const port = process.env.TODO_API_PORT || 8081
const jwtSecret = process.env.JWT_SECRET || "foo"

const app = express()



app.use(jwt({secret: jwtSecret}))
app.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({message: 'invalid token'})
    }
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const routes = require('./routes')
routes(app)

app.listen(port, function () {
    console.log('todo list RESTful API server started on: ' + port)
})
