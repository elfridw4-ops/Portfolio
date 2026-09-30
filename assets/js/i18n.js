/**
 * i18n.js - Language switcher for Horacio Chinkoun Portfolio
 * Handles French/English translation
 */
(function() {
  'use strict';

  var LANGUAGE_KEY = 'hg-portfolio-lang';
  var DEFAULT_LANG = 'fr';
  var translations = {};
  var currentLang = DEFAULT_LANG;

  // Load translations from JSON file
  function loadTranslations(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/js/translations.json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            translations = JSON.parse(xhr.responseText);
            callback(null);
          } catch (e) {
            console.error('Failed to parse translations:', e);
            callback(e);
          }
        } else {
          console.error('Failed to load translations:', xhr.status);
          callback(new Error('Failed to load translations'));
        }
      }
    };
    xhr.onerror = function() {
      console.error('Network error loading translations');
      callback(new Error('Network error'));
    };
    xhr.send();
  }

  function getStoredLanguage() {
    try {
      return window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function setStoredLanguage(lang) {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, lang);
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }

  function updateHtmlLang(lang) {
    document.documentElement.setAttribute('lang', lang);
  }

  function updateLangSwitcher(lang) {
    var allLangBtns = document.querySelectorAll('.lang-btn');
    allLangBtns.forEach(function(btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', String(isActive));
      btn.classList.toggle('active', isActive);
      if (btn.getAttribute('data-lang') === 'fr') {
        btn.setAttribute('aria-label', lang === 'fr' ? 'Français (actif)' : 'Français');
      } else {
        btn.setAttribute('aria-label', lang === 'en' ? 'English (active)' : 'English');
      }
    });
  }

  function setText(element, text) {
    if (element && text !== undefined && text !== null) {
      element.textContent = text;
    }
  }

  function setHTML(element, html) {
    if (element && html !== undefined && html !== null) {
      element.innerHTML = html;
    }
  }

  function translateElement(element, key) {
    if (!element || !translations[currentLang] || translations[currentLang][key] === undefined) {
      return;
    }
    var text = translations[currentLang][key];
    if (element.querySelector('span, strong, br') || /<[a-z][\s\S]*>/i.test(text)) {
      setHTML(element, text);
    } else {
      setText(element, text);
    }
  }

  function applyTranslations() {
    var t = translations[currentLang];
    if (!t) {
      console.warn('No translations for language:', currentLang);
      return;
    }

    // Update document title and meta
    document.title = currentLang === 'fr' ? 
      'Horacio CHINKOUN — DEV Junior, Architecte Fonctionnel & Orchestrateur de Produits IA' :
      'Horacio CHINKOUN — Junior DEV, Functional Architect & AI Product Orchestrator';
    
    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', currentLang === 'fr' ?
        'Horacio CHINKOUN (HG Prompt) — DEV Junior, architecte fonctionnel et orchestrateur de produits IA basé au Bénin.' :
        'Horacio CHINKOUN (HG Prompt) — Junior DEV, functional architect and AI product orchestrator based in Benin.'
      );
    }

    // Skip link
    translateElement(document.querySelector('.skip-link'), 'skipLink');

    // Analytics notice
    var analyticsNotice = document.getElementById('analytics-notice');
    if (analyticsNotice) {
      translateElement(analyticsNotice.querySelector('h2'), 'analyticsTitle');
      var analyticsPs = analyticsNotice.querySelectorAll('p');
      if (analyticsPs.length >= 2) {
        translateElement(analyticsPs[1], 'analyticsNotice');
      }
      var analyticsButtons = analyticsNotice.querySelectorAll('[data-analytics-choice]');
      if (analyticsButtons.length >= 2) {
        setText(analyticsButtons[0], t.analyticsRefuse);
        setText(analyticsButtons[1], t.analyticsAccept);
      }
    }

    // Navigation
    var navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 4) {
      setText(navLinks[0], t.navApropos);
      setText(navLinks[1], t.navProjets);
      setText(navLinks[2], t.navMethode);
      setText(navLinks[3], t.navTrame);
    }
    var mobileLinks = document.querySelectorAll('.mobile-links a');
    if (mobileLinks.length >= 4) {
      setText(mobileLinks[0], t.navApropos);
      setText(mobileLinks[1], t.navProjets);
      setText(mobileLinks[2], t.navMethode);
      setText(mobileLinks[3], t.navTrame);
    }

    // Nav CTA buttons
    var navCtas = document.querySelectorAll('.nav-cta');
    navCtas.forEach(function(cta) { setText(cta, t.navCta); });
    var mobileCtas = document.querySelectorAll('.mobile-menu-cta');
    mobileCtas.forEach(function(cta) { setText(cta, t.navCta); });

    // Menu toggle aria-label
    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.setAttribute('aria-label', t.mobileMenuLabel);
    }

    // Hero section
    translateElement(document.querySelector('.hero-copy .eyebrow'), 'heroEyebrow');
    translateElement(document.querySelector('.hero-copy h1'), 'heroTitle');
    translateElement(document.querySelector('.hero-role'), 'heroRole');
    translateElement(document.querySelector('.hero-status'), 'heroStatus');

    var heroHonest = document.querySelectorAll('.hero-honest');
    if (heroHonest.length >= 2) {
      translateElement(heroHonest[0], 'heroHonest1');
      translateElement(heroHonest[1], 'heroHonest2');
    }

    var heroCtas = document.querySelectorAll('.hero-actions .btn');
    if (heroCtas.length >= 2) {
      setText(heroCtas[0], t.heroCta1);
      setText(heroCtas[1], t.heroCta2);
    }

    // Hero brief
    var heroBrief = document.querySelector('.hero-brief');
    if (heroBrief) {
      var briefDts = heroBrief.querySelectorAll('dt');
      var briefDds = heroBrief.querySelectorAll('dd');
      if (briefDts.length >= 3 && briefDds.length >= 3) {
        setText(briefDts[0], t.heroBriefRole);
        setText(briefDts[1], t.heroBriefMatiere);
        setText(briefDts[2], t.heroBriefSortie);
        setText(briefDds[0], t.heroBriefRoleValue);
        setText(briefDds[1], t.heroBriefMatiereValue);
        setText(briefDds[2], t.heroBriefSortieValue);
      }
    }

    // About section
    translateElement(document.querySelector('#apropos .eyebrow'), 'aboutEyebrow');
    translateElement(document.querySelector('#apropos h2'), 'aboutTitle');

    var aboutGrid = document.querySelector('.about-grid');
    if (aboutGrid) {
      var aboutFirstP = aboutGrid.querySelector('p');
      translateElement(aboutFirstP, 'aboutText');
      var sectorsEyebrow = aboutGrid.querySelector('.eyebrow');
      if (sectorsEyebrow) setText(sectorsEyebrow, t.aboutSectors);
      var sectorsList = aboutGrid.querySelector('.stack-list');
      if (sectorsList) {
        var sectorItems = sectorsList.querySelectorAll('li');
        if (sectorItems.length >= 5) {
          setText(sectorItems[0], t.aboutSector1);
          setText(sectorItems[1], t.aboutSector2);
          setText(sectorItems[2], t.aboutSector3);
          setText(sectorItems[3], t.aboutSector4);
          setText(sectorItems[4], t.aboutSector5);
        }
      }
    }

    // Method section
    translateElement(document.querySelector('#methode .eyebrow'), 'methodEyebrow');
    translateElement(document.querySelector('#methode h2'), 'methodTitle');

    var methodRail = document.querySelector('.method-rail');
    if (methodRail) {
      translateElement(methodRail.querySelector('.eyebrow'), 'methodRailEyebrow');
      translateElement(methodRail.querySelector('h3'), 'methodRailTitle');
      translateElement(methodRail.querySelector('p'), 'methodRailText');
    }

    var methodSteps = document.querySelectorAll('.method-list li');
    if (methodSteps.length >= 4) {
      for (var i = 0; i < 4; i++) {
        var stepH3 = methodSteps[i].querySelector('h3');
        var stepP = methodSteps[i].querySelector('p');
        if (stepH3) translateElement(stepH3, 'methodStep' + (i + 1));
        if (stepP) translateElement(stepP, 'methodStep' + (i + 1) + 'Desc');
      }
    }

    // Services section
    var allSections = document.querySelectorAll('section');
    var servicesSection = null;
    for (var j = 0; j < allSections.length; j++) {
      if (allSections[j].querySelector('.services-list')) {
        servicesSection = allSections[j];
        break;
      }
    }
    if (servicesSection) {
      translateElement(servicesSection.querySelector('.eyebrow'), 'servicesEyebrow');
      translateElement(servicesSection.querySelector('h2'), 'servicesTitle');
      var servicesList = servicesSection.querySelector('.services-list');
      if (servicesList) {
        var serviceItems = servicesList.querySelectorAll('li');
        if (serviceItems.length >= 6) {
          for (var k = 0; k < 6; k++) {
            translateElement(serviceItems[k], 'services' + (k + 1));
          }
        }
      }
    }

    // Projects section
    var projectsSection = document.getElementById('projets');
    if (projectsSection) {
      translateElement(projectsSection.querySelector('.eyebrow'), 'projectsEyebrow');
      translateElement(projectsSection.querySelector('h2'), 'projectsTitle');
      var projP = projectsSection.querySelector('.section-head + p');
      if (projP) translateElement(projP, 'projectsSubtitle');
    }

    // Flagship projects
    var flagshipCards = document.querySelectorAll('.flagship-card');
    if (flagshipCards.length >= 2) {
      var sternCard = flagshipCards[0];
      translateElement(sternCard.querySelector('.tag-flagship'), 'projectsTag');
      translateElement(sternCard.querySelector('h3'), 'projectsSternTitle');
      translateElement(sternCard.querySelector('p:not(.envs)'), 'projectsSternDesc');
      
      var sternMeta = sternCard.querySelector('.case-meta');
      if (sternMeta) {
        var sternDts = sternMeta.querySelectorAll('dt');
        var sternDds = sternMeta.querySelectorAll('dd');
        if (sternDts.length >= 3 && sternDds.length >= 3) {
          setText(sternDts[0], t.projectsSternRole);
          setText(sternDds[0], t.projectsSternRoleValue);
          setText(sternDts[1], t.projectsSternContexte);
          setText(sternDds[1], t.projectsSternContexteValue);
          setText(sternDts[2], t.projectsSternSortie);
          setText(sternDds[2], t.projectsSternSortieValue);
        }
      }
      translateElement(sternCard.querySelector('.card-link'), 'projectsSternCta');

      var monprogrammeCard = flagshipCards[1];
      translateElement(monprogrammeCard.querySelector('.tag-flagship'), 'projectsTag');
      translateElement(monprogrammeCard.querySelector('h3'), 'projectsMonprogrammefitTitle');
      translateElement(monprogrammeCard.querySelector('p:not(.envs)'), 'projectsMonprogrammefitDesc');
      
      var monprogrammeMeta = monprogrammeCard.querySelector('.case-meta');
      if (monprogrammeMeta) {
        var mpDds = monprogrammeMeta.querySelectorAll('dd');
        if (mpDds.length >= 3) {
          setText(mpDds[0], t.projectsMonprogrammefitRoleValue);
          setText(mpDds[1], t.projectsMonprogrammefitContexteValue);
          setText(mpDds[2], t.projectsMonprogrammefitSortieValue);
        }
      }
      translateElement(monprogrammeCard.querySelector('.card-link'), 'projectsMonprogrammefitCta');
    }

    // Intentional projects section
    var intentionalSection = null;
    for (var m = 0; m < allSections.length; m++) {
      var section = allSections[m];
      var sectionHead = section.querySelector('.section-head');
      if (sectionHead) {
        var eyebrow = sectionHead.querySelector('.eyebrow');
        if (eyebrow && (eyebrow.textContent.includes('intention') || eyebrow.textContent.includes('Intention'))) {
          intentionalSection = section;
          break;
        }
      }
    }
    if (intentionalSection) {
      translateElement(intentionalSection.querySelector('.eyebrow'), 'projectsIntentionalEyebrow');
      translateElement(intentionalSection.querySelector('h2'), 'projectsIntentionalTitle');
      var intP = intentionalSection.querySelector('.section-head + p');
      if (intP) translateElement(intP, 'projectsIntentionalSubtitle');
    }

    // Update all non-flagship tags
    var allTags = document.querySelectorAll('.tag');
    allTags.forEach(function(tag) {
      if (!tag.classList.contains('tag-flagship')) {
        setText(tag, t.projectsIntentionalTag);
      }
    });

    // Demo section
    var demoSection = null;
    for (var n = 0; n < allSections.length; n++) {
      if (allSections[n].querySelector('.demo-note')) {
        demoSection = allSections[n];
        break;
      }
    }
    if (demoSection) {
      translateElement(demoSection.querySelector('.eyebrow'), 'demoEyebrow');
      translateElement(demoSection.querySelector('h2'), 'demoTitle');
      var demoP = demoSection.querySelector('.section-head + p');
      if (demoP) translateElement(demoP, 'demoSubtitle');
      translateElement(demoSection.querySelector('.demo-note'), 'demoNote');
    }

    // Update demo card tags
    var demoTags = document.querySelectorAll('.tag');
    demoTags.forEach(function(tag) {
      if (tag.textContent.trim() === 'Démo' || tag.textContent.trim() === 'Demo') {
        setText(tag, t.demoTag);
      }
    });

    // Skills section
    var skillsSection = document.getElementById('competences');
    if (skillsSection) {
      translateElement(skillsSection.querySelector('.eyebrow'), 'skillsEyebrow');
      translateElement(skillsSection.querySelector('h2'), 'skillsTitle');
      
      var stackGroups = skillsSection.querySelectorAll('.stack-group');
      if (stackGroups.length >= 2) {
        var dirGroup = stackGroups[0];
        translateElement(dirGroup.querySelector('.eyebrow'), 'skillsDirection');
        var dirList = dirGroup.querySelector('.stack-list');
        if (dirList) {
          var dirItems = dirList.querySelectorAll('li');
          for (var p = 0; p < Math.min(5, dirItems.length); p++) {
            translateElement(dirItems[p], 'skillsDirection' + (p + 1));
          }
        }

        var envGroup = stackGroups[1];
        translateElement(envGroup.querySelector('.eyebrow'), 'skillsEnv');
        var envList = envGroup.querySelector('.stack-list');
        if (envList) {
          var envItems = envList.querySelectorAll('li');
          for (var q = 0; q < Math.min(7, envItems.length); q++) {
            translateElement(envItems[q], 'skillsEnv' + (q + 1));
          }
        }
      }
    }

    // Trame section
    var trameSection = document.getElementById('trame');
    if (trameSection) {
      var trameDiv = trameSection.querySelector('.trame');
      if (trameDiv) {
        translateElement(trameDiv.querySelector('h2'), 'trameTitle');
        translateElement(trameDiv.querySelector('p'), 'trameDesc');
        translateElement(trameDiv.querySelector('.btn'), 'trameCta');
      }
    }

    // Footer
    translateElement(document.querySelector('.footer-links a[href^="mailto:"]'), 'footerEmail');
    translateElement(document.querySelector('.footer-meta'), 'footerMeta');

    // Update language switcher
    updateLangSwitcher(currentLang);
    updateHtmlLang(currentLang);
  }

  function switchLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;
    setStoredLanguage(lang);
    applyTranslations();
  }

  function init() {
    if (Object.keys(translations).length === 0) {
      loadTranslations(function(err) {
        if (err) {
          console.error('Could not load translations, using fallback');
          currentLang = getStoredLanguage();
          updateLangSwitcher(currentLang);
          updateHtmlLang(currentLang);
          return;
        }
        currentLang = getStoredLanguage();
        applyTranslations();
        setupEventListeners();
      });
    } else {
      currentLang = getStoredLanguage();
      applyTranslations();
      setupEventListeners();
    }
  }

  function setupEventListeners() {
    var langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        switchLanguage(lang);
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
