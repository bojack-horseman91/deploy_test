const express = require('express')
const mangoos=require("mongoose")
const location_router=require("./VotingLocation/VotingRouter")


const app = express()

mangoos.connect(process.env.MONGODB_URL).then(()=>console.log("ok")).catch((err)=>console.log(err))

app.use("/api/location",location_router)

app.get('/', (req, res) => {
  res.send('fuck u World!')
})
port=process.env.PORT||9001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})