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

  if (response.ok) {
    alert('Crime reported successfully!');
  } else {
    alert('Error reporting crime!');
  }
});
const footer = document.querySelector('footer');

const supportLink = footer.querySelector('.support a');
const aboutLink = footer.querySelector('.about a');
const contactLink = footer.querySelector('.contact a');

supportLink.addEventListener('click', () => {
  
});

aboutLink.addEventListener('click', () => {
  // Handle about link click
});

contactLink.addEventListener('click', () => {
  // Handle contact link click
});
