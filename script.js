const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const crime = form.querySelector('input[name="crime"]').value;
const department = form.querySelector('input[name="department"]').value;
const description = form.querySelector('input[name="description"]').value;
  
  const response = await fetch('/report', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      crime,
      department,
      description
    })
  });
const footer = document.querySelector('footer');

const aboutUsLink = footer.querySelector('.footer-item a[href="/about-us"]');
const supportLink = footer.querySelector('.footer-item a[href="/support"]');
const successfulLink = footer.querySelector('.footer-item a[href="/successful"]');

aboutUsLink.addEventListener('click', () => {
  // Handle about us link click
});

supportLink.addEventListener('click', () => {
  // Handle support link click
});

successfulLink.addEventListener('click', () => {
  // Handle successful link click
});

  if (response.ok) {
    alert('Crime reported successfully!');
  } else {
    alert('Error reporting crime!');
  }
});
