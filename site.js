(() => {
  const links = [...document.querySelectorAll('nav a')];
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        const current = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, {rootMargin: '-10% 0px -65% 0px', threshold: 0});
  for (const link of links) {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) observer.observe(section);
  }
})();
