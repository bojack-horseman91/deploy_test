const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('fuck u World!')
})
port=process.env.PORT||9001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})