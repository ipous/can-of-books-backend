'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  status: {type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECOMMENDED TO ME']},
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;