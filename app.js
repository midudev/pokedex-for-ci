const express = require('express')
const app = express()
const { version } = require('./package.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('CHIMBA')
})

app.get('/version', (req, res) => {
  res.send(version)
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
