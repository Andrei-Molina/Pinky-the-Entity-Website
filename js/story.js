document.addEventListener('DOMContentLoaded', () => {
  // Hide all main story sections
  function hideAllChapters() {
    document.querySelectorAll('.main-story').forEach(section => {
      section.style.display = 'none';
    });
  }

  // Show chapter and hide hero when "Start Reading" is clicked
  document.querySelectorAll('.story-hero-content a[href^="#main-story"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').replace('#', '');
      hideAllChapters();
      const chapter = document.getElementById(targetId);
      if (chapter) {
        chapter.style.display = 'block';
        chapter.scrollIntoView({ behavior: 'smooth' });
      }
      const storyHero = document.querySelector('.story-hero');
      if (storyHero) storyHero.style.display = 'none';
    });
  });

  // Go back to chapter selection
  document.querySelectorAll('a[href="#chapter-selection"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      hideAllChapters();
      const storyHero = document.querySelector('.story-hero');
      if (storyHero) {
        storyHero.style.display = 'flex';
        storyHero.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});