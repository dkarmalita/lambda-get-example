# Simple Lambda POST example

A simple Lambda service that allows sending a post request to an API and returns it's response.

A simple Lambda service that allows sending a post request to an API and returns it's response. It uses [jsonplaceholder](https://jsonplaceholder.typicode.com/) as the API server for this example.

## How to run

In the terminal, run these commands:
```sh
git clone https://github.com/dkarmalita/lambda-get-example.git
cd lambda-get-example
npm i
npm start
```

In the secondary terminal window, execute this:
```sh
curl -X GET http://localhost:3000/hello/get
```
or just open [the page into browser](open http://localhost:3000/hello/get)

