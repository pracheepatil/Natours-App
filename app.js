const dotenv = require('dotenv')

const express = require('express');
const mongoose = require('mongoose');
const routers = require('./router/index');

dotenv.config({ path: `./config.env` });




const testTour = new Tour({
    name: "The hollywood destinatioon",
    price: 30000,
    rating: 4
})
testTour.save()
.then((data) => {
  console.log("data ----->", data)
})
.catch((err) => {
    console.log("ERROR----->", err)
})

const app = express();

app.use(express.json())
app.use(express.static(`public`))
app.use(`/api/v1/tours`, routers)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT)
})