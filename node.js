const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/women-crime-reporting');

const crimeSchema = new mongoose.Schema({
  name: String,
  email: String,
  crime: String,
department: String,
 description: String

});

const Crime = mongoose.model('Crime', crimeSchema);

app.post('/report', async (req, res) => {
  const crime = new Crime({
    name: req.body.name,
    email: req.body.email,
    crime: req.body.crime,
     department: req.body.department,
    description: req.body.description
  });

  await crime.save();

  res.send('Crime reported successfully!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

