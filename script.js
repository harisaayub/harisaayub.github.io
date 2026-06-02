fetch('https://api.github.com/repos/harisaayub/harisaayub.github.io/commits?per_page=1')
  .then(r => r.json())
  .then(data => {
    const date = new Date(data[0].commit.author.date);
    document.getElementById('last-updated').textContent =
      date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  })
  .catch(() => {});
