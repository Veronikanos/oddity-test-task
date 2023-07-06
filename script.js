window.addEventListener('DOMContentLoaded', () => {
  const luckButton = document.querySelector('[data-change]');
  const letters = document.querySelectorAll('.logo-letter');
  const newLogo = 'Oddity';

  luckButton.addEventListener('click', function (e) {
    e.preventDefault();
    letters.forEach((letter, idx) => {
      letter.textContent = newLogo[idx];
    });
  });
});
