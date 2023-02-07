# Express.js-Crash-Course

https://www.youtube.com/watch?v=L72fhGm1tfE&t=3354s

- Express is a fast, basic and minimalist web framework for node.js

- A server-side or backend framework. used in combination with react, angular, vue to build full stack apps.


## why use express

- build apps with nodejs easier.
- used for both server rendered apps as API/microservices.
- extremely light.
- full control of request and responses.
- greaT to use with client side frameworks.

## basic server syntax

```js
// import express
const express = require('express')

// initialize express
const app = express()

// create your endpoints/route handlers
app.get('/', (req, res) => {
    res.send('hello')
})

// listen to port
app.lsiten(5000)
```

## Middleware

- Middleware functions have access to request and response object.
- Express has built in middleware.
- We can use custom middlewares as well.
- Middleware make changes to request/response cycles.
- Can end response cycle.
- Call next middleware in the stack.


## Working with express

```bash
npm init -y
npm i express
```

```JS
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server runs on port ${PORT}`));
```

```BASH
node index.js
```

<!-- time: 13: 00 -->










