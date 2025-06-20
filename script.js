
// Aside herree
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  document.body.classList.toggle('noscroll');
});

document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('active') &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');

  // Toggle button text
  if (document.body.classList.contains('light')) {
    themeToggleBtn.textContent = 'Switch to Dark';
  } else {
    themeToggleBtn.textContent = 'Switch to Light';
  }
});


// This is for Audio Part

const bgSound = document.getElementById('bg-sound');
const soundToggle = document.getElementById('sound-toggle');
let isPlaying = false;

soundToggle.addEventListener('click', () => {
  if (isPlaying) {
    bgSound.pause();
    soundToggle.textContent = 'Play Music';
  } else {
    bgSound.play();
    soundToggle.textContent = 'Stop Music';
  }
  isPlaying = !isPlaying;
});


/* try */

document.querySelector('.card--container').addEventListener('click', (evt) => {
  evt.currentTarget.classList.toggle('flip')
})