const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const climbSchema = new Schema({
  title: { type: String, required: true },
  openOn: {
    type: Date,
    default: function() {
      return new Date()
    },
  },
  gradeRating: {
    type: String,
    enum: ['3', '4', '5', '5+', '6a', '6b', '6c', '7a', ]
  },
  equipment: [{
    type: Schema.Types.ObjectId,
    ref: 'Equipment'
  }],
  completed: { type: Boolean, default: false },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Climb', climbSchema);