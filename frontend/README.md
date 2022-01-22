# frontend

UI for sample distributed TODO app build with VueJS

## Configuration
- `PORT` - a port the application binds to
- `AUTH_API_ADDRESS` - address of `auth-api` for authentication
- `TODOS_API_ADDRESS` - address of `todos-api` for TODO CRUD

## Building and running

### Requirements
* NodeJS V8.x.x (Since you need different version of `Node` for building `todos-api` and `frontend`, you'll need to search what is the best way to have multiple version of node which can be switched. I'll leave this part to you to figure out.) :-)


### Build steps
1. Install dependencies:
```shell
npm install
```
2. Set Environment variables:
```shell
export PORT=8080
export AUTH_API_ADDRESS=http://localhost:8082
export TODOS_API_ADDRESS=http://localhost:8081
```
3. Run the service:
```shell
npm start
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
