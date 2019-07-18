const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

const ads = require('../src/assets/ad_data.json');

app.get('/items', (req, res) => {
  // const filteredAds = ads.filter(ad => ad.type === req.query.type);
  res.status(200).send(JSON.stringify(ads));
});

app.post('/items/add', (req, res) => {
  const ad = req.body;
  console.log();
  res.status(201).json();
});

module.exports = app;
