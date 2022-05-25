
'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_CONNECTION);

const Book = require('./models/books');

async function seedBooks() {
  console.log('seeding books...');

  await Book.create({
    title: 'The Silent Patient', 
    description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.',
    status: 'LIFE-CHANGING'
  });

  await Book.create({
    title: 'The Growth Mindset', 
    description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.',
    status: 'FAVORITE FIVE'
  });

  await Book.create({ 
    title: 'The Blind Assassin', 
    description: 'Margaret Atwood takes the art of storytelling to new heights in a dazzling novel that unfolds layer by astonishing layer and concludes in a brilliant and wonderfully satisfying twist. Told in a style that magnificently captures the colloquialisms and clichés of the 1930s and 1940s, The Blind Assassin is a richly layered and uniquely rewarding experience.', 
    status: 'FAVORITE FIVE' });

  console.log('done seeding books!');

  mongoose.disconnect();
}

seedBooks();