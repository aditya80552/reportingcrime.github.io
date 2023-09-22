const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/report', async (req, res) => {
  const crime = new Crime({
    name: req.body.name,
    email: req.body.email,
    crime: req.body.crime
  });

  await crime.save();

  res.send('Crime reported successfully!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

