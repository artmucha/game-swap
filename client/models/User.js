const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
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
  },
  password: {
    type: String,
    required: [true, 'Wpisz hasło']
  }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);