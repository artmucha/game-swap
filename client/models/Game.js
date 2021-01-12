const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  id: Number,
  platform: {
    type: Object,
    required: [true, 'Wybierz platformę'],
  },
  title: {
    type: String,
    required: [true, 'Wybierz tytuł gry'],
  },
  language: {
    type: String,
    required: [true, 'Wybierz język']
  },
  state: {
    type: String,
    required: [true, 'Określ, w jakim stanie jest płyta']
  },
  description: String,
  cover: String,
  rating: Number,
  genres: [{id: Number, name: String, slug: String}],
  images: [{id: Number, image: String}],
  slug: String,
  owner: {type: String, ref: 'User'},
  likes: [{type: String, ref: 'User'}]
});

module.exports = mongoose.models.Game || mongoose.model('Game', GameSchema);