// Front end code
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const crime = form.querySelector('input[name="crime"]').value;
  const description = form.querySelector('input[name="description"]').value;
  const department = form.querySelector('input[name="department"]').value;

  const response = await fetch('/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      crime,
      description,
      department
    })
  });

  if (response.ok) {
    alert('Crime reported successfully!');
  } else {
    alert('Error reporting crime!');
  }
});

// Backend code
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/report', async (req, res) => {
  const crime = new Crime({
    name: req.body.name,
    email: req.body.email,
    crime: req.body.crime,
    description: req.body.description,
    department: req.body.department
  });

  await crime.save();

  res.send('Crime reported successfully!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
