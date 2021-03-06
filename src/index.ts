console.info('Hello, World')

// Starter code copied from https://developer.okta.com/blog/2018/11/15/node-express-typescript

import express from 'express'

const app = express()
const port = process.env.PORT || 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!')
})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
