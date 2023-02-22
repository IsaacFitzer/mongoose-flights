const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log("req.body", req.body)
    flight.destinations.push(req.body);
    console.log("flight", flight)
    console.log("req.body", req.body)
    flight.save(function(err) {
        console.log("destinations", flight.destinations)
      res.redirect(`/flights/${flight._id}`);
    });
  });
}