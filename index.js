const express = require("express");
const app = express();
const port = 3000;
const getCars = require("./controllers/getCars");
const getCarById = require("./controllers/getCarById");
const postCar = require("./controllers/postCar");
app.use(express.json());

// get cars
// endpoint - METHOD + PATH
app.get("/cars", getCars);

// get car by id?
// :carId --- route params - MANDATORY
app.get("/cars/:carId", getCarById)

// POST /car
app.post("/car", postCar);

app.listen(port, () => {
  console.log(`Your app is working on ${port}`);
});