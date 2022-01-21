# auth-api

This part of the exercise is responsible for authentication. It is written in Go and tested with Go1.17.

It provides a single useful API endpoint `POST /login` that takes a simple JSON object and 
returns an access token in case of successful authentication.

The JSON object structure is following:
```json
{
    "username": "admin",
    "password": "admin"
}
```

## Prerequisites
[Users API](/users-api) must be running, because `auth-api` fetches user data from it (yes, it is a little bit contrived, but anyway, it's OVERENGINEERING!)

## Configuration

The service scans environment for variables:
- `AUTH_API_PORT` - the port the service takes.
- `USERS_API_ADDRESS` - base URL of [Users API](/users-api).
- `JWT_SECRET` - secret value for JWT generator. Must be shared amongst all components.

Following users are hardcoded for you:

|  Username | Password  |
|-----------|-----------|
| admin     | admin     |
| johnd     | foo       |
| janed     | ddd       |

## Building and running

### Requirements:
* Go 1.17 (link)[https://golang.org/doc/install]


1. Compile application to binary:
```
go build
```
2. Set up environment variables:
```shell
export JWT_SECRET=my-unique-secret-which-is-the-same-between-services
export AUTH_API_PORT=8082
export USERS_API_ADDRESS=http://localhost:8083
```
3. Run the binary
```shell
./auth-api
```

## Usage
Run this command to see if the service is can authenticate the user correctly:
```
 curl -X POST  127.0.0.1:8000/login -d '{"username": "admin","password": "admin"}'
```
