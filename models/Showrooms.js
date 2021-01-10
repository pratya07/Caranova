const mongoose = require('mongoose');

const ShowroomSchema = new mongoose.Schema({
  _id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  Brand: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
});

var showroomModel = mongoose.model('showroomModel', ShowroomSchema);
module.exports = showroomModel;
