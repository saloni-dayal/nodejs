const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const express = require('express')
const app = express()

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
  });
  const Card = mongoose.model('Card', cardSchema);

  app.get('/', (req, res) => {
    Card.find((err, cards) => {
      if (err) return console.error(err);
      let cardHtml = '';
      cards.forEach(card => {
        cardHtml += `
          <div class="card">
            <img src="${card.image}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        `;
      });
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>My Cards</title>
          </head>
          <body>
            ${cardHtml}
          </body>
        </html>
      `);
    });
  });