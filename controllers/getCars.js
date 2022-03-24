const cars = require("../database");

const getCars = (request, response) => {
  const brand = request.query.brand;

  if (brand) {
    const carsFound = cars.filter(car => car.brand === brand);
    response.send(carsFound);
  } else {
    response.send(cars);
  }
};

module.exports = getCars;
