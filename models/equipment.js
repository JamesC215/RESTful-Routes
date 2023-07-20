const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: Date,
}, {
  timestamps: true
});

module.exports = mongoose.model('Equipment', equipmentSchema);