const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  id: Number,
  platform: {
    type: String,
    required: [true, 'Wybierz platformę']
  },
  title: {
    type: String,
    required: [true, 'Podaj tytuł'],
    trim: true,
  },
  language: {
    type: String,
    required: [true, 'Wybierz język']
  },
  state: String,
  description: String,
  cover: String,
  rating: Number,
  genres: [{id: Number, name: String, slug: String}],
  images: [{id: Number, image: String}],
  slug: String,
});

module.exports = mongoose.models.Game || mongoose.model('Game', GameSchema);