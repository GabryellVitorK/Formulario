const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (mode.classList.contains('fa-sun')) {
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
  } else {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

    form.classList.add('dark');
  }
});
