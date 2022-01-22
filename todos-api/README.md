# todos-api

This service is written in NodeJS, it provides CRUD operations over TODO entries.
It keeps all the data in memory.

Following API endpoints are exposed:

- `GET /todos` - list all TODOs for a given user, user ID is taken from JWT
- `POST /todos` - create new TODO
- `DELETE /todos/:taskId` - modify a TODO by ID

TODO object looks like this:
```
{
    id: 1,
    userId: 1,
    content: "Create new todo"
}
```


## Configuration

The service scans environment for variables:
- `TODO_API_PORT` - the port the service takes.
- `JWT_SECRET` - secret value for JWT token processing.

## Building and running

### Requirements
* NodeJS (Tested with NodeJS 16.13.1). ([install nodejs](https://nodejs.org/en/))
* Python 2.7 ([install python2](https://www.python.org/downloads/))


### Build steps
1. Install dependencies:
```shell
npm install
```
2. Set Environment variables:
```shell
export JWT_SECRET=my-unique-secret-which-is-the-same-between-services
export TODO_API_PORT=8081
```
3. Run the service:
```shell
npm start
```

## Usage

```
 curl -X POST -H "Authorization: Bearer $token" 127.0.0.1:8082/todos -d '{"content": "Deploy Frontend"}'
```
