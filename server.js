// server.js
require("dotenv").config()
const next = require("next")
const express = require("express")
const compression = require("compression")

const port = parseInt(process.env.PORT_VAR, 10) || 3001
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

// routing
const routes = require("./routes")
const handler = routes.getRequestHandler(app)

app
  .prepare()
  .then(() => {
    express()
      .use(handler)
      .use(compression())
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http:localhost:${port}`)
      })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
