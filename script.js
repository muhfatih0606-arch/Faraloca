const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.textContent = '☰';
    });
  });
}

document.querySelectorAll('.sample-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isHidden = details.hasAttribute('hidden');
    if (isHidden) {
      details.removeAttribute('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.innerHTML = 'Hide sample concept <span>−</span>';
    } else {
      details.setAttribute('hidden', '');
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = 'View sample concept <span>＋</span>';
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
