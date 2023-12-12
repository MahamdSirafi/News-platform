const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  country: { type: String, required: [true, 'please provide country'] },
  city: { type: String, required: [true, 'please provide city'] },
  news: { type: String, required: [true, 'please provide news'] },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const News = mongoose.model('News', newsSchema);
module.exports = News;
