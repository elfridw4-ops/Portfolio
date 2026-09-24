// Reveal au scroll — progressive enhancement uniquement.
// Le contenu est déjà visible sans JS (voir .reveal dans style.css) :
// ce script ajoute juste un léger fondu d'entrée, jamais un état caché par défaut.
(function () {
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
