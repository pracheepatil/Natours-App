
const Tour = require('../models/tourModel');

module.exports.createTour = (req, res) => {

    const tourRes = await Tour.create()
}