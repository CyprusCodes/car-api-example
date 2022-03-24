const cars = require("../database");

const getCarById = (request, response) => {
  const carId = request.params.carId;
  const carFound = cars.find((car) => {
    return car.id === carId;
  });

  if (carFound) {
    response.send(carFound);
  } else {
    // 404
    response.status(404).send(`Sorry, we could not find car with id: ${carId}`);
  }
};

module.exports = getCarById;
