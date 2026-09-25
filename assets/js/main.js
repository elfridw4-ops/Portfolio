// Reveal au scroll — progressive enhancement uniquement.
// Le contenu est déjà visible sans JS (voir .reveal dans style.css) :
// ce script ajoute juste un léger fondu d'entrée, jamais un état caché par défaut.
(function () {
  // Le consentement est demandé avant de charger Google Analytics.
  var analyticsNotice = document.getElementById('analytics-notice');
  var analyticsId = 'G-R4GS8CYS67';
  var analyticsStorageKey = 'hg-analytics-consent';

  function loadAnalytics() {
    if (window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('config', analyticsId, { anonymize_ip: true });

    var analyticsScript = document.createElement('script');
    analyticsScript.async = true;
    analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + analyticsId;
    document.head.appendChild(analyticsScript);
  }

  if (analyticsNotice) {
    var savedConsent = null;
    try { savedConsent = window.localStorage.getItem(analyticsStorageKey); } catch (error) { /* stockage indisponible : on redemande */ }
    if (savedConsent === 'accepted' || savedConsent === 'declined') {
      analyticsNotice.hidden = true;
    } else {
      document.body.classList.add('analytics-pending');
    }

    analyticsNotice.querySelectorAll('[data-analytics-choice]').forEach(function (button) {
      button.addEventListener('click', function () {
        var choice = button.getAttribute('data-analytics-choice');
        try { window.localStorage.setItem(analyticsStorageKey, choice); } catch (error) { /* choix valable pour cette session */ }
        analyticsNotice.hidden = true;
        document.body.classList.remove('analytics-pending');
        if (choice === 'accepted') loadAnalytics();
      });
    });
  }

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

  // Le rail de méthode suit l'étape la plus proche du centre de lecture.
  var methodSteps = document.querySelectorAll('.method-list li');
  if (methodSteps.length) {
    var updateActiveMethodStep = function () {
      var viewportCenter = window.innerHeight * 0.45;
      var closestStep = methodSteps[0];
      var closestDistance = Infinity;
      methodSteps.forEach(function (step) {
        var rect = step.getBoundingClientRect();
        var distance = Math.abs((rect.top + rect.bottom) / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = step;
        }
      });
      methodSteps.forEach(function (step) {
        var isActive = step === closestStep;
        step.classList.toggle('is-active', isActive);
        if (isActive) step.setAttribute('aria-current', 'step');
        else step.removeAttribute('aria-current');
      });
    };
    var scheduleMethodUpdate = function () {
      if (scheduleMethodUpdate.pending) return;
      scheduleMethodUpdate.pending = true;
      window.requestAnimationFrame(function () {
        scheduleMethodUpdate.pending = false;
        updateActiveMethodStep();
      });
    };
    window.addEventListener('scroll', scheduleMethodUpdate, { passive: true });
    window.addEventListener('resize', scheduleMethodUpdate);
    updateActiveMethodStep();
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
