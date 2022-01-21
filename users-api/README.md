# users-api
This service is written in Java with SpringBoot. It provides simple API to retrieve user data.

- `GET /users` - list all users
- `GET /users/:username` - get a user by name

## Configuration

The service scans environment for variables:
- `JWT_SECRET` - secret value for JWT token processing.
- `SERVER_PORT` - the port the service takes.


## Building and running

### Requirements
* JDK 8.([Installation Guide](https://openjdk.java.net/install/))
<br />
**Make sure you're installing java 8 and not higher or lower versions!**
In order to make sure java installed correctly, please run `javac -version` and `java -version` commands. The version for BOTH command must start with `1.8`


### Build steps
1. run `./mvnw clean install`
2. run `java -jar target/users-api-0.0.1-SNAPSHOT.jar`

If the service is working correctly, your application must be able to catch requests coming to `http://localhost:8083/` (Although they will fail since they don't have Authorization token.) (Also Assuming the default port (8083) is used.)