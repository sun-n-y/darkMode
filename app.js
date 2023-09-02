//
const toggleBtn = document.querySelector('.btn');
const container = document.querySelector('.article-container');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  if (document.documentElement.classList.contains('dark-theme')) {
    toggleBtn.textContent = 'Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
});

container.innerHTML = articles
  .map(({ title, date, length, text }) => {
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article>
            <h2 class="title">${title}</h2>
            <div class="article-info">
                <span>${formatDate}</span>
                <span>${length} min read</span>
            </div>
            <p class="text">${text}</p>
        </article>`;
  })
  .join('');
