const cars = require("../database");

const postCar = (request, response) => {
    const newCar = request.body;
    console.log(request.body, "KULLANICININ GONDERDIGI BODY...")
    cars.push(newCar);
    response.send(cars);
};

module.exports = postCar;
