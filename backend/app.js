const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

const ads = require('../src/assets/ad_data.json');

app.get('/items', (req, res) => {
  // const filteredAds = ads.filter(ad => ad.type === req.query.type);
  res.status(200).send(JSON.stringify(ads));
});

app.get('/items/:id', (req, res) => {
  const ad = ads.filter(a => a.id === parseInt(req.params.id));
  return res.send(ad[0]);
});

app.post('/items/add', (req, res) => {
  ads.push(req.body);
  res.status(201).send(ads);
});

app.put("/items/:id", (req, res) => {
  const ad = ads.find(a => a.id === parseInt(req.params.id));
  if (!ad) res.status(404).send("Ad does not exist.");
  ad.type = req.body.type;
  ad.title = req.body.title;
  ad.price = req.body.price;
  ad.description = req.body.description;
  ad.image = req.body.image;
  res.send(ad);
});

app.delete("/items/:id", (req, res) => {
  const ad = ads.find(a => a.id === parseInt(req.params.id));
  if (!ad) res.status(404).send("Ad does not exist.");
  const index = ads.indexOf(ad);
  ads.splice(index, 1);
  res.send(ad);
});

module.exports = app;
