const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Wpisz swoje imię lub login'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Podaj adres email'],
    trim: true,
    unique: true,
    lowercase: true,
  },
  token: {
    type: String,
  },
  gameslist: [
    { type: Number, ref: 'Game' }
  ],
  wishlist: [
    { type: Number, ref: 'Game' }
  ]
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);