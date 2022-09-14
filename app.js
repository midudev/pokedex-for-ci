const express = require('express')
const app = express()
const { version } = require('./package.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'ok', version })
})

app.get('/health', (req, res) => {
  return res.status(200).send({ message: 'ok', version })
})

app.get('/version', (req, res) => {
  return res.status(200).send({ version })
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
