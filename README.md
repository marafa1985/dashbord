This Task was provided by YOUWE, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment: Ubuntu

### Install Docker to Ubuntu

Please follow this Link to Install Docker in Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/

Once you installed Docker to the ubuntu you can start copy the source code to machine as the following

### Copy Surce Code
before you clone the package make sure that you installed git in ubuntu.

- Using github: 
```

git clone https://github.com/marafa1985/dashbord.git
```
- Copy the code over storage like USB. (not recommended)

### Deploy 
After the souce code Avaliable on the server you can ru the following command:

- Build Docker image to the ubuntu Machine

```
$ docker build -t youwe .
```
- Run Docker image for production, specify port 80  as a default

```
$ docker run -it -p 80:80 youwe
```

Else for test you can specify port 3030 as the following:

```
$ docker run -it -p 3030:80 youwe
```
Wait untill finished.

- Now you can open browser and goto url:

[http://localhost:3030/](http://localhost:3030/)


## e2e

For e2e Testing you can install [cypress.io](https://www.cypress.io/).

How to use cypress it [https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)



### Ambiguity

So far, there is no major ambiguity in the task, the only two issues was:

1 - UI/UX guidance need to be more clear for the test taker (margin).
2 - 

## Available Scripts

In the project directory, you can run:

## `npm start`

## `npm test`

## `npm run build`

## `npm run eject`
