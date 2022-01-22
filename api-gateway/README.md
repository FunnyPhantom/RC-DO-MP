# api-gateway
This service is shall be written by you!
<br /> With the knowledge you've learned on this course so far and google you shall
spin up a new service which matches the following specification:

## Requirements
* [Nginx](https://www.nginx.com/)

## Specification:
The nginx sever that gets spun up:
* Is able to serve the frontend artifacts (build folder) to the client on port `80`.
* Is able to act as reverse-proxy for following requests:
  * Requests that are going to `/login`, shall be proxied to the `auth-api`.
  * Request that match the following pattern `/todos*` shall be proxied to the `todo-api`.


## Confirmation on successful deployment
In order to confirm that the service is up and running, you shall use the following steps:
1. You should be able to access the service at `http://localhost` in your browser and see the login form.
2. You shall be able to send correct credentials described in the `/login` endpoint and successfully log-in.
3. After successful login, you shall be able to view, create and delete todos.

Congratz! You've completed this mini-project!


## Bonus Points
If you've managed to deploy the whole app and got a lot of free time left, ask for multiple VMs,
and deploy each api to a different VM. For the sake of CORS, you'll need to have your nginx and api-gateway running on the same VM.