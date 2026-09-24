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

#### Dunes (vagues empilées)
Description : lignes ondulées empilées, dégradé d'opacité du fond vers le premier plan — évoque
un paysage de dunes ou une houle figée.
Implémentation : 3-4 <path> SVG en courbes de Bézier empilées, chacun avec une opacité dégressive
(100% → 20%) et une teinte légèrement plus claire/foncée que la précédente.
Palette liée : Dune & Ciel, Craie & Sauge Pâle
Penser à cet effet quand : voyage/désert réel, sujet qui a un vrai rapport au paysage/à l'horizon —
jamais en fond générique pour "faire joli".

#### Bruit / grain
Description : texture fine qui casse le plat d'un dégradé uni, évite l'effet "bandé" numérique.
Implémentation : filtre SVG feTurbulence + feColorMatrix en overlay, opacité très faible (3-8%),
mix-blend-mode: overlay.
Palette liée : n'importe laquelle — effet de finition, pas de signature en soi.
Penser à cet effet quand : un dégradé de fond montre du banding visible (voir Agents_Standards_Interface_Web.md
Section 7 "éviter le banding de dégradé") — usage correctif autant que stylistique.

#### Blob organique (morph liquide)
Description : forme organique arrondie qui se déforme lentement — signature très reconnaissable.
Implémentation : <path> SVG animé via interpolation de points de contrôle (ou lib dédiée), 8-12s
par cycle, easing doux. Renvoi direct : Agents_Direction_Artistique.md Section 4.4bis technique n°9.
Palette liée : Nuit & Magenta Sourd, Silex & Émeraude
Penser à cet effet quand : sujet créatif/produit qui a une vraie fluidité à évoquer — réserver à
UN élément (Direction_Artistique Section 6), jamais généralisé à tout le fond.

#### Mesh gradient
Description : dégradé multi-points, plus riche et organique qu'un linear-gradient à 2 couleurs.
Implémentation : plusieurs radial-gradient CSS superposés à des positions différentes, ou SVG
avec filtres de flou combinés ; alternative : canvas avec interpolation de couleur par grille de points.
Palette liée : toute palette à 3+ teintes (ex: Marché aux Épices, Abysse & Corail Froid)
Penser à cet effet quand : le sujet a plusieurs teintes également importantes à faire cohabiter,
pas juste un fond + un accent.

#### Contour topographique
Description : lignes de niveau façon carte en relief — évoque la donnée géographique/scientifique.
Implémentation : SVG de courbes de niveau générées (bibliothèque de contour type d3-contour), traits
fins semi-transparents.
Palette liée : Nuit Cyan & Argent, Silex & Émeraude
Penser à cet effet quand : sujet data/science/cartographie/environnement qui a un vrai rapport au
terrain ou à la mesure — jamais pour "faire technique" sans lien réel au sujet.

#### Grille de points (dot grid)
Description : pattern de points régulièrement espacés, discret, souvent en overlay très léger.
Implémentation : background-image: radial-gradient(circle, [couleur] 1px, transparent 1px);
background-size: 20px 20px; (ajuster taille/espacement selon densité voulue).
Palette liée : Brume & Noir, Galet & Encre Bleue
Penser à cet effet quand : fond qui a besoin d'une texture minimale sans détourner l'attention du
contenu — dashboard, documentation technique.

#### Voile organique (mousse/texture végétale)
Description : bruit désaturé qui évoque une matière vivante (mousse, lichen) plutôt qu'un bruit
numérique neutre.
Implémentation : feTurbulence SVG avec baseFrequency plus basse (motifs plus larges) que le bruit
standard, teinté vers le vert de la palette utilisée.
Palette liée : Mousse Électrique, Collines & Ombre
Penser à cet effet quand : sujet botanique/nature qui veut une texture organique en fond plutôt
qu'un dégradé plat.

#### Rayures diagonales fines
Description : motif de rayures fines et régulières, discret, évoque le signalétique/l'industriel.
Implémentation : background: repeating-linear-gradient(45deg, [couleur1] 0px, [couleur1] 1px,
transparent 1px, transparent 8px);
Palette liée : Béton & Jaune Taxi, Ocre & Charbon
Penser à cet effet quand : sujet industriel/logistique/signalétique qui a un vrai rapport au
motif de sécurité/chantier — jamais en décoration abstraite sans lien.

#### Aurore / nébuleuse
Description : dégradé radial multi-couleur doux, mouvement lent, évoque le ciel nocturne/l'espace.
Implémentation : plusieurs radial-gradient CSS en mix-blend-mode: screen, animation de position
très lente (30-60s par cycle) via @keyframes sur background-position.
Palette liée : Nuit & Magenta Sourd, Saphir & Argent
Penser à cet effet quand : sujet immersif/culturel/spatial qui a un vrai rapport à l'immensité ou
au rêve — coût GPU modéré, tester sur mobile bas de gamme.

#### Grille technique (blueprint)
Description : fines lignes de grille régulières, évoque le plan technique/le dashboard.
Implémentation : background-image: linear-gradient([couleur] 1px, transparent 1px),
linear-gradient(90deg, [couleur] 1px, transparent 1px); background-size: 24px 24px;
Palette liée : Abysse & Corail Froid, Chrome Liquide Clair/Sombre
Penser à cet effet quand : sujet dev tools/ingénierie/architecture qui veut évoquer le plan/le
schéma technique.

#### Texture papier / fibreuse
Description : grain doux type papier recyclé, chaleur éditoriale plutôt que froideur numérique.
Implémentation : feTurbulence SVG à faible contraste + feColorMatrix vers une teinte crème,
opacité 5-10% en overlay sur le fond.
Palette liée : Craie & Cobalt, Soie Ivoire
Penser à cet effet quand : contenu éditorial/culturel qui veut une chaleur tactile même en digital.

#### Obsidienne volcanique
Description : surface anguleuse noire/gris-anthracite, facettes brisées, reflets nets et durs —
évoque le verre volcanique plutôt qu'une roche mate.
Implémentation : dégradés linéaires multiples à angles variés (facettes) via clip-path polygon
répétés, ou texture photo réelle en overlay multiply à faible opacité pour le grain.
Palette liée : Basalte Émietté, Mur de Pierre Noire, Chrome Liquide Sombre
Penser à cet effet quand : sujet minéral/luxe sombre/sci-fi qui a un vrai rapport à la roche/au
verre naturel — jamais en fond générique "dark mode" sans lien matière.

#### Glitch numérique
Description : distinct du bruit/grain classique (Section 5 existante) — lignes de scan horizontales
décalées, artefacts RGB déchirés, grille de points colorés type écran défaillant, plutôt qu'un bruit
fin uniforme.
Implémentation : bandes horizontales translate-X aléatoires courtes durée (CSS keyframes),
décalage de canal RGB (text-shadow multi-couches colorées désaxées), grille de points via
background-image radial-gradient répété avec variation de teinte par ligne.
Palette liée : Abysse & Corail Froid, Nuit Cyan & Argent
Penser à cet effet quand : sujet tech/cybersécurité/data corrompue qui a un vrai rapport au signal
défaillant — jamais en décoration esthétique pure sans justification narrative.

#### Chrome liquide en mouvement
Description : métal fondu/mercure en flux, reflets qui suivent une courbure organique plutôt que
géométrique — différent du Chrome Liquide statique déjà en palette (celui-ci ajoute le mouvement).
Implémentation : SVG turbulence + displacement map animée lentement, ou vidéo boucle courte en
fond avec mix-blend-mode: luminosity pour rester monochrome.
Palette liée : Chrome Liquide Clair, Chrome Liquide Sombre (déjà en bibliothèque — cet effet EST
la version animée de ces palettes)
Penser à cet effet quand : deeptech/luxe qui veut un mouvement organique monochrome, coût GPU à
vérifier sur mobile bas de gamme (même vigilance que Blob organique, Section 6 checklist).

#### Nappe holographique irisée (Oil Slick)
Description : liquide noir/sombre avec reflets arc-en-ciel qui glissent selon l'angle — irisation
type pétrole/nacre, pas un simple dégradé multicolore statique.
Implémentation : conic-gradient ou repeating multi-stop gradient en rotation lente + filter:
hue-rotate() animé + mix-blend-mode: color-dodge sur une base sombre pour l'effet "huile sur noir"
plutôt que couleurs plates. Combiner avec un léger feTurbulence pour casser la régularité du
gradient (sinon effet plat qui trahit l'algorithme). Voir Section 5bis — pousser au maximum avant
de livrer une version simplifiée.
Palette liée : Chrome Liquide Sombre, Silex & Émeraude (pour une variante plus sourde)
Penser à cet effet quand : le sujet a un vrai rapport littéral au pétrole/à l'irisation naturelle
(nacre, plumage, essence sur eau) — PAS comme habillage tendance holographique générique sans
lien réel au sujet (risque de tomber dans le pattern "filtre Instagram" si utilisé par réflexe).

#### Contour fluide (variante organique du Contour topographique)
Description : lignes ondulées fluides façon onde sonore/champ vectoriel, plus organique et moins
régulier qu'un contour topographique en courbes de niveau classique.
Implémentation : Perlin noise appliqué à un champ de lignes (via d3 ou génération manuelle de
paths SVG avec bruit de fréquence variable sur l'amplitude), contraste fort blanc sur noir.
Palette liée : Chrome Liquide Sombre, Nuit Cyan & Argent
Penser à cet effet quand : sujet data/son/mouvement fluide — distinct du Contour topographique
(Section 5 existante) qui reste réservé aux sujets cartographiques/géographiques réels.

#### Ligne d'horizon (vague simple statique)
Description : une seule vague SVG en bas d'écran — plus minimal que Dunes, un seul geste graphique.
Implémentation : un <path> SVG unique en bas de section, courbe douce, couleur pleine ou dégradé léger.
Palette liée : Océan & Étain, Coquille & Pétrole
Penser à cet effet quand : sujet maritime/horizon qui a besoin d'un seul geste graphique simple,
pas d'une composition élaborée de plusieurs vagues.

#### Feuille holographique irisée (Holographic Foil)
Description : surface pastel nacrée qui change de teinte selon l'angle — rose/vert/bleu/violet en
dégradés doux et fluides, effet "feuille métallisée holographique" (packaging, stickers, papier
cadeau premium). Plus doux/pastel/clair que la Nappe Oil Slick (qui reste sombre et saturée) —
les deux ne sont PAS interchangeables, choisir selon la tonalité du sujet réel.
Implémentation : conic-gradient multi-stop pastel en rotation très lente (30-45s/cycle) +
feTurbulence léger pour le grain métallique + mix-blend-mode: screen sur fond clair (inverse de
l'Oil Slick qui fonctionne sur fond sombre avec color-dodge).
Palette liée : aucune palette pastel-holographique en bibliothèque actuellement — générer
sur-mesure (Agents_Bibliotheque_Palettes.md Section 5) si le projet en a réellement besoin.
Penser à cet effet quand : packaging/merch/sticker/carte avec un vrai rapport à la matière
holographique physique réelle (vinyle, papier holographique imprimé) — jamais comme habillage
tendance générique sans lien matière (même risque que rappelé pour Oil Slick : réserver aux sujets
qui en ont un usage réel, pas décoratif par réflexe).

### Duotone total (sujet + fond)
Description : traitement colorimétrique appliqué à TOUTE l'image — portrait/sujet ET fond dans
la même teinte dominante — pas un simple overlay posé sur le fond seul. Différent d'un accent
couleur classique : ici il n'y a plus de "vraies" couleurs, tout passe par le même filtre.
Implémentation : CSS `filter: hue-rotate() saturate() brightness()` sur l'image source complète
(photo + fond si même calque), ou dégradé `mix-blend-mode: color`/`hue` posé sur toute la
composition en calque unique au-dessus de tout.
Palette liée : n'importe quelle palette monochrome sombre de la bibliothèque, à condition de
garder la teinte MATE — jamais saturée au max (même vigilance que Mousse Électrique, Section 4.1).
Penser à cet effet quand : le sujet a un vrai rapport à un univers monochrome cohérent (tech/scan,
photographie argentique reconstituée, ambiance nocturne) — jamais pour "faire stylé" sans lien,
et jamais si le sujet a besoin de ses vraies couleurs pour être compris (produit e-commerce par
exemple, où le duotone casserait la lisibilité réelle du produit).
Source d'observation : hero marque tech (design_reference_hero-neon-vert-laser.md).

#### Vortex de traînées lumineuses (light trail vortex)
Description : lignes lumineuses parallèles qui convergent en spirale autour d'un point focal
(silhouette, objet), sur fond nocturne sombre — évoque une distorsion spatio-temporelle plutôt
qu'un simple rayon de lumière.
Implémentation : SVG — plusieurs <path> en courbes de Bézier tracés en éventail depuis un point
de fuite, dégradé le long du tracé (blanc/or → transparent), dupliqués avec léger décalage
d'angle pour la densité. Version animée : Three.js, rotation lente autour du point focal.
Palette liée : Encre & Safran, Nuit & Miel (fond quasi-noir + accent chaud obligatoire — un
accent froid casse l'effet "chaleur/distorsion").
Penser à cet effet quand : sujet SF/temporalité/exploration qui a un vrai rapport à la distorsion
spatiale — jamais en fond dramatique gratuit sans lien narratif réel.

#### Verre sur fond ambiant flouté (Ambient Blur Glass)
Description : panneau glassmorphisme posé sur une photo/illustration de fond fortement floutée
(≥40px) et teintée chaud (souvent un dégradé coucher de soleil) — différent du glassmorphisme
"sur fond riche net" de Agents_Standards_Interface_Web.md 7bis : ici le fond est délibérément
rendu abstrait par le flou, pas juste riche.
Implémentation : image de fond en filter: blur(60-100px) saturate(1.3), positionnée en absolute
derrière un conteneur overflow: hidden ; panneau UI en backdrop-filter classique (voir 7bis) mais
avec une opacité de fond plus élevée (0.85-0.95) que le glass léger habituel, car le flou reste
lumineux par endroits.
Palette liée : toute palette sombre + accent chaud (Nuit & Miel, Encre & Safran) pour le panneau ;
le dégradé flouté peut sortir volontairement de cette palette (contraste chaud/sombre assumé).
Penser à cet effet quand : assistant IA/copilot, app de productivité premium qui veut une ambiance
vivante derrière une UI sobre — jamais si le visuel flouté n'a aucun lien avec la marque/contexte.

#### Orbes flottants (Floating orbs)
Description : plusieurs sphères de couleur floutées qui dérivent lentement à des vitesses et
trajectoires indépendantes — crée une profondeur douce, différent du Blob organique (une seule
forme qui se déforme) et du Mesh gradient (positions fixes, pas de mouvement propre par point).
Implémentation : divs circulaires en position absolute, filter: blur(60-100px), animation de
translation lente et non-synchronisée par orbe (durées différentes pour éviter l'effet "en phase").
Palette liée : toute palette à 2-3 accents qui peuvent cohabiter sans se marcher dessus.
Penser à cet effet quand : hero de produit doux/premium qui veut une profondeur ambiante sans
narration — jamais si le sujet demande de la précision ou du tranchant (voir Obsidienne volcanique
pour l'inverse).

#### Champ d'étoiles (Starfield)
Description : points fins dispersés façon ciel nocturne, légère dérive parallax entre plusieurs
couches de points à tailles/vitesses différentes — distinct de la Grille de points (régulière,
statique, usage UI discret).
Implémentation : plusieurs calques de box-shadow multiples générés (technique "1000 étoiles en un
seul div") ou canvas avec positions aléatoires par couche, translation lente en boucle.
Palette liée : toute palette sombre de la Section 4.1 ou 4.4 (fond quasi-noir obligatoire).
Penser à cet effet quand : sujet spatial/nocturne réel — jamais en fond générique "dark mode
premium" sans lien avec l'immensité/la nuit comme sujet propre.

#### Verre liquide nouvelle génération (Liquid Glass, distinct du glassmorphisme basique)
Description : évolution 2025-2026 du glassmorphisme (Agents_Standards_Interface_Web.md 7bis) —
au flou simple s'ajoute une vraie réfraction qui déforme visuellement le contenu derrière le
panneau, avec reflets spéculaires qui réagissent au mouvementLiquid Glass utilise un rendu en temps réel et réagit dynamiquement au mouvement avec des reflets spéculaires.
Implémentation : `backdrop-filter: blur()` classique ne suffit plus — ajouter un filtre SVG
`feDisplacementMap` pour la distorsion, `feSpecularLighting` pour le reflet lumineux mobile.
Coût de repaint nettement supérieur au glassmorphisme simple — profiler impérativement sur mobile
bas de gamme avant de généraliser (même exigence que 7bis, renforcée ici).
Palette liée : toute palette, l'effet reste monochrome par nature (verre = transparence, pas couleur).
Penser à cet effet quand : le budget dev et le device cible (mobile haut de gamme/desktop)
justifient le coût — jamais comme glassmorphisme "amélioré" par réflexe si 7bis suffit déjà.
Éviter avec : ne jamais cumuler avec le glassmorphisme basique 7bis sur le même projet — choisir
un seul niveau de sophistication, cohérent partout.

#### Argile (Claymorphism)
Description : surfaces 3D gonflées, façon pâte à modeler — coins très arrondis, double ombre
(une portée + une interne), couleurs pastel saturéesun style d'interface doux façon argile construit sur des rayons généreux, des doubles ombres et une profondeur pastel. Différent du Neumorphism (monochrome, contraste
faible) : ici les couleurs sont pleinement assumées et saturées.
Implémentation : `border-radius` élevé (24-40px), double `box-shadow` (une claire en haut-gauche
type lumière, une sombre en bas-droite type ombre portée), fond en dégradé pastel doux.
Palette liée : générer sur-mesure en pastel saturé — aucune entrée actuelle de la bibliothèque
n'est prévue pastel (voir la lacune déjà identifiée en tout début de conversation).
Penser à cet effet quand : app consumer/onboarding/wellness qui veut être perçue comme ludique et
accessible — jamais pour B2B, legal, finance (trop informel, source elle-même le déconseille).

#### Brutalisme tactile (surface, pas motion)
Description : rejet du flou et de l'arrondi — bordures nettes 1px, angles droits ou pilule totale,
zéro ombre portée (la profondeur vient du contraste et du z-index, pas du flou)définitions de conteneurs explicites, bordures nettes 1px, abandon de l'ombre portée — la profondeur s'établit par le contraste et la superposition en z-index.
Implémentation : `border: 1px solid` en couleur vive sur fond sombre, `box-shadow: none` partout,
radius 0 ou 9999px (jamais entre les deux).
⚠️ Voir l'alerte en tête de section — ce pattern devient lui-même un réflexe reconnaissable en
2026. À utiliser seulement si le sujet a un vrai propos "brut/direct" à défendre, jamais comme
alternative esthétique par défaut au glassmorphisme.

### Ligne de balayage / scan biométrique
Description : ligne fine et nette (verticale) qui traverse un visage/sujet, couleur
d'accent isolée et contrastante avec le reste du traitement — évoque un scan, une lecture
biométrique, un signal technique plutôt qu'un simple trait décoratif.
Implémentation : `<div>` ou SVG `<line>` positionné en absolu sur le sujet, couleur d'accent
saturée en `mix-blend-mode: screen` pour un effet lumineux net, épaisseur 1-3px, jamais flouté
(le contraste avec un fond doux/duotone est ce qui fait l'effet).
Palette liée : toute palette où le fond/sujet est traité en duotone ou monochrome — la ligne DOIT
rester la seule couleur franche de la composition, sinon perd son impact de point focal unique.
Penser à cet effet quand : sujet tech/IA/biométrie/sécurité qui a un vrai rapport au scan/à la
lecture de données — jamais en décoration esthétique pure sans lien narratif au sujet (même
réserve que Glitch numérique, Section 5 existante).
Source d'observation : hero marque tech (design_reference_hero-neon-vert-laser.md).
#### Tracé manuscrit (annotation à main levée)
Description : traits d'une seule couleur, bord légèrement rugueux, posés sur du texte ou une image très
nets — ellipse autour d'un mot, soulignement, flèche, rayons, cadre irrégulier autour d'un titre.
Donne une trace humaine à un produit ou une interface très précis.
Implémentation : <path> SVG, stroke-linecap/linejoin: round, épaisseur 2-3px, tracés dessinés à la main
puis exportés (jamais générés par une formule régulière) ; bord rugueux : feTurbulence
(baseFrequency ≈ 0.04-0.08) + feDisplacementMap (scale ≈ 1.5-3), valeurs de départ à ajuster à
l'œil ; animation draw-on optionnelle : stroke-dasharray = longueur du chemin, stroke-dashoffset
longueur→0, 0,5-0,9s ease-out, une seule fois à l'entrée dans le viewport (IntersectionObserver) ;
reduced-motion : trait statique. Marge ≥ 4px avec le texte voisin, aria-hidden="true".
Palette liée : toute palette à fond uni ; le trait reprend la couleur du texte ou l'accent unique, pas
une 3e couleur.
Penser à cet effet quand : produit très précis (3D, data, UI) qui a besoin d'une trace humaine ; un mot
de titre doit être désigné. Éviter : ton institutionnel/juridique, plus d'un tracé par titre.
Origine : observée sur une landing SaaS créatif (principe seul — forme, couleur et style de trait à
dériver du client). Technique signature liée : Direction_Artistique 4.4bis n°30.

#### Trame de points (halftone / dithering)
Description : image ou forme rendue en points/grains à deux tons au lieu d'un dégradé lisse — aspect
imprimé ou pixel. Distinct du Bruit/grain (correctif discret) : ici la trame EST le style.
Implémentation : (1) CSS : radial-gradient répété (background-size ≈ 4-6px) en masque, combiné à un
contraste élevé ; (2) SVG : feTurbulence + feComponentTransfer type="discrete" pour seuiller un
bruit en deux niveaux ; (3) canvas/WebGL : dithering ordonné (matrice de Bayer) sur l'image source —
à préférer pour un asset fixe, pré-rendu en PNG/WebP plutôt qu'un shader qui tourne en continu.
Palette liée : deux tons seulement (fond + un accent chaud ou vif de la palette du projet).
Penser à cet effet quand : sujet imprimé/risographie/rétro-tech, ou forme 3D qui doit se lire comme un
objet "imprimé". Jamais en habillage tendance sans lien matière. Coût : profiler sur mobile bas de
gamme si animé.
Origine : observée sur un rendu 3D de produit créatif (principe seul).

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
