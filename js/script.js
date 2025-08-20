document.addEventListener('DOMContentLoaded', () => {
  // Get group containers
  const mainCastGroup = document.getElementById('main-cast-group');
  const villainsGroup = document.getElementById('villains-group');
  const chaosGroup = document.getElementById('chaos-group');

  // Get all group buttons
  const groupButtons = document.querySelectorAll('.holder .btn');

  // Show only main cast group on load
  if (mainCastGroup) mainCastGroup.style.display = '';
  if (villainsGroup) villainsGroup.style.display = 'none';
  if (chaosGroup) chaosGroup.style.display = 'none';

  // Add active class to the main cast button on load
  const mainCastBtn = groupButtons[0];
  if (mainCastBtn) mainCastBtn.classList.add('active');

  groupButtons.forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      groupButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Show/hide groups based on button clicked
      if (idx === 0) {
        mainCastGroup.style.display = '';
        villainsGroup.style.display = 'none';
        chaosGroup.style.display = 'none';
      } else if (idx === 1) {
        mainCastGroup.style.display = 'none';
        villainsGroup.style.display = '';
        chaosGroup.style.display = 'none';
      } else if (idx === 2) {
        mainCastGroup.style.display = 'none';
        villainsGroup.style.display = 'none';
        chaosGroup.style.display = '';
      }
    });
  });

  const cards = document.querySelectorAll('.carousel .card');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  leftArrow.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  });

  rightArrow.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    showCard(current);
  });

  showCard(current);

});