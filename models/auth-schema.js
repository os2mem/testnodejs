'use strict';

const mongoose = require('./model'),
  Schema = mongoose.Schema,
  AuthSchema = new Schema({
    username: String,
    password: String
  },
    {
      collection: 'authen'
    }),
  Auth = mongoose.model('Authen', AuthSchema);

module.exports = Auth;