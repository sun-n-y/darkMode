//
const toggleBtn = document.querySelector('.btn');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  if (document.documentElement.classList.contains('dark-theme')) {
    toggleBtn.textContent = 'Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
});
