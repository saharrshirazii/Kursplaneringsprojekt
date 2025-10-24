/* Dark Mode  */
const toggleIcon = document.getElementById('icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleIcon.src = 'sun.svg';
}

toggleIcon.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    toggleIcon.src = 'sun.svg';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleIcon.src = 'moon.svg';
    localStorage.setItem('theme', 'light');
  }
});
/* Dark Mode */