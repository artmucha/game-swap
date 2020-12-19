const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    unique: true,
  },
  login: {
    type: String,
    required: [true, 'Wpisz swój login'],
    trim: true,
    unique: [true, 'Ten login jest już zajęty'],
  },
  email: {
    type: String,
    required: [true, 'Podaj adres email'],
    trim: true,
    unique: [true, 'Istnieje już konto powiązane z tym adresem email'],
    lowercase: true,
  },
  avatar: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
  gameslist: [
    { type: Number, ref: 'Game' }
  ],
  wishlist: [
    { type: Object, ref: 'Game' }
  ]
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);