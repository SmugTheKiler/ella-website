const express = require('express')
const app = express();
const port = '80'
const log = require('./log.js')

app.use(function(req, res, next) {
  log(`New login from ${req.ip}`)
  next();
});

app.use(express.static('./public', {root: __dirname}))

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })