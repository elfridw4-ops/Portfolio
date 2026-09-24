// Reveal au scroll — progressive enhancement uniquement.
// Le contenu est déjà visible sans JS (voir .reveal dans style.css) :
// ce script ajoute juste un léger fondu d'entrée, jamais un état caché par défaut.
(function () {
  // Le menu mobile reste un vrai bouton clavier avec un état annoncé à l'assistant vocal.
  var menuButton = document.querySelector('.menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var header = document.querySelector('header');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
      mobileMenu.hidden = isOpen;
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Ouvrir le menu');
        mobileMenu.hidden = true;
      });
    });
  }

  // Le header devient plus opaque lorsque le contenu passe réellement dessous.
  if (header) {
    var updateHeader = function () { header.classList.toggle('is-scrolled', window.scrollY > 12); };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    return;
  }
  if (!('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
