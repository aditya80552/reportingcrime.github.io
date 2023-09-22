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
const supportLink = document.createElement('a');
supportLink.href = '/support';
supportLink.textContent = 'Support';

document.querySelector('footer').appendChild(supportLink);

supportLink.addEventListener('click', () => {
  window.open(supportLink.href, '');
});

const contactLink = document.createElement('a');
contactLink.href = '/contact';
supportLink.textContent = '';

document.querySelector('footer').appendChild(contactLink);

contactLink.addEventListener('click', () => {
  window.open(contactLink.href, '');
});

const aboutLink = document.createElement('a');
aboutLink.href = '/successful';
abouttLink.textContent = 'successful';

document.querySelector('footer').appendChild(aboutLink);

aboutLink.addEventListener('click', () => {
  window.open(aboutLink.href, '');
});
  if (response.ok) {
    alert('Crime reported successfully!');
  } else {
    alert('Error reporting crime!');
  }
});
