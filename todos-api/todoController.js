'use strict';
const cache = require('memory-cache');

class TodoController {

    list (req, res) {
        const data = this._getTodoData(req.user.username)

        res.json(data.items)
    }

    create (req, res) {
        const data = this._getTodoData(req.user.username)
        const todo = {
            content: req.body.content,
            id: data.lastInsertedID
        }
        data.items[data.lastInsertedID] = todo

        data.lastInsertedID++
        this._setTodoData(req.user.username, data)


        res.json(todo)
    }

    delete (req, res) {
        const data = this._getTodoData(req.user.username)
        const id = req.params.taskId
        delete data.items[id]
        this._setTodoData(req.user.username, data)


        res.status(204)
        res.send()
    }


    _getTodoData (userID) {
        let data = cache.get(userID)
        if (data == null) {
            data = {
                items: {
                    '1': {
                        id: 1,
                        content: "Create new todo",
                    },
                    '2': {
                        id: 2,
                        content: "Update me",
                    },
                    '3': {
                        id: 3,
                        content: "Delete example ones",
                    }
                },
                lastInsertedID: 3
            }

            this._setTodoData(userID, data)
        }
        return data
    }

    _setTodoData (userID, data) {
        cache.put(userID, data)
    }
}

module.exports = TodoController