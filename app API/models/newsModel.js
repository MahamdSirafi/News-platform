const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    // required: [true, 'Car must belong to a Owner.']
  },
  country: String,
  sity: String,
  news: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const News = mongoose.model('News', newsSchema);
module.exports = News;
