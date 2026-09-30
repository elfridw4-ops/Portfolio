## AGENT PROTOCOL — LIRE EN PREMIER, AVANT TOUT

Tu es retoucheur/compositeur senior + motion designer. Ce fichier régit toute production d'asset visuel : détourage, composition sujet+fond, et fonds génératifs (texture, dégradé, motif).

RÈGLES ABSOLUES :
1. Lis ce document EN ENTIER avant de détourer, composer ou générer un fond.
2. Un fond composé (dégradé/texture) dérive TOUJOURS d'une palette nommée d'Agents_Bibliotheque_Palettes.md — jamais de couleurs improvisées sur le moment.
3. Le placement d'un sujet détouré suit la grille positionnelle d'Agents_Design_Reference.md Section 5bis (zone + X%/Y%/W%/H%) — même hors contexte d'analyse, pour rester cohérent dans tout l'atelier.
4. Toute composition à 2+ calques (fond, sujet, overlay, texte) documentée en pile de calques (Design_Reference Section 5ter).
5. Un effet de fond génératif = jamais un réflexe décoratif — dérivé du sujet réel (Direction_Artistique Section 2), croisé contre les 3 looks génériques (Direction_Artistique Section 3).
6. Sujet détouré jamais laissé "collé" sur son nouveau fond — cohérence colorimétrique obligatoire (Section 3).

CONFIRMATION OBLIGATOIRE avant de commencer :
"PROTOCOLE ACTIF — TRAITEMENT VISUEL. Prêt. Balance l'image ou le brief."

---

# AGENTS_TRAITEMENT_VISUEL.md
# Détourage, compositing, fonds génératifs — production d'asset visuel

---

## 1. RÔLE ET OBJECTIF

Ce fichier couvre ce qu'aucun autre ne couvre : la PRODUCTION de l'asset visuel lui-même (portrait détouré posé sur un fond composé, dégradé, texture, motif génératif) — pas le choix de couleur (Agents_Bibliotheque_Palettes.md), pas l'analyse de référence (Agents_Design_Reference.md), pas le comportement de l'interface (Agents_Standards_Interface_Web.md). Trois de ces fichiers sont
convoqués ici à chaque étape plutôt que dupliqués.

---
## 1bis. QUAND LA SOURCE N'EXISTE PAS ENCORE — PROPOSER UN PROMPT DE GÉNÉRATION

```
Cas : la composition cible a besoin d'un sujet mis en scène précis (personnage costumé, posture,
accessoire, décor spécifique — ex. "homme en tunique debout sur une barque, entouré d'un filet de
pêche, poissons suspendus en l'air") et aucune image de ce sujet n'a été fournie par le
professionnel.

✅ L'agent propose TOUJOURS les deux chemins possibles, jamais un seul par défaut :
  1. Le professionnel apporte une image existante (photo stock, rendu 3D, capture réelle) →
     l'agent l'analyse et la compose selon les Sections 2 (détourage) et 3 (compositing) de ce
     fichier.
  2. Aucune image disponible ou souhaitée → l'agent rédige un PROMPT de génération d'image prêt à
     l'emploi (Gemini / Ideogram / Recraft AI / autre outil du projet), décrivant
     sujet, pose, éclairage, cadrage, ambiance — avec la même rigueur de précision que la grille
     de positionnement d'Agents_Design_Reference.md Section 5bis (zone + proportions), jamais un
     prompt vague de 2-3 mots.

✅ Le prompt généré doit être directement copiable/utilisable, pas une description narrative floue
   à retraduire soi-même en prompt.
✅ Une fois l'image générée et fournie en retour, l'agent reprend le fil normal (Sections 2-3).

❌ Ne jamais improviser un placeholder texte ou une description vague à la place d'un sujet visuel
   manquant — soit une vraie image existe, soit un vrai prompt actionnable est proposé pour la
   produire. Pas d'entre-deux flou.
```

## 2. DÉTOURAGE — QUAND ET COMMENT

```
QUAND détourer :
✅ Portrait hero qui doit se poser sur un fond composé (dégradé, texture, couleur pleine) plutôt
   que rester sur sa photo d'origine.
✅ Produit e-commerce qui doit être présenté sur fond neutre/de marque, cohérent entre plusieurs fiches.
✅ Élément qui doit chevaucher un autre calque (texte, forme) — voir cas Sultan Karimi (Section 4).
❌ Jamais détourer par réflexe si la photo originale fonctionne déjà bien telle quelle — le
   détourage est un moyen, pas un objectif esthétique en soi.

OUTILS RÉELS DISPONIBLES (Adobe for creativity) :
image_select_subject     → sélectionne le sujet principal (ou une partie du corps précise)
image_remove_background  → génère le cutout à partir de la sélection
image_crop_and_resize    → recadrage intelligent après détourage
image_generative_expand  → étend le cadre d'une image (utile pour un fond à agrandir SANS détourer,
                            alternative quand le sujet n'a pas besoin d'être isolé)

QUALITÉ DE DÉTOURAGE — points d'attention :
✅ Cheveux/fourrure/tissu fin : remove_background brut laisse souvent une frange dure ou un halo
   résiduel — vérifier les bords à 200% de zoom avant de considérer le détourage terminé.
✅ Format de sortie : PNG transparent (alpha), jamais un fond blanc qui simule la transparence.
✅ Ombre portée d'origine perdue au détourage — en recréer une nouvelle cohérente avec le fond
   composé (Section 3), ne jamais laisser un sujet flotter sans ancrage visuel.
```

---

## 3. COMPOSITING — SUJET DÉTOURÉ + FOND COMPOSÉ

```
Étape 1 — Choisir le fond
Dégradé ou texture dérivé d'une palette NOMMÉE d'Agents_Bibliotheque_Palettes.md (jamais improvisé).
Si aucune palette ne convient → Section 5 de ce fichier-même (palettes) ou générer sur-mesure.

Étape 2 — Placer le sujet
Grille positionnelle (Agents_Design_Reference.md Section 5bis) : zone (9 zones) + X%/Y%/W%/H%.
Même sans contexte d'analyse, cette grille sert de langage commun pour spécifier un placement
sans ambiguïté ("centré, décalé légèrement bas-droite" ne suffit pas).

Étape 3 — Documenter la pile de calques
Format Design_Reference Section 5ter. Ordre typique :
  N │ CALQUE                        │ MODE    │ OPACITÉ
  4 │ Texte / UI par-dessus (opt.)  │ Normal  │ 100%
  3 │ Ombre portée recréée          │ Multiply│ ≈30-50%
  2 │ Sujet détouré                 │ Normal  │ 100%
  1 │ Fond composé (dégradé/texture)│ Normal  │ 100%

Étape 4 — Cohérence colorimétrique (le piège n°1 du détourage raté)
Un sujet détouré posé tel quel sur un fond différent de son éclairage d'origine a l'air "collé".
Corriger avec UNE des méthodes suivantes :
✅ Overlay couleur à faible opacité (5-15%) teinté vers l'accent du fond, appliqué sur le sujet
✅ Duotone léger si le fond est très marqué (ex: fond Chrome Liquide → légère désaturation du sujet)
✅ Vignettage doux qui rassemble sujet + fond dans une même ambiance lumineuse
❌ Ne jamais laisser un sujet en éclairage jour cru sur un fond sombre/dramatique sans correction

Étape 5 — Si un panneau UI vient se poser par-dessus la composition
→ Agents_Standards_Interface_Web.md Section 7bis (glassmorphisme) : seulement si le fond derrière
est assez riche pour justifier l'effet, jamais par défaut.
```

---

## 4. CAS DÉJÀ DOCUMENTÉS (voir /references/)

```
Sultan Karimi (design_reference_sultan-karimi.md, Section 5ter) : portrait détouré posé DEVANT un
mot-signature géant en fond — le sujet passe au calque 3, le mot au calque 2. Cas d'école de
sujet+typo superposés plutôt que sujet+dégradé simple.

Jason Martin (design_reference_jason-martin.md) : photo hero non détourée mais avec léger overlay
sombre — rappel que le détourage n'est pas systématique, une photo pleine peut suffire avec juste
un traitement d'overlay (Section 3, Étape 4).

Toujours consulter le dossier /references/ avant de composer une scène similaire — ne jamais
réinventer un traitement déjà documenté sans le regarder d'abord.
```

---

## 5. BIBLIOTHÈQUE D'EFFETS DE FOND GÉNÉRATIFS

Quand un effet de cette bibliothèque doit être implémenté en code (CSS/SVG/Canvas/WebGL) à partir
d'une référence visuelle riche (chrome liquide, oil slick, holographique, verre/métal 3D) :

✅ Ne JAMAIS s'arrêter à un dégradé 2 points simplifié par défaut sous prétexte de rapidité.
✅ Épuiser les capacités réelles de l'environnement avant de simplifier : combiner feTurbulence +
   feDisplacementMap + feColorMatrix (SVG), conic-gradient multi-stop, plusieurs mix-blend-mode
   superposés, animation lente de position/rotation — pousser jusqu'à la limite technique réelle,
   pas jusqu'à la première solution qui "ressemble à peu près".
✅ Si l'effet implique un vrai rendu 3D avec réfraction/spécularité (verre, chrome, liquide métal,
   pièce d'échecs Section 5 "Liquid 3D Shapes") → CSS/SVG seuls ne peuvent PAS approcher un rendu
   Figma/Adobe/Cinema4D. Passer à WebGL (Three.js, disponible en artifact React) plutôt que de
   livrer une approximation plate présentée comme suffisante.
✅ Dire EXPLICITEMENT quand le résultat reste une approximation stylisée vs un rendu proche de la
   référence — ne jamais prétendre au photoréalisme si l'implémentation choisie ne peut pas
   l'atteindre. Brutale honnêteté sur la limite technique, pas de survente du résultat.
❌ Ne jamais présenter un simple linear-gradient comme équivalent à "chrome liquide" ou
   "holographique" sans le dire clairement — c'est une approximation stylisée, pas la même chose.

Lien : Agents_Standards_Interface_Web.md Section 6 (Performance) — tout rendu WebGL/canvas coûteux
profilé sur mobile bas de gamme avant livraison, même exigence que Section 6 de CE fichier.

RÈGLE DE NON-FIGEMENT ET D'ENRICHISSEMENT (même principe qu'Agents_Direction_Artistique.md 4.4bis) :
les entrées ci-dessous sont des GRAINES. Sur un projet, l'agent peut les MODIFIER (matière, fréquence,
échelle, palette, déclencheur) pour les dériver du sujet réel, ou en composer une nouvelle. Toute
variante/création retenue est formulée au format ci-dessous et SOUMISE à Hora ; ajoutée à cette
section seulement sur validation, jamais en silence. La bibliothèque grossit ainsi projet par projet.

Format d'entrée :
```
### [Nom]
Description   : [ce que ça évoque visuellement]
Implémentation: [technique — SVG/CSS/Canvas, principe de code]
Palette liée  : [nom d'Agents_Bibliotheque_Palettes.md qui fonctionne bien avec]
Penser à cet effet quand : [déclencheur concret]
Origine       : [optionnel — "variante de [entrée], projet [nom]" ou "observée sur [type de site]" — principe seul]
```

#### Bruit / grain
Description : texture fine qui casse le plat d'un dégradé uni, évite l'effet "bandé" numérique. Contrairement aux effets de texture qui portent une identité visuelle (Voile organique, Texture papier), le grain est un effet de finition invisible à l'œil nu à distance normale — il ne se remarque pas, il empêche de remarquer le banding. L'opacité est le réglage le plus critique : trop faible (< 2%) et le banding reste visible, trop fort (> 10%) et la texture devient une signature non voulue qui interfère avec le contenu. Tester systématiquement à l'écran cible (OLED vs LCD, les deux réagissent différemment au grain).
Implémentation : filtre SVG feTurbulence + feColorMatrix en overlay, opacité très faible (3-8%), mix-blend-mode: overlay. Paramètres de départ : baseFrequency="0.65" (grain fin, neutre), numOctaves="4" (texture multi-échelle plus naturelle qu'un bruit mono-fréquence), stitchTiles="stitch" obligatoire si le fond est en background-repeat (évite la jointure visible à la répétition). Variante CSS pure si SVG non disponible : background-image: url("data:image/svg+xml,...") avec le filtre encodé en base64 — moins flexible mais zéro dépendance DOM. Ne jamais animer le grain (coût GPU disproportionné pour un effet correctif).
Palette liée : n'importe laquelle — effet de finition, pas de signature en soi.
Penser à cet effet quand : un dégradé de fond montre du banding visible (voir Agents_Standards_Interface_Web.md Section 7 "éviter le banding de dégradé") — usage correctif autant que stylistique. À appliquer en dernière passe de finition, après que la composition est validée, pas en début de production.

#### Blob organique (morph liquide)
Description : forme organique arrondie qui se déforme lentement — signature très reconnaissable. La forme n'a pas de contour net : ses bords sont définis par l'interpolation entre plusieurs points de contrôle qui se déplacent indépendamment, créant une impression de matière vivante qui respire plutôt que d'un objet qui tourne. L'effet fonctionne uniquement si le mouvement est lent (cycle > 8s) et l'easing sinusoïdal — accéléré ou avec un easing linéaire, il devient mécanique et perd toute référence organique. Réserver à UN seul blob par composition (Direction_Artistique Section 6) : deux blobs simultanés crée une compétition visuelle qui détruit la lisibilité du sujet principal.
Implémentation : <path> SVG animé via interpolation de points de contrôle (ou lib dédiée type flubber.js pour les transitions de path complexes), 8-12s par cycle, easing doux (cubic-bezier(0.45, 0, 0.55, 1)). Nombre de points de contrôle : 6-8 minimum pour une forme organique convaincante, en dessous ça ressemble à un polygone animé. Approche alternative CSS : border-radius multi-valeurs animé (border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%) — moins riche mais zéro SVG, suffisant pour des blobs simples. Renvoi direct : Agents_Direction_Artistique.md Section 4.4bis technique n°9. Coût GPU : profiler sur mobile bas de gamme avant livraison (même checklist Section 8).
Palette liée : Nuit & Magenta Sourd, Silex & Émeraude
Penser à cet effet quand : sujet créatif/produit qui a une vraie fluidité à évoquer — réserver à UN élément (Direction_Artistique Section 6), jamais généralisé à tout le fond. Pertinent également pour un hero de produit wellness/naturel qui veut une profondeur ambiante douce, en complément des Orbes flottants (Section 5 — à distinguer : orbes = plusieurs points indépendants en dérive, blob = une seule forme qui se déforme).

#### Mesh gradient
Description : dégradé multi-points, plus riche et organique qu'un linear-gradient à 2 couleurs. Là où un dégradé linéaire crée une transition unidirectionnelle et prévisible, le mesh gradient place des points de couleur à des positions arbitraires dans l'espace 2D et interpole entre eux — le résultat évoque une lumière ambiante complexe plutôt qu'un éclairage directionnel. L'effet est d'autant plus convaincant que les couleurs choisies sont proches en température (toutes chaudes ou toutes froides) : des couleurs trop contrastées en température créent des zones de boue à la jonction plutôt qu'une interpolation douce.
Implémentation : plusieurs radial-gradient CSS superposés à des positions différentes (background-image: radial-gradient(...), radial-gradient(...), radial-gradient(...)), ou SVG avec filtres de flou combinés (feGaussianBlur sur des rectangles de couleur empilés) ; alternative canvas : interpolation de couleur par grille de points (algorithme bilinéaire ou bicubique selon la richesse voulue). Paramètre critique : le blur-radius des radial-gradients doit être suffisamment grand pour que les zones se fondent sans jointure visible (au minimum 30-40% du conteneur). Variante animée : @keyframes sur background-position des radial-gradients individuels — mouvement très lent (20-40s) pour un effet ambiant non distrayant. Tester sur mobile : plusieurs radial-gradient superposés avec animation déclenchent des repaints coûteux sur GPU mobile bas de gamme.
Palette liée : toute palette à 3+ teintes (ex : Marché aux Épices, Abysse & Corail Froid)
Penser à cet effet quand : le sujet a plusieurs teintes également importantes à faire cohabiter, pas juste un fond + un accent. Distinct du Blob organique (une forme animée isolée) et des Orbes flottants (plusieurs cercles en dérive indépendante) : le mesh gradient est statique ou quasi-statique, il définit l'ambiance globale du fond, pas un élément focal.

#### Contour topographique
Description : lignes de niveau façon carte en relief — évoque la donnée géographique/scientifique. Chaque ligne représente une altitude ou une valeur constante, l'espacement entre les lignes indique la pente (serré = abrupt, large = plat) — cette logique structurelle doit rester lisible même en usage décoratif, sinon l'effet perd sa référence et devient un simple motif de lignes ondulées sans distinction avec le Contour fluide (Section 5). La couleur des lignes est toujours semi-transparente sur le fond : des lignes opaques créent une carte lisible, des lignes semi-transparentes créent une texture de fond. Les deux usages sont valides mais ne doivent pas être mélangés dans la même composition.
Implémentation : SVG de courbes de niveau générées (bibliothèque d3-contour pour des données réelles, ou génération manuelle de paths avec bruit de Perlin comme source d'élévation fictive), traits fins (stroke-width: 0.5-1px) semi-transparents (opacity: 0.2-0.4). Pour un usage purement décoratif sans données réelles : générer un bruit 2D (canvas + Perlin), l'échantillonner à intervalles réguliers de valeur, extraire les iso-contours via d3.contours(). Éviter les angles aigus dans les paths générés (symptôme d'une résolution de grille trop basse) : augmenter la résolution de la grille source avant extraction des contours.
Palette liée : Nuit Cyan & Argent, Silex & Émeraude
Penser à cet effet quand : sujet data/science/cartographie/environnement qui a un vrai rapport au terrain ou à la mesure — jamais pour "faire technique" sans lien réel au sujet. Distinct du Contour fluide (Section 5, plus organique/ondulé, adapté aux sujets sonores/fluides) et des Dunes (Section 5, vagues larges et peu nombreuses à opacité dégressive, adapté aux paysages).

#### Grille de points (dot grid)
Description : pattern de points régulièrement espacés, discret, souvent en overlay très léger. Contrairement au Bruit/grain (aléatoire, correctif) et à la Grille technique blueprint (lignes continues, référence plan), la grille de points est un motif régulier qui évoque le papier millimétré ou le carnet de notes — la régularité est ce qui fait la référence, pas la texture. L'espacement entre les points est le paramètre le plus sensible : trop serré (< 12px) et le motif devient un bruit régulier illisible, trop large (> 40px) et les points deviennent des éléments graphiques conscients plutôt qu'une texture de fond.
Implémentation : background-image: radial-gradient(circle, [couleur] 1px, transparent 1px); background-size: 20px 20px; (ajuster taille/espacement selon densité voulue). Couleur du point : toujours en transparence relative au fond (rgba ou hsla) plutôt qu'une couleur opaque fixe — garantit que le motif reste cohérent si le fond change. Variante décalée (plus organique) : deux radial-gradient imbriqués avec background-size décalé d'un demi-pas (10px 10px décalé de 5px 5px) pour un motif en quinconce. Coût nul — pure CSS, aucun impact GPU même sur mobile bas de gamme.
Palette liée : Brume & Noir, Galet & Encre Bleue
Penser à cet effet quand : fond qui a besoin d'une texture minimale sans détourner l'attention du contenu — dashboard, documentation technique. À préférer à la Grille technique (Section 5) quand le sujet n'a pas de rapport au plan/schéma mais veut simplement casser la platitude d'un fond uni. Coût nul, finition immédiate — mais jamais par réflexe sans confronter au sujet réel.

#### Voile organique (mousse/texture végétale)
Description : bruit désaturé qui évoque une matière vivante (mousse, lichen) plutôt qu'un bruit numérique neutre. La différence avec le Bruit/grain est dans la fréquence : le grain est fin et uniforme (une seule fréquence haute), le voile organique utilise plusieurs octaves à fréquence basse — les motifs sont plus larges, plus irréguliers, et évoquent une matière avec de la structure interne plutôt qu'un bruit de surface. La teinte est toujours orientée vers le vert/brun de la palette : un voile neutre gris devient du bruit numérique, pas de la mousse.
Implémentation : feTurbulence SVG avec baseFrequency plus basse (0.02-0.08, motifs plus larges) que le bruit standard (0.65), numOctaves="6" pour la richesse de texture, teinté vers le vert de la palette utilisée via feColorMatrix. Opacité : 5-12% en overlay — plus que le grain correctif mais toujours sous le seuil où la texture devient dominante. Variante : combiner deux calques feTurbulence à fréquences différentes (un bas pour la structure, un haut pour le grain de surface) via feMerge — résultat plus naturaliste qu'un bruit mono-fréquence.
Palette liée : Mousse Électrique, Collines & Ombre
Penser à cet effet quand : sujet botanique/nature qui veut une texture organique en fond plutôt qu'un dégradé plat. Pertinent également pour Suie & Jade ou Ivoire & Pin si le brief a un vrai ancrage végétal/naturaliste — la teinte du filtre s'adapte à la palette choisie, la technique reste identique.

#### Rayures diagonales fines
Description : motif de rayures fines et régulières, discret, évoque le signalétique/l'industriel. La référence est double : le ruban de chantier (noir/jaune, rayures larges) et la trame typographique de sécurité (lignes très fines, quasi invisibles). L'usage dans la bibliothèque vise le second registre — des rayures suffisamment fines pour être une texture de fond, pas un signal d'alerte. Des rayures larges (> 4px) ou très contrastées font immédiatement basculer dans le premier registre (chantier/danger) même sur un fond neutre.
Implémentation : background: repeating-linear-gradient(45deg, [couleur1] 0px, [couleur1] 1px, transparent 1px, transparent 8px); Paramètres : épaisseur du trait (1-2px), espacement (6-12px selon la densité voulue), angle (45° classique, 30° plus doux, 60° plus tendu). Couleur des rayures toujours en transparence relative (rgba) sur le fond — jamais une couleur opaque contrastée (bascule dans le chantier). Variante croisée (hachures) : deux repeating-linear-gradient superposés à 45° et -45° — plus dense, évoque le grillage ou la trame de sécurité.
Palette liée : Béton & Jaune Taxi, Ocre & Charbon
Penser à cet effet quand : sujet industriel/logistique/signalétique qui a un vrai rapport au motif de sécurité/chantier — jamais en décoration abstraite sans lien. À distinguer de la Grille technique blueprint (lignes orthogonales, référence plan technique) et de la Grille de points (points réguliers, référence papier millimétré).

#### Aurore / nébuleuse
Description : dégradé radial multi-couleur doux, mouvement lent, évoque le ciel nocturne/l'espace. L'effet repose sur deux principes : la superposition de radial-gradient en mix-blend-mode: screen (les couleurs s'additionnent comme des sources de lumière, pas comme des pigments) et le mouvement très lent (30-60s par cycle) qui empêche l'œil de percevoir la mécanique de l'animation. Accéléré, l'effet devient clairement algorithmique et perd toute référence au ciel. Le nombre de sources lumineuses est le second paramètre : deux sources créent un dégradé simple, cinq ou plus créent une vraie sensation d'immensité.
Implémentation : plusieurs radial-gradient CSS en mix-blend-mode: screen, animation de position très lente (30-60s par cycle) via @keyframes sur background-position. Fond de base obligatoirement sombre (#000 ou teinte sombre de la palette) — sans fond sombre, screen ne fonctionne pas (les couleurs s'éclaircissent vers le blanc au lieu de simuler une lumière additive). Nombre de gradients : 4-6 minimum pour une richesse convaincante. Coût GPU modéré — plusieurs background-image animées simultanément : tester sur mobile bas de gamme, envisager will-change: background-position avec parcimonie.
Palette liée : Nuit & Magenta Sourd, Saphir & Argent
Penser à cet effet quand : sujet immersif/culturel/spatial qui a un vrai rapport à l'immensité ou au rêve — coût GPU modéré, tester sur mobile bas de gamme. À distinguer des Orbes flottants (Section 5 — cercles distincts en dérive, ambiance douce sans référence spatiale/nocturne) et du Mesh gradient (positions fixes, pas de mouvement propre par point, pas de référence lumineuse additive).

#### Grille technique (blueprint)
Description : fines lignes de grille régulières, évoque le plan technique/le dashboard. La référence est le calque de construction d'un plan d'architecte ou d'un schéma d'ingénierie : lignes uniformes, espacement constant, couleur unique en faible opacité sur fond sombre ou clair. Ce qui distingue cet effet de la Grille de points (ponctuelle, carnet de notes) et des Rayures diagonales (obliques, signalétique) : les lignes sont strictement orthogonales et continues, créant une impression de précision métrologique plutôt que de texture décorative.
Implémentation : background-image: linear-gradient([couleur] 1px, transparent 1px), linear-gradient(90deg, [couleur] 1px, transparent 1px); background-size: 24px 24px; Variante hiérarchique (grille majeure + mineure) : deux paires de linear-gradient superposées, l'une à 24px (lignes fines, faible opacité), l'autre à 120px (lignes légèrement plus épaisses ou plus opaques) — évoque un plan avec divisions principales et subdivisions. Couleur : toujours en rgba ou hsla (opacité 8-15% sur fond sombre, 4-8% sur fond clair). Coût nul — pure CSS, aucun impact GPU.
Palette liée : Abysse & Corail Froid, Chrome Liquide Clair/Sombre
Penser à cet effet quand : sujet dev tools/ingénierie/architecture qui veut évoquer le plan/le schéma technique. Pertinent également pour Ardoise & Verdict (Section 4.4 palettes) sur un dashboard de scoring ou d'audit — la grille renforce la rigueur sans ajouter de couleur. À toujours croiser contre le Look 2 proscrit (Direction_Artistique Section 3) : fond sombre + grille + accent isolé peut reconstituer le pattern générique IA si les proportions ne sont pas maîtrisées.

#### Texture papier / fibreuse
Description : grain doux type papier recyclé, chaleur éditoriale plutôt que froideur numérique. Contrairement au Bruit/grain (correctif neutre, invisible) et au Voile organique (structure végétale large), la texture papier vise un résultat perceptible à distance normale — l'œil doit sentir la matière sans pouvoir nommer le procédé. La teinte du filtre est déterminante : orientée vers le crème/ocre, elle évoque le papier journal ou le papier recyclé ; orientée vers le blanc froid, elle évoque le papier couché ou la photocopie — deux registres opposés malgré la même technique.
Implémentation : feTurbulence SVG à faible contraste + feColorMatrix vers une teinte crème, opacité 5-10% en overlay sur le fond. Paramètres : baseFrequency="0.15 0.25" (fréquences X/Y différentes pour simuler le grain directionnel du papier, moins isotrope qu'un bruit uniforme), numOctaves="4". Variante haute fidélité : utiliser une vraie photo de papier texture (libre de droits) en mix-blend-mode: multiply à 8-15% — résultat plus convaincant qu'un SVG filter pour un asset fixe, mais inadapté à un fond dynamique/animé.
Palette liée : Craie & Cobalt, Soie Ivoire
Penser à cet effet quand : contenu éditorial/culturel qui veut une chaleur tactile même en digital. Pertinent également pour Lin & Rouille, Lin & Anthracite ou toute palette à fond lin/ivoire — la texture papier renforce la cohérence matière déjà portée par la palette. À ne pas cumuler avec le Voile organique sur la même composition : les deux jouent sur la texture de surface, choisir l'un selon le registre (végétal vs éditorial).

#### Obsidienne volcanique
Description : surface anguleuse noire/gris-anthracite, facettes brisées, reflets nets et durs — évoque le verre volcanique plutôt qu'une roche mate. La clé de l'effet est le contraste entre les facettes : chaque plan a sa propre valeur de lumière (très sombre, sombre, clair, très clair) et la jointure entre deux facettes est nette — pas de dégradé entre les plans comme dans une sphère lisse, mais une rupture franche comme dans un cristal. C'est cette rupture qui crée l'illusion minérale. Un fond simplement sombre avec des traits diagonaux n'est pas de l'obsidienne : la hiérarchie des valeurs de lumière entre les facettes est obligatoire.
Implémentation : dégradés linéaires multiples à angles variés (facettes) via clip-path: polygon() répétés, chaque polygone avec son propre linear-gradient orienté selon la normale de sa face. Valeurs de luminosité par facette : répartir entre 5% et 40% de luminosité relative au fond (L en HSL) pour créer la hiérarchie. Variante texture photo : texture photo réelle d'obsidienne en overlay multiply à faible opacité — résultat plus convaincant pour un asset fixe, mais s'assurer que la photo est libre de droits. Aucune animation nécessaire ni souhaitable — le mouvement casse l'illusion minérale (une roche ne bouge pas).
Palette liée : Basalte Émietté, Mur de Pierre Noire, Chrome Liquide Sombre
Penser à cet effet quand : sujet minéral/luxe sombre/sci-fi qui a un vrai rapport à la roche/au verre naturel — jamais en fond générique "dark mode" sans lien matière. Distinct du Brutalisme tactile (Section 5 — rejet du flou et de l'arrondi comme système de design, pas un effet de texture) et de Chrome Liquide en mouvement (Section 5 — métal fluide animé, ici la roche est rigide et statique).

#### Glitch numérique
Description : distinct du bruit/grain classique (Section 5 existante) — lignes de scan horizontales décalées, artefacts RGB déchirés, grille de points colorés type écran défaillant, plutôt qu'un bruit fin uniforme. L'effet glitch n'est pas une texture de fond mais un événement ponctuel : il doit être déclenché, pas permanent. Un glitch en boucle continue cesse d'être un glitch (perturbation) et devient un motif décoratif (wallpaper animé) — ce qui vide l'effet de sa référence narrative (signal corrompu, erreur système). La durée de l'événement glitch : 200-400ms maximum, suivi d'un retour à l'état normal, déclenché à l'entrée dans le viewport ou au hover.
Implémentation : bandes horizontales translate-X aléatoires courtes durée (CSS @keyframes), décalage de canal RGB (text-shadow multi-couches colorées désaxées pour le texte, filter: drop-shadow() multi-couleurs pour les images), grille de points via background-image: radial-gradient() répété avec variation de teinte par ligne. Durée d'un événement glitch : 200-400ms en steps() easing (pas ease — le glitch est discret, pas lissé). prefers-reduced-motion obligatoire : désactiver l'animation, garder l'état statique sans artefact. Jamais en fond en boucle continue — réserver aux déclencheurs événementiels (hover, scroll trigger, entrée viewport une seule fois).
Palette liée : Abysse & Corail Froid, Nuit Cyan & Argent
Penser à cet effet quand : sujet tech/cybersécurité/data corrompue qui a un vrai rapport au signal défaillant — jamais en décoration esthétique pure sans justification narrative. À distinguer de la Ligne de balayage/scan biométrique (Section 5 — trait net et continu, pas un artefact de corruption) et du Duotone total (Section 5 — traitement colorimétrique global, pas un événement de perturbation).

#### Chrome liquide en mouvement
Description : métal fondu/mercure en flux, reflets qui suivent une courbure organique plutôt que géométrique — différent du Chrome Liquide statique déjà en palette (celui-ci ajoute le mouvement). La distinction avec le Blob organique (Section 5) est dans la matière simulée : le blob évoque une forme biologique qui respire, le chrome liquide évoque un métal en fusion qui s'écoule — les reflets nets et les highlights mobiles sont ce qui crée la différence perceptive. Sans ces reflets lumineux simulés, l'effet devient un blob gris sans référence métallique.
Implémentation : SVG feTurbulence + feDisplacementMap animée lentement (déplacement de la seed ou de baseFrequency via SMIL ou JS), ou vidéo boucle courte en fond avec mix-blend-mode: luminosity pour rester monochrome. Paramètres SVG : scale du displacement map entre 20-40 (plus fort = effet plus liquide/fluide, mais attention à l'artefact de bord), fréquence de turbulence très basse (0.01-0.03) pour des ondulations larges plutôt que du bruit fin. Approche vidéo : plus convaincante pour un vrai rendu métal en fusion, mais coût bande passante — utiliser uniquement si le projet est desktop et haut débit, avec fallback image statique sur mobile.
Palette liée : Chrome Liquide Clair, Chrome Liquide Sombre (déjà en bibliothèque — cet effet EST la version animée de ces palettes)
Penser à cet effet quand : deeptech/luxe qui veut un mouvement organique monochrome, coût GPU à vérifier sur mobile bas de gamme (même vigilance que Blob organique, Section 6 checklist). À distinguer de la Nappe holographique irisée (Section 5 — irisation multicolore sur fond sombre, pas un monochrome métal) et des Orbes flottants (Section 5 — cercles distincts en dérive douce, pas une surface métallique en fusion).

#### Nappe holographique irisée (Oil Slick)
Description : liquide noir/sombre avec reflets arc-en-ciel qui glissent selon l'angle — irisation type pétrole/nacre, pas un simple dégradé multicolore statique. La référence physique est l'interférence optique sur une fine pellicule (couche de pétrole sur eau, surface de savon, nacre) : les couleurs ne sont pas des pigments mais des longueurs d'onde réfléchies, ce qui explique leur glissement et leur continuité (violet → bleu → vert → jaune → rouge en cycle). Un dégradé arc-en-ciel avec des couleurs distinctes et séparées n'est pas un oil slick — la continuité et la fluidité du spectre sont obligatoires.
Implémentation : conic-gradient ou repeating multi-stop gradient en rotation lente + filter: hue-rotate() animé + mix-blend-mode: color-dodge sur une base sombre pour l'effet "huile sur noir" plutôt que couleurs plates. Combiner avec un léger feTurbulence pour casser la régularité du gradient (sinon effet plat qui trahit l'algorithme). Voir règle Section 5bis — pousser au maximum avant de livrer une version simplifiée. Durée de rotation hue-rotate : 8-15s pour un glissement lent convaincant. Fond de base : noir ou très sombre obligatoire — color-dodge sur fond clair inverse l'effet.
Palette liée : Chrome Liquide Sombre, Silex & Émeraude (pour une variante plus sourde)
Penser à cet effet quand : le sujet a un vrai rapport littéral au pétrole/à l'irisation naturelle (nacre, plumage, essence sur eau) — PAS comme habillage tendance holographique générique sans lien réel au sujet (risque de tomber dans le pattern "filtre Instagram" si utilisé par réflexe). À distinguer de la Feuille holographique irisée (Section 5 — pastel/clair sur fond clair, registre packaging vs registre profondeur sombre).

#### Contour fluide (variante organique du Contour topographique)
Description : lignes ondulées fluides façon onde sonore/champ vectoriel, plus organique et moins régulier qu'un contour topographique en courbes de niveau classique. La distinction fondamentale avec le Contour topographique (Section 5) est dans la référence : les courbes de niveau représentent une élévation constante (elles ne se croisent jamais, règle cartographique), les contours fluides représentent un champ en mouvement (onde, flux, turbulence) où les lignes peuvent se rapprocher, s'éloigner, se tordre selon l'intensité locale du champ. La régularité géométrique du contour topographique est une contrainte de données réelles ; ici l'irrégularité organique est l'intention.
Implémentation : Perlin noise appliqué à un champ de lignes (via d3 ou génération manuelle de paths SVG avec bruit de fréquence variable sur l'amplitude), contraste fort blanc sur noir. Paramètre clé : la fréquence du bruit Perlin sur l'amplitude des lignes — basse fréquence (0.005-0.02) pour des ondulations larges et douces (onde sonore), haute fréquence (0.05-0.15) pour des turbulences serrées (champ magnétique, eau agitée). Espacement entre les lignes : constant (comme en cartographie) même si l'ondulation varie — c'est ce qui maintient la lisibilité du champ vectoriel.
Palette liée : Chrome Liquide Sombre, Nuit Cyan & Argent
Penser à cet effet quand : sujet data/son/mouvement fluide — distinct du Contour topographique (Section 5 existante) qui reste réservé aux sujets cartographiques/géographiques réels. Pertinent pour un sujet audio/musique, physique des fluides, visualisation de données temporelles qui ont un vrai rapport à l'onde ou au flux.

#### Ligne d'horizon (vague simple statique)
Description : une seule vague SVG en bas d'écran — plus minimal que Dunes, un seul geste graphique. Là où les Dunes (Section 5) créent une profondeur par accumulation de plusieurs paths à opacités dégressives, la Ligne d'horizon est un seul trait qui divise le fond en deux zones — au-dessus (ciel/air) et en-dessous (terre/eau). C'est un geste de composition, pas une texture : il structure l'espace plutôt que de le garnir. Un seul path, une seule couleur, zéro empilement — toute complexité supplémentaire le fait glisser vers les Dunes.
Implémentation : un <path> SVG unique en bas de section, courbe douce (2-3 points de contrôle Bézier maximum), couleur pleine ou dégradé léger. Amplitude de la courbe : 3-6% de la hauteur du conteneur (au-delà, ce n'est plus un horizon mais une vague). Le path dépasse légèrement des bords du conteneur (overflow masqué) pour éviter les extrémités visibles. Variante animée : translation Y très lente (±2-3px, 6-8s, ease-in-out en boucle) pour simuler une houle imperceptible — à n'utiliser que si le sujet est explicitement maritime.
Palette liée : Océan & Étain, Coquille & Pétrole
Penser à cet effet quand : sujet maritime/horizon qui a besoin d'un seul geste graphique simple, pas d'une composition élaborée de plusieurs vagues. Pertinent en séparateur de section sur un site de tourisme côtier ou de logistique maritime — à distinguer des Dunes (plusieurs paths empilés, profondeur de paysage) et du Contour fluide (ondulations multiples comme champ vectoriel).

#### Feuille holographique irisée (Holographic Foil)
Description : surface pastel nacrée qui change de teinte selon l'angle — rose/vert/bleu/violet en dégradés doux et fluides, effet "feuille métallisée holographique" (packaging, stickers, papier cadeau premium). Plus doux/pastel/clair que la Nappe Oil Slick (qui reste sombre et saturée) — les deux ne sont PAS interchangeables, choisir selon la tonalité du sujet réel. La référence physique est différente de l'Oil Slick : le film holographique industriel (sticker holographique, papier cadeau argenté) diffracte la lumière en un spectre uniforme sur toute la surface, alors que l'huile sur eau crée des zones d'interférence localisées. Le premier est régulier et perlé, le second est aléatoire et profond.
Implémentation : conic-gradient multi-stop pastel en rotation très lente (30-45s/cycle) + feTurbulence léger (baseFrequency="0.4", scale="3") pour le grain métallique + mix-blend-mode: screen sur fond clair (inverse de l'Oil Slick qui fonctionne sur fond sombre avec color-dodge). Stops du conic-gradient : 6-8 stops minimum pour un spectre continu convaincant, répartis sur 360° avec des transitions douces (pas de stops durs). Fond de base : blanc ou très clair obligatoire — screen sur fond sombre produit un résultat trop terne.
Palette liée : aucune palette pastel-holographique en bibliothèque actuellement — générer sur-mesure (Agents_Bibliotheque_Palettes.md Section 5) si le projet en a réellement besoin.
Penser à cet effet quand : packaging/merch/sticker/carte avec un vrai rapport à la matière holographique physique réelle (vinyle, papier holographique imprimé) — jamais comme habillage tendance générique sans lien matière (même risque que rappelé pour Oil Slick : réserver aux sujets qui en ont un usage réel, pas décoratif par réflexe).

#### Duotone total (sujet + fond)
Description : traitement colorimétrique appliqué à TOUTE l'image — portrait/sujet ET fond dans la même teinte dominante — pas un simple overlay posé sur le fond seul. Différent d'un accent couleur classique : ici il n'y a plus de "vraies" couleurs, tout passe par le même filtre. La distinction avec un simple overlay coloré (Section 3, Étape 4) est dans l'intention et l'intensité : un overlay de cohérence colorimétrique est à 5-15% d'opacité, quasi imperceptible, il corrige sans dominer. Le duotone total est à 80-100% d'intensité, il transforme — le sujet perd ses couleurs réelles, ne conserve que sa structure lumineuse dans la teinte choisie. Les deux effets ne sont pas gradués sur la même échelle, ils sont structurellement différents.
Implémentation : CSS filter: hue-rotate() saturate() brightness() sur l'image source complète (photo + fond si même calque), ou dégradé mix-blend-mode: color/hue posé sur toute la composition en calque unique au-dessus de tout. Approche alternative en deux teintes réelles (noir + couleur, pas juste une teinte + gris) : filter: grayscale(1) sur l'image d'origine, puis deux background en mix-blend-mode: multiply et screen avec les deux teintes souhaitées superposées — résultat plus riche qu'un simple hue-rotate. prefers-reduced-motion : l'effet est statique par nature, pas de précaution motion spécifique.
Palette liée : n'importe quelle palette monochrome sombre de la bibliothèque, à condition de garder la teinte MATE — jamais saturée au max (même vigilance que Mousse Électrique, Section 4.1).
Penser à cet effet quand : le sujet a un vrai rapport à un univers monochrome cohérent (tech/scan, photographie argentique reconstituée, ambiance nocturne) — jamais pour "faire stylé" sans lien, et jamais si le sujet a besoin de ses vraies couleurs pour être compris (produit e-commerce par exemple, où le duotone casserait la lisibilité réelle du produit). Source d'observation : hero marque tech (design_reference_hero-neon-vert-laser.md).

#### Vortex de traînées lumineuses (light trail vortex)
Description : lignes lumineuses parallèles qui convergent en spirale autour d'un point focal (silhouette, objet), sur fond nocturne sombre — évoque une distorsion spatio-temporelle plutôt qu'un simple rayon de lumière. La différence avec l'Aurore/nébuleuse (Section 5) est dans la structure : l'aurore est diffuse et sans direction (lumière ambiante), le vortex a un point de convergence défini et des lignes qui suivent des trajectoires précises vers ce point. L'effet ne fonctionne que si le point focal est identifié et maintenu — sans lui, les traînées deviennent un motif de lignes sans narration.
Implémentation : SVG — plusieurs <path> en courbes de Bézier tracés en éventail depuis un point de fuite, dégradé le long du tracé (blanc/or → transparent via linearGradient sur le stroke), dupliqués avec léger décalage d'angle pour la densité. Nombre de traînées : 8-16 minimum pour l'effet de spirale convaincant. Version animée : Three.js, rotation lente autour du point focal (1-2 rotations/minute). Couleur des traînées : toujours en mix-blend-mode: screen ou add sur fond sombre — une traînée opaque sur fond sombre crée un trait décoratif, une traînée en screen crée une lumière.
Palette liée : Encre & Safran, Nuit & Miel (fond quasi-noir + accent chaud obligatoire — un accent froid casse l'effet "chaleur/distorsion").
Penser à cet effet quand : sujet SF/temporalité/exploration qui a un vrai rapport à la distorsion spatiale — jamais en fond dramatique gratuit sans lien narratif réel. Pertinent pour un sujet physique quantique ou astronomique couplé à Spectre & Noir (nouvelle palette Section 4.4) si la teinte est froide plutôt que chaude.

#### Verre sur fond ambiant flouté (Ambient Blur Glass)
Description : panneau glassmorphisme posé sur une photo/illustration de fond fortement floutée (≥40px) et teintée chaud (souvent un dégradé coucher de soleil) — différent du glassmorphisme "sur fond riche net" de Agents_Standards_Interface_Web.md 7bis : ici le fond est délibérément rendu abstrait par le flou, pas juste riche. La distinction opérationnelle avec 7bis est dans l'intention du fond : en 7bis, le fond est riche ET lisible derrière le verre (les formes restent identifiables, l'effet glass tire sa richesse de ce qu'il y a derrière). Ici, le fond est volontairement illisible — c'est sa lumière et sa couleur qui comptent, pas son contenu. L'image source peut être n'importe quelle photo lumineuse et colorée une fois floutée à ≥60px.
Implémentation : image de fond en filter: blur(60-100px) saturate(1.3), positionnée en absolute derrière un conteneur overflow: hidden ; panneau UI en backdrop-filter classique (voir 7bis) mais avec une opacité de fond plus élevée (0.85-0.95) que le glass léger habituel, car le flou reste lumineux par endroits. overflow: hidden sur le conteneur parent est obligatoire pour que le blur ne déborde pas sur les éléments adjacents. Fallback : image statique pré-floutée exportée en WebP pour les navigateurs sans backdrop-filter support.
Palette liée : toute palette sombre + accent chaud (Nuit & Miel, Encre & Safran) pour le panneau ; le dégradé flouté peut sortir volontairement de cette palette (contraste chaud/sombre assumé).
Penser à cet effet quand : assistant IA/copilot, app de productivité premium qui veut une ambiance vivante derrière une UI sobre — jamais si le visuel flouté n'a aucun lien avec la marque/contexte. À distinguer du Verre liquide nouvelle génération (Section 5 — réfraction réelle et reflets spéculaires mobiles, coût GPU nettement supérieur) : choisir Ambient Blur Glass quand le flou abstrait suffit, réserver Liquid Glass quand la déformation visuelle du contenu derrière est l'effet recherché.

#### Orbes flottants (Floating orbs)
Description : plusieurs sphères de couleur floutées qui dérivent lentement à des vitesses et trajectoires indépendantes — crée une profondeur douce, différent du Blob organique (une seule forme qui se déforme) et du Mesh gradient (positions fixes, pas de mouvement propre par point). La clé de l'effet est la désynchronisation des trajectoires : si plusieurs orbes bougent à la même vitesse ou dans la même direction, l'effet devient mécanique et trahit l'algorithme. Chaque orbe doit avoir sa propre durée d'animation (pas de diviseur commun entre les durées pour éviter la réinitialisation synchronisée perceptible) et sa propre trajectoire (translation X/Y indépendants).
Implémentation : div circulaires en position: absolute, filter: blur(60-100px), animation de translation lente et non-synchronisée par orbe (durées différentes pour éviter l'effet "en phase"). Durées suggérées : 7s, 11s, 13s, 17s (nombres premiers — garantissent l'absence de synchronisation sur des cycles raisonnables). Nombre d'orbes : 3-5 maximum (au-delà, le fond devient trop actif et concurrence le sujet principal). will-change: transform sur chaque orbe animé — améliore les performances GPU en compositing de couche. Tester sur mobile : plusieurs filter: blur() animés simultanément constituent le cas le plus coûteux en repaint.
Palette liée : toute palette à 2-3 accents qui peuvent cohabiter sans se marcher dessus.
Penser à cet effet quand : hero de produit doux/premium qui veut une profondeur ambiante sans narration — jamais si le sujet demande de la précision ou du tranchant (voir Obsidienne volcanique pour l'inverse). À distinguer du Mesh gradient (statique, ambiance globale sans mouvement propre) et du Blob organique (une seule forme qui se déforme, pas plusieurs points en dérive).

#### Champ d'étoiles (Starfield)
Description : points fins dispersés façon ciel nocturne, légère dérive parallax entre plusieurs couches de points à tailles/vitesses différentes — distinct de la Grille de points (régulière, statique, usage UI discret). L'effet repose sur la profondeur simulée par plusieurs couches : les étoiles proches (grandes, rapides) et les étoiles lointaines (petites, lentes) créent une illusion de volume. Sans cette stratification, un champ de points uniforme ressemble à une Grille de points aléatoire, pas à un ciel. Minimum deux couches distinctes (proche + lointain), idéalement trois (proche + moyen + lointain).
Implémentation : plusieurs calques de box-shadow multiples générés (technique "1000 étoiles en un seul div" — un div 1px × 1px avec un box-shadow de N ombres générées aléatoirement, réinitialisées en JS ou pré-générées en Sass) ou canvas avec positions aléatoires par couche, translation lente en boucle. Taille des points par couche : lointain = 1px, moyen = 1.5px, proche = 2px. Vitesse de translation : lointain = 20-30s, moyen = 12-18s, proche = 6-10s. Clé de performance : les box-shadow multi-valeurs sur un seul élément sont beaucoup moins coûteux que N éléments DOM séparés — privilégier la technique du div unique.
Palette liée : toute palette sombre de la Section 4.1 ou 4.4 (fond quasi-noir obligatoire).
Penser à cet effet quand : sujet spatial/nocturne réel — jamais en fond générique "dark mode premium" sans lien avec l'immensité/la nuit comme sujet propre. Pertinent pour Saphir & Argent (joaillerie/horlogerie avec référence ciel) ou Spectre & Noir (nouvelle palette, sujet science/physique) si le brief a un vrai ancrage cosmique ou nocturne.

#### Verre liquide nouvelle génération (Liquid Glass, distinct du glassmorphisme basique)
Description : évolution 2025-2026 du glassmorphisme (Agents_Standards_Interface_Web.md 7bis) — au flou simple s'ajoute une vraie réfraction qui déforme visuellement le contenu derrière le panneau, avec reflets spéculaires qui réagissent au mouvement. Liquid Glass utilise un rendu en temps réel et réagit dynamiquement au mouvement avec des reflets spéculaires. La distinction perceptive avec le glassmorphisme 7bis est nette à l'usage : en 7bis, le fond reste parfaitement reconnaissable derrière le panneau (légèrement flouté, couleur décalée) ; en Liquid Glass, le fond est déformé par la réfraction comme si on regardait à travers un vrai verre courbé — les formes sont distordues, pas juste floues.
Implémentation : backdrop-filter: blur() classique ne suffit plus — ajouter un filtre SVG feDisplacementMap pour la distorsion (alimenté par feTurbulence ou une normal map de la surface du verre), feSpecularLighting pour le reflet lumineux mobile. Coût de repaint nettement supérieur au glassmorphisme simple — profiler impérativement sur mobile bas de gamme avant de généraliser (même exigence que 7bis, renforcée ici). Approche alternative pour un résultat approché sans WebGL : filter: url(#glass-distort) pointant vers un filtre SVG pré-défini dans le DOM — moins dynamique mais exécutable en pur CSS/SVG sans Three.js.
Palette liée : toute palette, l'effet reste monochrome par nature (verre = transparence, pas couleur).
Penser à cet effet quand : le budget dev et le device cible (mobile haut de gamme/desktop) justifient le coût — jamais comme glassmorphisme "amélioré" par réflexe si 7bis suffit déjà.
Éviter avec : ne jamais cumuler avec le glassmorphisme basique 7bis sur le même projet — choisir un seul niveau de sophistication, cohérent partout.

#### Argile (Claymorphism)
Description : surfaces 3D gonflées, façon pâte à modeler — coins très arrondis, double ombre (une portée + une interne), couleurs pastel saturées. Un style d'interface doux façon argile construit sur des rayons généreux, des doubles ombres et une profondeur pastel. Différent du Neumorphism (monochrome, contraste faible, surfaces extrudées ou enfoncées depuis un fond unique) : ici les couleurs sont pleinement assumées et saturées, et les objets semblent posés devant le fond (volume positif) plutôt qu'en relief depuis lui. Différent aussi du glassmorphisme (transparence/flou) : l'argile est opaque et gonflée, pas transparente.
Implémentation : border-radius élevé (24-40px), double box-shadow (une claire en haut-gauche type lumière : inset 0 4px 8px rgba(255,255,255,0.6), une sombre en bas-droite type ombre portée : 0 12px 24px rgba(0,0,0,0.2)), fond en dégradé pastel doux (radial-gradient ou linear-gradient de 2 teintes pastel proches). Le box-shadow interne (lumière) est critique — sans lui l'objet est arrondi mais pas "gonflé". Animation optionnelle : légère compression au :hover (scale(0.96), transition: transform 0.15s) qui simule une vraie déformation d'argile.
Palette liée : générer sur-mesure en pastel saturé — aucune entrée actuelle de la bibliothèque n'est prévue pastel (voir la lacune déjà identifiée en tout début de conversation).
Penser à cet effet quand : app consumer/onboarding/wellness qui veut être perçue comme ludique et accessible — jamais pour B2B, legal, finance (trop informel, source elle-même le déconseille). Pertinent pour une app enfant/famille, un produit de créativité, un onboarding qui veut réduire l'anxiété de l'utilisateur face à un nouveau service.

#### Brutalisme tactile (surface, pas motion)
Description : rejet du flou et de l'arrondi — bordures nettes 1px, angles droits ou pilule totale, zéro ombre portée. Définitions de conteneurs explicites, bordures nettes 1px, abandon de l'ombre portée — la profondeur s'établit par le contraste et la superposition en z-index. La distinction avec un design "flat" classique est dans l'intention déclarative : le flat design évite les ombres pour des raisons de lisibilité et de modernité, le brutalisme tactile les évite pour affirmer une position esthétique (rejet du réalisme, du verre, du gradient doux). Ce positionnement doit être lisible dans le brief — sinon l'effet ressemble à un design non-fini.
Implémentation : border: 1px solid en couleur vive sur fond sombre, box-shadow: none partout, border-radius 0 ou 9999px (jamais entre les deux — une valeur intermédiaire de 4-8px est un arrondi de confort, pas un parti pris). Typographie : uppercase, lettres serrées (letter-spacing négatif ou très serré), graisses extrêmes (100 ou 900, jamais 400). Palette : contraste maximal (noir + couleur vive, blanc + noir — jamais de gris intermédiaire comme surface principale). ⚠️ Voir l'alerte en tête de section — ce pattern devient lui-même un réflexe reconnaissable en 2026. À utiliser seulement si le sujet a un vrai propos "brut/direct" à défendre, jamais comme alternative esthétique par défaut au glassmorphisme.

#### Ligne de balayage / scan biométrique
Description : ligne fine et nette (verticale) qui traverse un visage/sujet, couleur d'accent isolée et contrastante avec le reste du traitement — évoque un scan, une lecture biométrique, un signal technique plutôt qu'un simple trait décoratif. La force de l'effet repose sur son isolement : la ligne de scan doit être la SEULE couleur franche de toute la composition. Si d'autres éléments ont la même couleur ou une intensité comparable, la ligne perd son statut de point focal unique et devient un trait parmi d'autres. L'effet est donc indissociable d'un traitement global de la composition en duotone ou monochrome (Section 5, Duotone total) — sans ce contexte de couleur unique, il n'y a pas d'effet scan, juste une ligne colorée.
Implémentation : <div> ou SVG <line> positionné en absolu sur le sujet, couleur d'accent saturée en mix-blend-mode: screen pour un effet lumineux net, épaisseur 1-3px, jamais flouté (le contraste avec un fond doux/duotone est ce qui fait l'effet). Animation optionnelle : translation X de gauche à droite sur 2-3s, ease-in-out, une seule fois à l'entrée dans le viewport (IntersectionObserver) — pas en boucle continue (perdrait l'effet événementiel du scan). prefers-reduced-motion : trait statique centré, pas d'animation.
Palette liée : toute palette où le fond/sujet est traité en duotone ou monochrome — la ligne DOIT rester la seule couleur franche de la composition, sinon perd son impact de point focal unique.
Penser à cet effet quand : sujet tech/IA/biométrie/sécurité qui a un vrai rapport au scan/à la lecture de données — jamais en décoration esthétique pure sans lien narratif au sujet (même réserve que Glitch numérique, Section 5 existante). Source d'observation : hero marque tech (design_reference_hero-neon-vert-laser.md).

#### Tracé manuscrit (annotation à main levée)
Description : traits d'une seule couleur, bord légèrement rugueux, posés sur du texte ou une image très nets — ellipse autour d'un mot, soulignement, flèche, rayons, cadre irrégulier autour d'un titre. Donne une trace humaine à un produit ou une interface très précis. La distinction avec un trait vectoriel régulier est dans le bord : un stroke SVG parfaitement lisse est un élément graphique, un trait avec un bord légèrement rugueux (via feTurbulence + feDisplacementMap) est une trace humaine. La régularité du tracé lui-même (la courbe) n'est pas en cause — c'est la qualité du bord qui fait la différence perceptive.
Implémentation : <path> SVG, stroke-linecap/linejoin: round, épaisseur 2-3px, tracés dessinés à la main puis exportés (jamais générés par une formule régulière) ; bord rugueux : feTurbulence (baseFrequency ≈ 0.04-0.08) + feDisplacementMap (scale ≈ 1.5-3), valeurs de départ à ajuster à l'œil ; animation draw-on optionnelle : stroke-dasharray = longueur du chemin, stroke-dashoffset longueur→0, 0.5-0.9s ease-out, une seule fois à l'entrée dans le viewport (IntersectionObserver) ; prefers-reduced-motion : trait statique. Marge ≥ 4px avec le texte voisin, aria-hidden="true".
Palette liée : toute palette à fond uni ; le trait reprend la couleur du texte ou l'accent unique, pas une 3e couleur.
Penser à cet effet quand : produit très précis (3D, data, UI) qui a besoin d'une trace humaine ; un mot de titre doit être désigné. Éviter : ton institutionnel/juridique, plus d'un tracé par titre. Origine : observée sur une landing SaaS créatif (principe seul — forme, couleur et style de trait à dériver du client). Technique signature liée : Direction_Artistique 4.4bis n°30.

#### Trame de points (halftone / dithering)
Description : image ou forme rendue en points/grains à deux tons au lieu d'un dégradé lisse — aspect imprimé ou pixel. Distinct du Bruit/grain (correctif discret, invisible à distance normale) : ici la trame EST le style, perceptible et revendiqué. La référence historique est double : le halftone de presse offset (points ronds réguliers dont la taille varie avec la valeur tonale) et le dithering numérique des premières images 8 bits (matrice de Bayer, motif géométrique régulier). Les deux créent une image lisible à distance avec seulement deux valeurs de couleur — c'est cette économie qui est l'identité de l'effet.

Implémentation : (1) CSS : radial-gradient répété (background-size ≈ 4-6px) en masque, combiné à un contraste élevé ; (2) SVG : feTurbulence + feComponentTransfer type="discrete" pour seuiller un bruit en deux niveaux ; (3) canvas/WebGL : dithering ordonné (matrice de Bayer) sur l'image source — à préférer pour un asset fixe, pré-rendu en PNG/WebP plutôt qu'un shader qui tourne en continu. Paramètre critique : la taille des points doit être cohérente avec la résolution de l'écran cible — des points de 1px sur un écran Retina deviennent invisibles et l'effet disparaît (utiliser 2-4px minimum pour garantir la visibilité sur haute densité).
Palette liée : deux tons seulement (fond + un accent chaud ou vif de la palette du projet).
Penser à cet effet quand : sujet imprimé/risographie/rétro-tech, ou forme 3D qui doit se lire comme un objet "imprimé". Jamais en habillage tendance sans lien matière. Coût : profiler sur mobile bas de gamme si animé. Origine : observée sur un rendu 3D de produit créatif (principe seul).
---

## 6. RÈGLES ANTI-GÉNÉRIQUE

```
❌ Jamais un effet de fond choisi par réflexe décoratif — même logique que le catalogue signature
   (Agents_Direction_Artistique.md Section 4.4bis) et le glassmorphisme (Standards_Interface 7bis).
✅ Toujours dérivé du sujet réel (Direction_Artistique Section 2).
✅ Croiser contre les 3 looks génériques IA (Direction_Artistique Section 3) avant de valider.
```

---

## 7. LIEN AVEC LES AUTRES FICHIERS

```
Agents_Bibliotheque_Palettes.md → tout fond composé (Section 3 et 5) dérive d'une palette nommée.
Agents_Design_Reference.md Sections 5bis/5ter → langage commun de placement et de pile de calques,
utilisé ici en composition et pas seulement en analyse.
Agents_Direction_Artistique.md Section 4.4bis (techniques n°8 fond génératif, n°9 blob liquide) →
ce fichier-ci donne l'implémentation concrète de ces deux techniques du catalogue signature.
Agents_Standards_Interface_Web.md Section 7bis → glassmorphisme si un panneau UI se pose sur la
composition (Section 3, Étape 5 de ce fichier).
```

---

## 8. CHECKLIST AVANT LIVRAISON

```
□ Détourage vérifié à 200% de zoom sur les bords (cheveux/tissu fin) — pas de frange/halo résiduel
□ Fond composé dérivé d'une palette NOMMÉE d'Agents_Bibliotheque_Palettes.md
□ Placement du sujet documenté via grille positionnelle (zone + X%/Y%/W%/H%)
□ Pile de calques documentée si 2+ éléments superposés
□ Cohérence colorimétrique sujet/fond vérifiée — sujet ne semble pas "collé"
□ Effet de fond génératif (Section 5) justifié par le sujet réel, pas choisi par réflexe
□ /references/ consulté pour un cas similaire déjà documenté avant de composer from scratch
□ Perf vérifiée sur mobile bas de gamme si effet SVG/canvas coûteux (bruit, mesh gradient, aurore)
```
