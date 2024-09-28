const express = require('express')
const app = express()
const port = 3000

const db = require('./db');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.send("Error: " + error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})