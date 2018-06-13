npm init -y
npm i -D serverless-offline
sls --version
sls create --template aws-nodejs --path my-service
cd $_

edit serverless.yml
```js
service: my-service
provider:
  name: aws
  runtime: nodejs6.10

functions:
  hello:
    handler: handler.hello

    events:
      - http:
          path: hello/get
          method: get

plugins:
  - serverless-offline
```

npx sls offline start
open http://localhost:3000/hello/get
