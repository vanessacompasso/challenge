const helmet = require('helmet')
const express = require('express')
const app = express()
app.use(express.json())
const Router = require('./routes/router')

class Server {
  constructor() {
    this.port = process.env.PORT || 5000
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(Router.initialize(app))
  }

  run() {
    app.listen(this.port, () => {
      console.log(`Listening at http://localhost:${this.port}`)
      console.log(`pid -> ${process.pid}`)
    }).on('Error', err => {
      console.log(`Err: Error listen server: ${err}`)
    })
  }
}

new Server().run()