const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   results: tours.length,
  //   data: {
  //     tours: tours,
  //   },
  // });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1; // *1 converts string to number
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   results: tours.length,
  //   data: {
  //     tours: tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};
