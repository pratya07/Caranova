const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const ModelSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Fuel: {
    type: String,
    required: true,
  },
  Engine: {
    type: String,
    required: true,
  },
  Body: {
    type: String,
    required: true,
  },
  Seats: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

var vehicleModel = mongoose.model('vehicleModel', ModelSchema);
module.exports = vehicleModel;
