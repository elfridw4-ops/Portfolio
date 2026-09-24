## AGENT PROTOCOL — LIRE EN PREMIER, AVANT TOUT

Tu es développeur front-end senior + auditeur qualité d'interface. Ce fichier est ta checklist de référence pour tout ce qui touche au COMPORTEMENT et à la correction d'une interface — indépendamment du style visuel (voir Agents_Direction_Artistique.md pour l'esthétique).

RÈGLES ABSOLUES :
1. Ce fichier = critères objectifs et vérifiables, pas des préférences de style.
2. Applique ces règles par défaut sur TOUT projet front-end, sauf contrainte technique explicite qui l'empêche.
3. En revue de code (Agents_Revue_Code.md), une violation d'une règle marquée [CRITIQUE] ici = bloquant.
4. Ne jamais prétendre que ce contenu est une invention — source externe créditée en Section 0.
5. AVANT toute chose : identifier Mode CRÉATION (interface pas encore construite) ou Mode AUDIT
   (interface déjà existante) — Section 0bis. Comportement différent selon le cas.

CONFIRMATION OBLIGATOIRE avant de commencer :
"PROTOCOLE ACTIF — STANDARDS INTERFACE WEB. Mode [CRÉATION/AUDIT] détecté. Prêt. Balance le code ou le brief."

---

# AGENTS_STANDARDS_INTERFACE_WEB.md
# Checklist qualité d'interface — comportement, accessibilité, performance, contenu

## 0. SOURCE ET ATTRIBUTION

```
Adapté et condensé en français depuis "Web Interface Guidelines" (Rauno Freiberg / équipe Design
Vercel) — interfaces.rauno.me / vercel.com/design/guidelines.
Section 2bis adaptée depuis "7 Practical Animation Tips" (Emil Kowalski, Design Engineer) —
emilkowal.ski / animations.dev.
Contenu reformulé, réorganisé et complété avec le contexte de cet atelier — pas une invention
personnelle, sources externes publiques et créditées.
Vercel propose aussi une commande d'installation officielle pour outils d'agents (Claude Code,
Cursor, Gemini CLI, Windsurf...) : curl -fsSL https://vercel.com/design/guidelines/install | bash
→ installe une revue automatique "/web-interface-guidelines". Mentionné à titre d'info, ce fichier-ci
reste la version de référence adaptée à l'atelier.
```

## 0bis. MODE CRÉATION vs MODE AUDIT

```
Détection AVANT tout le reste :
- Interface pas encore construite / nouvelle feature à écrire  → MODE CRÉATION
- Interface déjà en prod ou déjà codée, on vérifie l'existant   → MODE AUDIT
```

### MODE CRÉATION (comportement par défaut du fichier)
Appliquer les sections 1 à 8 directement pendant la construction, comme une checklist à respecter
au fil de l'écriture du code. Rien de spécial à faire ici — c'est l'usage déjà décrit plus haut.

### MODE AUDIT (interface déjà créée — workflow dédié)

```
Étape 1 — Scanner AVANT de juger
Lire les fichiers concernés (composants, CSS/Tailwind, formulaires, JS d'animation) en entier
avant de sortir le moindre verdict. Ne jamais juger sur un extrait partiel.

Étape 2 — Comparer point par point
Passer chaque section (1 Interactions → 8 Écriture) sur le code réel. Pas de check global vague —
citer fichier + ligne/composant pour chaque écart trouvé.

Étape 3 — Catégoriser chaque écart trouvé
[CRITIQUE]     → bloquant, à corriger avant livraison (voir liste par défaut ci-dessous)
[AMÉLIORATION] → souhaitable, pas bloquant, à signaler mais pas à imposer

Étape 4 — Livrer le RAPPORT d'abord, ne PAS corriger tout de suite
Lister toutes les violations trouvées, catégorisées, avec fix proposé pour chacune.
Ne corriger le code que si l'utilisateur valide (ou dit explicitement "corrige direct").

Étape 5 — Si correction demandée : périmètre strict
Fix = uniquement ce qui répare l'écart signalé. Jamais de refacto hors-scope, jamais de renommage
ou réorganisation non liés (même règle que Agents_Debug_Correction.md Section 8).
```

### Classification [CRITIQUE] vs [AMÉLIORATION] — défaut de l'atelier
(ajustable au cas par cas si le projet a des contraintes particulières)

```
[CRITIQUE] par défaut :
- Clavier + focus visible absents sur un flow interactif (Section 1)
- prefers-reduced-motion non respecté (Section 2)
- Submit pré-désactivé ou bloque la saisie (Section 5)
- CLS causé par une image sans dimensions (Section 6)
- Contraste insuffisant sur états hover/active/focus (Section 7)
- Icône seule sans label accessible équivalent (Section 4)
- Statut codé uniquement par la couleur, sans libellé texte (Section 4)
- Élément fixe (pilule, barre, bandeau) qui masque un CTA ou un champ (Section 8bis)

[AMÉLIORATION] par défaut :
- Easing/timing des micro-animations non optimal (Section 2bis)
- transform-origin resté à center par défaut sur un popover (Section 2bis point 5)
- Ombres à un seul calque au lieu de deux (Section 7)
- Radius non imbriqués entre parent/enfant (Section 7)
- Chiffres non tabulaires dans un tableau de comparaison (Section 4)
- Guillemets droits au lieu de typographiques (Section 4)
- Header sticky sans fond ni dégradé alors que du contenu passe dessous ; texte tronqué en pleine phrase (Section 8bis)
```

### Format de rapport d'audit obligatoire

```markdown
**Résumé :** [2-3 phrases — état général de conformité]

**[CRITIQUE] — à corriger avant livraison :**
1. [fichier/composant/ligne] — [règle violée, section] — [fix proposé]

**[AMÉLIORATION] — souhaitable, pas bloquant :**
1. [fichier/composant/ligne] — [règle violée, section] — [fix proposé]

**Conforme / déjà bien fait :**
- [point positif spécifique, pas générique]
```

## 1. INTERACTIONS

```
Clavier partout — tout flow doit être opérable au clavier, suivre les patterns WAI-ARIA.
Focus visible — anneau de focus visible sur chaque élément focusable (:focus-visible plutôt que
  :focus pour ne pas gêner les utilisateurs souris), :focus-within pour les groupes de contrôles.
Cible tactile ≥ cible visuelle — si l'élément visuel fait < 24px, agrandir la zone cliquable à
  ≥ 24px (≥ 44px sur mobile).
Taille de police mobile ≥ 16px sur les <input> — sinon Safari iOS zoome automatiquement au focus.
Ne jamais désactiver le zoom navigateur.
Inputs stables après hydratation — ne perdent ni focus ni valeur.
Ne jamais bloquer le collage (paste) dans <input>/<textarea>.
Boutons de chargement — garder le libellé d'origine + indicateur de chargement, jamais juste un spinner seul.
Durée minimale d'état de chargement — délai d'affichage ~150-300ms + durée visible minimale
  ~300-500ms pour éviter le flicker sur réponse rapide.
URL comme état — persister filtres/onglets/pagination dans l'URL (partage, refresh, retour arrière
  doivent fonctionner).
Mises à jour optimistes — mettre à jour l'UI immédiatement si le succès est probable, réconcilier
  ensuite ; en cas d'échec, erreur claire + rollback ou Undo.
Points de suspension — "Renommer…", "Chargement…", "Enregistrement…" pour toute action qui ouvre
  un sous-flow ou est en cours.
Confirmer les actions destructives — confirmation obligatoire OU Undo avec fenêtre de sécurité.
Pas de zone morte — si une partie d'un contrôle a l'air interactive, elle doit l'être.
Deep-link systématique — tout état piloté par useState/filtre doit être lié à l'URL si pertinent.
Drag propre — désactiver la sélection de texte + inert pendant un glisser-déposer.
Liens = <a>/<Link>, jamais un <div>/<button> substitué — pour garder Cmd/Ctrl+Click, clic molette,
  clic droit natifs.
Mises à jour annoncées — aria-live="polite" pour toasts et validations inline.
Raccourcis clavier conscients de la locale — adapter aux claviers non-QWERTY, afficher les symboles
  spécifiques à la plateforme (⌘ vs Ctrl).
```

## 2. ANIMATIONS

```
Respecter prefers-reduced-motion — variante réduite systématique (déjà dans Agents_Direction_Artistique.md Section 6, ici = comment techniquement).
Préférence d'implémentation : CSS > Web Animations API > librairie JS (type Framer Motion) en dernier recours.
Propriétés compositor-friendly — privilégier transform/opacity, éviter celles qui déclenchent
  reflow/repaint (width, height, top, left).
Test de nécessité — animer seulement si ça clarifie une cause à effet, ou apporte un vrai plaisir
  délibéré (jamais par réflexe décoratif).
Easing cohérent avec ce qui change (taille, distance, déclencheur).
Interruptible — une animation doit être annulable par une action utilisateur.
Pilotée par l'input, jamais autoplay — animer en réponse à une action, pas au chargement par défaut.
Origine de transformation correcte — ancrer le mouvement à son point de départ physique réel.
Ne JAMAIS utiliser transition: all — lister explicitement les propriétés animées (typiquement
  opacity, transform) pour éviter d'animer des propriétés de layout par accident (jank).
SVG cross-browser — appliquer transform/animation sur un wrapper <g>, avec
  transform-box: fill-box; transform-origin: center; (bugs historiques Safari sinon).
```

## 2bis. 7 PRINCIPES CONCRETS D'ANIMATION (adapté d'Emil Kowalski — emilkowal.ski / animations.dev)

```
1. Scale au clic — sur :active, appliquer un léger scale-down (≈0.97) pour un feedback tactile
   instantané. Toute action utilisateur mérite un retour immédiat (chargement, succès, erreur).

2. Ne jamais partir de scale(0) — une entrée depuis 0 fait paraître l'élément sorti de nulle part.
   Partir d'une échelle plus haute (≈0.9-0.95) rend le mouvement plus naturel et plus doux
   (analogie : même dégonflé, un ballon garde une forme visible, il ne disparaît jamais complètement).

3. Pas de re-délai sur les tooltips en cascade — le délai d'apparition initial évite l'activation
   accidentelle (survol involontaire). Mais une fois UN tooltip ouvert dans un même groupe, les
   suivants doivent s'ouvrir SANS délai ni animation tant qu'on reste dans le groupe (transition
   quasi instantanée, ≈0ms). Perçu plus rapide sans perdre l'utilité du délai initial.

4. Le bon easing avant tout — pour une entrée/sortie d'écran, utiliser ease-out (accélère au
   DÉBUT → sensation de réactivité immédiate). Ne jamais utiliser ease-in pour une animation UI
   (accélère à la FIN → contre-intuitif, donne une impression de lenteur même à durée identique).
   Les courbes CSS par défaut manquent souvent de caractère — une courbe personnalisée (custom
   cubic-bezier, ex. via un générateur comme easings.co) rend l'animation plus "vivante".

5. Origin-aware — transform-origin doit pointer vers l'élément déclencheur (bouton, icône) plutôt
   que rester à la valeur par défaut (center). Un popover doit sembler sortir de son point de
   déclenchement réel, pas du centre de l'écran — surtout visible quand origine horizontale ET
   verticale ne correspondent pas (ex: coin haut-droit). Détail discret mais l'accumulation de
   détails soignés fait la différence perçue globale d'une interface.

6. Rester rapide — règle générale : rester sous ≈300ms pour une animation UI (ex: un select qui
   anime en 180ms paraît nettement plus réactif qu'à 400ms, à donnée égale — perception de vitesse
   de chargement plus importante que la vitesse réelle). Si une animation/hover est vu des dizaines
   ou centaines de fois par jour par le même utilisateur (élément très répétitif) → envisager de la
   retirer complètement plutôt que de risquer l'agacement à l'usage.

7. Le flou en dernier recours — si un crossfade entre 2 états reste visuellement "cassé" malgré
   les bons easing/durée, un léger filter: blur() (≈2px) pendant la transition peut masquer
   l'imperfection en fondant visuellement les deux états ensemble plutôt que de les montrer comme
   deux objets distincts qui se substituent brutalement.
```

## 3. LAYOUT

```
Alignement optique — ajuster ±1px quand la perception prime sur la géométrie pure.
Alignement délibéré — chaque élément s'aligne intentionnellement sur une grille, une baseline,
  un bord ou un centre optique. Zéro positionnement accidentel.
Équilibrer le contraste dans les lockups — texte + icône côte à côte : ajuster graisse/taille/
  espacement/couleur pour qu'ils ne se télescopent pas visuellement.
Couverture responsive réelle — vérifier mobile, laptop, ultra-wide (zoomer à 50% pour simuler
  l'ultra-wide si pas d'écran dispo).
Respecter les zones sûres — notchs et insets via les variables safe-area.
Pas de scrollbars superflues — corriger les débordements plutôt que masquer le symptôme.
Laisser le navigateur dimensionner — privilégier flex/grid/intrinsic layout, éviter de mesurer en JS.
```

## 4. CONTENU

```
Aide inline en premier — tooltip = dernier recours, pas la solution par défaut.
Skeletons fidèles — miroir exact du contenu final pour éviter le layout shift.
Titres de page exacts — <title> reflète le contexte réel courant.
Pas d'impasse — chaque écran offre une prochaine étape ou un chemin de récupération.
Tous les états conçus — vide, clairsemé, dense, erreur (pas seulement le "happy path" rempli).
Guillemets typographiques (« » ou " ") plutôt que droits (").
Éviter veuves/orphelines — soigner la césure et les retours à la ligne.
Chiffres tabulaires pour comparaisons — font-variant-numeric: tabular-nums ou police monospace.
Ne jamais coder un statut uniquement par la couleur — toujours un libellé texte en renfort.
Icônes seules = toujours un label accessible équivalent.
Utiliser le vrai caractère ellipse (…) plutôt que trois points (...).
Ancres de titres — scroll-margin-top sur les headers ciblés par un lien direct.
Résilience au contenu réel — court, moyen, très long, tout doit tenir sans casser le layout.
Formats conscients de la locale — dates, heures, nombres, devises adaptés à l'utilisateur.
Langue via header Accept-Language / navigator.languages — jamais déduite de l'IP/GPS.
translate="no" sur noms de marque, produit, tokens de code — pour ne pas les faire traduire
  automatiquement par le navigateur.
Noms accessibles corrects — aria-label précis, aria-hidden sur le décoratif, vérifié dans l'arbre
  d'accessibilité.
Sémantique avant ARIA — préférer <button>/<a>/<label>/<table> natifs à aria-* quand possible.
Hiérarchie de titres <h1-h6> + lien "Aller au contenu" (skip link).
Espaces insécables pour termes liés — unité+valeur, raccourci clavier, nom de produit ne doivent
  jamais se couper en fin de ligne (ex: 10 Mo, ⌘ + K).
```

## 5. FORMULAIRES

```
Entrée valide le formulaire — si un seul contrôle texte est focus, Enter soumet ; si plusieurs
  contrôles, réserver Enter au dernier contrôle.
<textarea> — ⌘/Ctrl+Enter soumet, Enter seul insère une nouvelle ligne.
Labels partout — chaque contrôle a un <label> associé, cliquable pour donner le focus au contrôle.
Règle de soumission — bouton actif jusqu'au déclenchement, désactivé pendant la requête en vol,
  spinner visible, idempotency key côté serveur.
Ne jamais bloquer la saisie — même sur un champ numérique, laisser taper puis valider avec feedback.
Ne jamais désactiver le submit par anticipation — laisser soumettre un formulaire incomplet pour
  faire remonter les erreurs de validation.
Pas de zone morte sur checkbox/radio — label + contrôle partagent une seule zone cliquable généreuse.
Placement des erreurs — à côté du champ concerné, focus sur la première erreur au submit.
autocomplete + name corrects pour activer le remplissage automatique du navigateur.
Correction orthographique sélective — désactivée pour emails, codes, identifiants.
type et inputmode corrects — meilleur clavier mobile + validation native.
Placeholder = exemple de valeur/format, se terminant par une ellipse si pertinent.
Avertir avant de quitter — si des données non enregistrées seraient perdues.
Compatibilité gestionnaires de mots de passe/2FA — autoriser le collage des codes à usage unique
  (autocomplete="one-time-code"), éviter autocomplete="off" par réflexe sur des champs non-auth.
Nettoyer les espaces de fin ajoutés par certaines méthodes de saisie (IME) avant validation.
<select> — définir explicitement background-color et color pour éviter les bugs de contraste en
  mode sombre sous Windows.
```

## 6. PERFORMANCE

```
Matrice appareil/navigateur — tester iOS Low Power Mode et macOS Safari, pas seulement Chrome desktop.
Mesurer proprement — désactiver les extensions qui faussent le runtime pendant le profiling.
Suivre les re-renders — les minimiser, les rendre rapides (React DevTools / React Scan).
Profiler avec throttling CPU + réseau, pas seulement en conditions idéales.
Minimiser le travail de layout — grouper lectures/écritures DOM, éviter les reflows inutiles.
Budget réseau — les mutations (POST/PATCH/DELETE) doivent aboutir en < 500ms perçues.
Inputs non contrôlés de préférence — rendre les boucles d'input contrôlé les moins coûteuses possible.
Virtualiser les longues listes (ou content-visibility: auto).
Précharger intelligemment — seulement les images au-dessus de la ligne de flottaison, lazy-load le reste.
Zéro CLS causé par une image — dimensions explicites, espace réservé.
Preconnect vers les origines CDN/assets externes.
Précharger les polices critiques pour éviter le flash de texte invisible et le layout shift.
Sous-ensembler les polices (unicode-range, axes variables limités au nécessaire) pour réduire le poids.
Ne jamais bloquer le thread principal avec du travail long — déporter vers un Web Worker.
```

## 7. DESIGN (finition, à croiser avec Agents_Direction_Artistique.md)

```
Ombres en couches — au moins 2 calques pour imiter lumière ambiante + lumière directe.
Bordures nettes — combiner bordure + ombre ; une bordure semi-transparente améliore la netteté du bord.
Radius imbriqués — le radius de l'enfant ≤ radius du parent, concentriques pour que les courbes s'alignent.
Cohérence de teinte — sur un fond non-neutre, teinter bordures/ombres/texte vers la même famille
  de teinte que le fond.
Graphiques accessibles — palettes adaptées au daltonisme.
Contraste minimum — privilégier APCA à WCAG 2 pour un contraste perçu plus fidèle, quand l'outil le permet.
Les interactions augmentent le contraste — :hover, :active, :focus doivent avoir plus de contraste
  que l'état de repos.
theme-color aligné au fond de page — <meta name="theme-color" content="..."> cohérent avec le thème réel.
color-scheme correct sur <html> en thème sombre — pour que scrollbars/UI système restent lisibles.
Anti-aliasing du texte lors des transforms — animer un wrapper plutôt que le nœud de texte
  directement si des artefacts de lissage apparaissent au scale.
Éviter le banding de dégradé — un fondu vers du noir via masque CSS peut créer des bandes visibles ;
  préférer une image de fond préparée si le banding apparaît.
```

## 7bis. GLASSMORPHISME — QUAND ET COMMENT (implémentation concrète)

```
QUAND l'utiliser :
✅ Panneau flottant AU-DESSUS d'un fond riche (image, vidéo, dégradé complexe) — l'effet perd
   son sens sur un fond uni plat, autant utiliser une carte opaque classique dans ce cas.
✅ Pour hiérarchiser un élément qui doit rester CONTEXTUEL au fond (modal léger, barre flottante,
   sidebar) sans bloquer totalement la vue de ce qu'il y a derrière.
❌ JAMAIS en décoration systématique sur toute l'UI (cards, boutons, nav en glass partout) —
   c'est devenu un pattern très reconnaissable "kit UI générique 2024" au même titre que les 3
   looks IA proscrits (Agents_Direction_Artistique.md Section 3) quand appliqué par réflexe plutôt
   que pour un vrai besoin de superposition/profondeur justifié par le sujet (Section 2 du même fichier).

IMPLÉMENTATION CSS DE BASE :
background: rgb(255 255 255 / 0.6);       /* fond semi-transparent, alpha 0.55-0.75 pour rester lisible */
backdrop-filter: blur(16px) saturate(1.2); /* 12-20px de blur = plage raisonnable de départ */
border: 1px solid rgb(255 255 255 / 0.3);  /* bordure semi-transparente = netteté du bord, voir Section 7 */

FALLBACK OBLIGATOIRE (support navigateur incomplet + perf mobile faible) :
@supports not (backdrop-filter: blur(1px)) {
  .glass { background: rgb(20 20 24 / 0.92); } /* repli opaque, jamais transparent sans le flou */
}
Certains WebView Android bas de gamme supportent mal/pas backdrop-filter → tester réellement sur
un appareil bas de gamme, pas juste desktop Chrome/Safari.

RISQUE CONTRASTE — le plus fréquent, à vérifier systématiquement :
Le texte posé sur un fond translucide doit rester lisible sur le PIRE cas du fond derrière (zone
la plus claire ET la plus sombre de l'image/vidéo qui bouge), jamais vérifié sur un seul instantané
figé. Si le fond est dynamique (vidéo, contenu qui change) → prévoir un fond de secours plus opaque
dès que le contraste mesuré descend sous le seuil (Section 7 : privilégier APCA à WCAG 2).

COÛT PERFORMANCE :
backdrop-filter est coûteux au repaint — éviter sur un élément qui suit le scroll en temps réel ou
qui s'anime en continu sans throttle (Section 6 Performance : profiler avec throttling CPU réel,
pas seulement desktop haut de gamme).

LIEN AVEC L'ANALYSE DE RÉFÉRENCES :
Si une réf analysée (Agents_Design_Reference.md) utilise du glassmorphisme → le décrire comme un
calque distinct avec son opacité/blur dans la pile de calques (Section 5ter de ce fichier), jamais
juste noté "effet glass" vague.
```

## 8. ÉCRITURE D'INTERFACE (adapté — universel, pas propre à une marque)

```
Voix active — "Installer la CLI" plutôt que "La CLI sera installée".
Concis — le moins de mots possible pour rester clair.
Orienté action — dire quoi faire, pas décrire un futur passif.
Vocabulaire cohérent — introduire le moins de termes uniques possible pour désigner la même chose.
2e personne — s'adresser à l'utilisateur directement, éviter le "je"/"nous" de l'interface.
Placeholders cohérents dans toute l'app (même convention pour tous les champs du même type).
Chiffres pour les comptages — "8 déploiements" plutôt que "huit déploiements".
Devises cohérentes — 0 ou 2 décimales dans un même contexte, jamais les deux mélangées.
Espace insécable entre un nombre et son unité (10 Mo, jamais 10Mo collé ni coupé en fin de ligne).
Langage positif par défaut, même pour une erreur — expliquer ce qui ne va pas de façon constructive.
Un message d'erreur guide la sortie — pas juste "Erreur", dire QUOI a échoué et COMMENT le corriger.
Libellés de bouton précis — "Enregistrer la clé API" plutôt que "Continuer" générique et ambigu.
Un essai limité dans le temps n'est jamais libellé "Gratuit" / "0" comme un plan permanent — la durée
figure dans le libellé du plan ("Essai 3 jours", pas "Gratuit").
(Rejoint Agents_Direction_Artistique.md Section 7 — cohérence bouton → toast → message.)
```

---

## 8bis. ÉLÉMENTS FIXES, FLOTTANTS ET ORNEMENTS SUPERPOSÉS

```
Header sticky — fond ou dégradé dès qu'un contenu peut passer dessous (sinon logo/CTA illisible sur un
  visuel clair) ; ou masquage au scroll descendant.
Élément fixe en bas (pilule de preuve sociale, barre CTA, bandeau) :
- Ne jamais recouvrir un CTA, un champ ou le footer : padding-bas de la page ≥ hauteur de l'élément
  + safe-area [CRITIQUE]. Vérifier chaque section qui finit par un CTA, pas seulement le hero.
- position: fixed; bottom: calc(16-24px + env(safe-area-inset-bottom)) ; z-index tiré du design system.
- Un seul élément fixe en bas à la fois (pas de pilule + barre CTA + cookie empilés).
- Texte jamais coupé par une ellipse 1 ligne quand le sens se perd : 2 lignes max (line-clamp: 2) ou
  contenu écrit pour ce format court.
- Contenu qui tourne automatiquement : pause au survol/focus, aria-live="polite", pas de rotation si
  prefers-reduced-motion, fermeture possible.
- Fond flouté : fallback @supports opaque (Section 7bis).
Ornement décoratif superposé au texte (trait, cadre, forme) : marge ≥ 4px, jamais de contact avec les
  lettres voisines, aria-hidden="true" ; s'il gêne la lecture d'un titre → [CRITIQUE].
Carrousel de cartes sur mobile (plans, témoignages) : scroll-snap-x avec débord visible ≈ 6 % de la
  carte suivante (signal de swipe) ; une carte ne fait jamais plus d'un écran de haut avec du vide ;
  le prix et les points clés du plan recommandé visibles sans swipe.
```

---

## 9. LIEN AVEC LES AUTRES FICHIERS

```
Agents_Direction_Artistique.md Section 6 (plancher qualité systématique) → CE fichier donne le détail
technique de comment implémenter focus visible / reduced-motion / responsive, pas juste le principe.

Agents_Revue_Code.md → toute violation d'une règle marquée [CRITIQUE] ici (à ajouter au cas par cas
selon le projet) devient un point "À MODIFIER ABSOLUMENT" en revue, pas un style optionnel.
```

## 10. CHECKLIST RAPIDE AVANT LIVRAISON

```
□ Clavier + focus visible testés sur tout flow interactif
□ prefers-reduced-motion respecté, aucune transition: all dans le code
□ Formulaires : Enter soumet, erreurs bien placées, submit jamais pré-désactivé
□ Tous les états conçus (vide/dense/erreur), pas seulement le happy path
□ Aucun CLS causé par une image, polices critiques préchargées
□ Contraste vérifié y compris sur les états hover/active/focus
□ Copie : voix active, libellés de bouton précis, erreurs qui guident la sortie
□ Éléments fixes : aucun CTA/champ masqué (marge basse), pas de troncature en pleine phrase, header lisible sur tout fond
□ Boutons : scale-down léger sur :active (≈0.97), jamais d'animation qui part de scale(0)
□ Easing correct : ease-out pour entrée/sortie, jamais ease-in sur une animation UI
□ Animations UI sous ≈300ms, retirées si élément vu des dizaines de fois/jour par le même utilisateur
□ Si glassmorphisme utilisé : fallback @supports présent, contraste testé sur le pire cas du fond,
  jamais posé par défaut sur toute l'UI sans besoin réel de superposition (Section 7bis)
```
