const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const crime = form.querySelector('input[name="crime"]').value;

  const response = await fetch('/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      crime
    })
  });

  if (response.ok) {
    alert('Crime reported successfully!');
  } else {
    alert('Error reporting crime!');
  }
});
