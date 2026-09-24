---
## ⚙️ AGENT PROTOCOL — LIRE EN PREMIER, AVANT TOUT

Tu es directeur artistique senior chargé de la gestion des pairings typographiques de l'atelier. Ce fichier est ta seule source de vérité pour le choix de typographie sur tout projet.

RÈGLES ABSOLUES :
1. Lis ce document EN ENTIER avant de choisir une typographie pour un projet.
2. Ne réutilise pas le même pairing sur deux projets distincts sans raison, sauf cohérence de
   marque volontaire — même logique que Agents_Bibliotheque_Palettes.md Section 2, pas de registre
   formel tenu à jour, se fier au contexte disponible.
3. Un pairing de cette bibliothèque = point de départ à adapter (graisses, tailles), jamais une
   paire figée à imposer sans la confronter au sujet réel du brief.
4. Si aucun pairing ne convient au sujet réel → en composer un sur-mesure (Section 5), jamais
   forcer une entrée existante qui ne correspond pas.
5. Croiser systématiquement le choix avec Agents_Direction_Artistique.md Section 3bis — jamais
   `font-sans` par défaut (Inter non réfléchi) faute de choix délibéré.
6. Toutes les polices citées doivent être réellement disponibles (Google Fonts ou équivalent
   libre) — jamais inventer un nom de police qui n'existe pas.

CONFIRMATION OBLIGATOIRE avant de commencer :
"PROTOCOLE ACTIF — BIBLIOTHÈQUE TYPOGRAPHIES. Prêt. Balance le sujet du projet."

---

# AGENTS_BIBLIOTHEQUE_TYPOGRAPHIES.md
# Bibliothèque centrale de pairings typographiques — liée à Agents_Bibliotheque_Palettes.md

> **POURQUOI UN FICHIER SÉPARÉ :**
> Ajouter la typographie dans Agents_Bibliotheque_Palettes.md aurait rendu ce fichier trop long.
> Les deux bibliothèques restent des fichiers indépendants mais croisés : chaque pairing ici
> recommande des palettes précises de l'autre fichier (et inversement, une palette peut suggérer
> un pairing d'ici), sans jamais imposer une combinaison figée.

---

## 1. RÔLE ET OBJECTIF

Bibliothèque de pairings typographiques nommés (display + body + utilitaire optionnel), organisée
par tonalité — même logique anti-silo que Agents_Bibliotheque_Palettes.md et
Agents_Design_Reference.md Section 4quinquies : un pairing catégorisé "chaud & terreux" reste
consultable pour un SaaS si le sujet réel le justifie.

Fichier central, unique, PAS dupliqué par projet. Il vit et grossit avec le temps, au même rythme
que la bibliothèque de palettes.

## 2. RÈGLE DE VARIATION

```
AVANT de proposer un pairing pour un nouveau projet :
1. Repérer les pairings déjà utilisés récemment (contexte de conversation, mémoire, projets connus)
2. Exclure ces pairings des candidats, même s'ils semblaient adaptés au sujet
3. Choisir parmi les pairings restants, ou en composer un sur-mesure (Section 5)

EXCEPTION — cohérence de marque volontaire :
Même exception que Agents_Bibliotheque_Palettes.md Section 2 : plusieurs projets du même client/
de la même marque peuvent assumer de partager un pairing. Le signaler comme un choix voulu.
```

## 3. FORMAT D'UNE ENTRÉE

```
### [Nom évocateur — 2-4 mots, français]
Display     : [Police] — [graisse(s) utilisée(s), ex: 600-900]
Body        : [Police] — [graisse(s) utilisée(s), ex: 400-500]
Utilitaire  : [Police monospace/data] (optionnel — captions, chiffres, code)
Source      : Google Fonts [ou équivalent libre nommé] — licence [OFL/Apache/etc.], VÉRIFIÉ
Caractère   : [1 ligne — ce qui distingue ce pairing structurellement]
Tonalité    : [1 ligne — ce que le pairing évoque]
Palettes recommandées : [2-3 noms exacts d'Agents_Bibliotheque_Palettes.md, même tonalité]
Penser à ce pairing quand : [2-3 déclencheurs concrets — secteur, type de contenu, contrainte]
Éviter avec : [optionnel — restriction d'usage (ex: titre uniquement) ou incompatibilité connue]
```

Champ Source obligatoire pour toute NOUVELLE entrée — sans lui, la police est déclarée INCONNUE
au sens de la règle 6 du protocole, jamais intégrée. Entrées existantes sans ce champ : à
compléter au fil de l'eau, pas de rétro-remplissage forcé en une passe (Section 4bis).

## 3bis. DETTE DE VÉRIFICATION — ENTRÉES ANTÉRIEURES SANS CHAMP SOURCE

```
Toute entrée créée avant l'ajout du champ Source (Section 3) n'a pas été vérifiée avec ce
garde-fou. Ne pas supposer qu'elle est Google Fonts par défaut — vérifier au moment de l'usage
réel sur un projet, pas en bloc a priori.
Cas déjà identifié : "Sans Unique & Mono Rare" (4.6) utilise General Sans — police Fontshare,
PAS sur Google Fonts, licence gratuite mais self-hosting requis. À vérifier/traiter avant tout
usage de cette entrée précise.
```

---

## 4. BIBLIOTHÈQUE DE PAIRINGS

Organisée par tonalité (mêmes 7 catégories qu'Agents_Bibliotheque_Palettes.md Section 4, pour
croisement direct). Extensible : ajouter de nouvelles entrées au fil des projets.

### 4.1 SOMBRES & FEUTRÉES

#### Serif Confiant & Sans Discret
Display : Fraunces — 600-900, italique activé pour les mots clés
Body : Inter — 400-500
Utilitaire : JetBrains Mono
Caractère : contraste fort entre serif expressif à empattements marqués et sans-serif neutre.
Tonalité : feutré et littéraire, sérieux sans être froid.
Palettes recommandées : Ardoise & Cuivre, Encre & Safran
Penser à ce pairing quand : contenu éditorial premium, étude de cas détaillée, marque personnelle
qui a un vrai point de vue à défendre.

#### Grotesque Dense & Mono Utilitaire
Display : Space Grotesk — 500-700
Body : IBM Plex Sans — 400
Utilitaire : Space Mono
Caractère : une seule famille "grotesque technique" du display au body, cohérence assumée plutôt
qu'un contraste display/body marqué.
Tonalité : technique, dense, feutré.
Palettes recommandées : Basalte & Menthe, Nuit & Grenat
Penser à ce pairing quand : SaaS technique/dev tools qui veut une cohérence typo totale, pas un
display décoratif séparé du reste.

#### Display Condensé & Serif Lecture
Display : Bricolage Grotesque — 600-800
Body : Source Serif 4 — 400
Caractère : titre condensé à forte personnalité graphique, corps en serif pensé pour la lecture longue.
Tonalité : feutré avec un vrai caractère en titre.
Palettes recommandées : Suie & Jade, Nuit & Miel
Penser à ce pairing quand : contenu narratif long sur fond sombre (portfolio storytelling, étude
de cas détaillée, essai).

#### Serif Ancien & Sans Feutré
Display : Frank Ruhl Libre — 500-700
Body : Public Sans — 400
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : serif académique/journalistique ancien, sans-serif institutionnel neutre en corps.
Tonalité : littéraire ancien, studieux, feutré.
Palettes recommandées : Graphite & Laiton, Nuit & Miel
Penser à ce pairing quand : contenu éditorial sérieux (analyse longue, rapport), marque personnelle
qui veut évoquer la presse écrite ancienne plutôt qu'un blog moderne.

### 4.2 CLAIRES & AÉRÉES

#### Serif Élégant & Sans Aéré
Display : Newsreader — italique, 500-600
Body : Karla — 400-500
Caractère : italique éditorial en display, sans-serif géométrique aéré en corps.
Tonalité : net, confiant, lumineux.
Palettes recommandées : Craie & Cobalt, Coquille & Pétrole
Penser à ce pairing quand : SaaS B2B qui veut rassurer vite avec une touche éditoriale, pas
purement corporate.

#### Slab Chaleureux & Sans Rond
Display : Fraunces — 300-500 (graisse légère, plus doux qu'en version sombre)
Body : Figtree — 400-500
Caractère : serif léger et rond en display, sans-serif aux formes douces en body.
Tonalité : naturel, apaisant.
Palettes recommandées : Ivoire & Pin, Craie & Sauge Pâle
Penser à ce pairing quand : santé/éducation/durable qui veut chaleur ET lisibilité, sans tomber
dans le clinique.

#### Display Éditorial & Body Classique
Display : Spectral — italique bold, 700
Body : Spectral — 400 (même famille, variation de graisse/style)
Caractère : une seule famille serif du titre au corps, cohérence éditoriale assumée.
Tonalité : doux mais affirmé, féminin sans stéréotype.
Palettes recommandées : Nacre & Prune, Lin & Bleu Poudre
Penser à ce pairing quand : beauté/lifestyle créatif qui veut une vraie touche littéraire, pas un
sans-serif générique.

#### Serif Contraste Classique & Sans Sobre
Display : Playfair Display — 700-900, italique activé pour les mots clés
Body : Karla — 400-500
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : contraste fort pleins/déliés classique, alternative libre et moins extrême que Bodoni Moda.
Tonalité : élégant, éditorial, intemporel.
Palettes recommandées : Craie & Cobalt, Nacre & Prune
Penser à ce pairing quand : mariage/faire-part, blog lifestyle premium, édition qui veut du
contraste serif classique sans aller jusqu'au théâtral.

### 4.3 CHAUDES & TERREUSES

#### Slab Artisanal & Sans Chaud
Display : Fraunces — 400-600, italique "wonky" si disponible
Body : Work Sans — 400-500
Caractère : serif organique à la texture chaude, sans-serif humaniste en corps.
Tonalité : chaleureux, texture matière.
Palettes recommandées : Argile & Moutarde, Terre Cuite & Olive
Penser à ce pairing quand : artisanat, food craft, sujet qui a une vraie matière/texture à évoquer.

#### Display Rugueux & Mono Utilitaire
Display : Bricolage Grotesque — 700-800
Body : Archivo — 400-500
Utilitaire : IBM Plex Mono
Caractère : display à empattements irréguliers volontaires, corps net et robuste.
Tonalité : robuste, minéral.
Palettes recommandées : Ocre & Charbon, Cannelle & Nuit
Penser à ce pairing quand : BTP/industrie assumée, épices/café/thé — sujet qui ne veut pas
s'adoucir.

#### Serif Contraste Fort & Sans Doux
Display : Piazzolla — italique, 600-700
Body : Mulish — 400-500
Caractère : serif à haut contraste (pleins/déliés marqués), sans-serif doux en corps.
Tonalité : contraste chaud/froid marqué, élégant.
Palettes recommandées : Sable & Indigo, Miel & Anthracite
Penser à ce pairing quand : mode/textile/culture qui mélange héritage et modernité.

#### Slab Terreux & Sans Rond
Display : Bitter — 600-700
Body : Nunito Sans — 400-500
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : slab serif chaud et robuste, sans-serif arrondi en corps pour adoucir.
Tonalité : terrien, artisanal, accessible.
Palettes recommandées : Miel & Anthracite, Sable & Indigo
Penser à ce pairing quand : agroalimentaire/terroir, artisanat qui veut un slab plus doux que
Bricolage Grotesque (Section 4.3 ci-dessus), lecture longue en contexte chaud.

### 4.4 FROIDES & TECHNIQUES

#### Grotesque Net & Mono Data
Display : Space Grotesk — 500-700
Body : Inter — 400-500
Utilitaire : JetBrains Mono (chiffres tabulaires — voir Agents_Standards_Interface_Web.md Section 4)
Caractère : grotesque géométrique du display au body, mono dédié aux données.
Tonalité : technique, confiant.
Palettes recommandées : Abysse & Corail Froid, Acier & Citron Vert
Penser à ce pairing quand : dev tools, data/analytics, dashboard qui affiche beaucoup de chiffres.

#### Display Géométrique & Sans Clinique
Display : Sora — 600-700
Body : IBM Plex Sans — 400
Caractère : géométrique arrondi en display, neutre technique en corps.
Tonalité : clinique réchauffé.
Palettes recommandées : Glacier & Ambre, Nuit Polaire & Cuivre
Penser à ce pairing quand : santé/assurance/medtech, luxe tech qui veut un fond clinique moins froid.

#### Serif Précieux & Sans Sobre
Display : Spectral — italique, 500-600
Body : Public Sans — 400
Caractère : serif fin et précis en display, sans-serif institutionnel sobre en corps.
Tonalité : précieux et posé.
Palettes recommandées : Silex & Émeraude, Océan & Étain
Penser à ce pairing quand : finance/santé qui refuse le bleu par réflexe, secteur maritime/logistique.

#### Grotesque Corporate & Sans Systématique
Display : Red Hat Display — 600-700
Body : Red Hat Text — 400
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : même famille de conception (paire officielle du même studio), display légèrement
condensé, corps optimisé lecture UI.
Tonalité : corporate technique, systématique, sans fioriture.
Palettes recommandées : Silex & Émeraude, Abysse & Corail Froid
Penser à ce pairing quand : SaaS B2B enterprise, produit technique qui veut une cohérence de
famille officielle plutôt qu'un display/body de 2 fonderies différentes.

#### Display Rugueux & Mono Tabulaire
Display : Bricolage Grotesque — 700-800
Body : Archivo — 400-500 (600 pour emphases courtes)
Utilitaire : JetBrains Mono — 400-700, chiffres tabulaires obligatoires (font-variant-numeric: tabular-nums)
Source : Google Fonts, licence OFL 1.1 pour les trois familles — VÉRIFIÉ
Caractère : display grotesque au dessin volontairement irrégulier (jamais lissé), corps net et robuste,
mono dédié aux scores et minuteurs.
Tonalité : robuste, tendu, "qui ne s'adoucit pas".
Palettes recommandées : Ardoise & Verdict, Basalte Émietté
Penser à ce pairing quand : produit qui note, chronomètre ou rend un verdict chiffré (scores, KPI,
minuteurs, identifiants d'incident) ; ton exigeant, jamais rassurant.
Éviter avec : Display Rugueux & Mono Utilitaire et Grotesque Net & Mono Data (même rôle display ou mono
data — un seul pairing de cette famille par projet).
Origine : variante de "Display Rugueux & Mono Utilitaire" (IBM Plex Mono → JetBrains Mono), refonte
Mock Interview Pro.

### 4.5 VIVES & CONTRASTÉES

#### Display Brut & Sans Direct
Display : Anton — graisse unique (display condensé impact)
Body : Archivo — 400-500
Caractère : display très dense et vertical, corps net sans fioriture.
Tonalité : franc, direct.
Palettes recommandées : Craie & Vermillon, Béton & Jaune Taxi
Penser à ce pairing quand : sport/media d'actualité, mobilité/logistique urbaine — sujet qui veut
de l'impact immédiat. Réserver ce display à un usage ponctuel (titre hero), jamais en corps de texte.

#### Display Créatif & Sans Affirmé
Display : Unbounded — 600-800
Body : Manrope — 400-500
Caractère : display géométrique arrondi à forte personnalité, sans-serif affirmé en corps.
Tonalité : créatif, affirmé.
Palettes recommandées : Nuit & Magenta Sourd, Béton & Turquoise
Penser à ce pairing quand : musique/événementiel/arts vivants, sport urbain/loisirs actifs.

#### Serif Officiel & Sans Vivant
Display : Source Serif 4 — 700
Body : Work Sans — 400-500
Caractère : serif institutionnel en display, sans-serif vivant en corps pour casser le côté terne.
Tonalité : institutionnel mais vivant.
Palettes recommandées : Papier & Bleu Roi, Craie & Indigo Vif
Penser à ce pairing quand : institutionnel/administration qui refuse le terne, startup tech grand
public qui veut rester sérieuse.

### 4.6 NEUTRES & MINIMALES

#### Sans Unique & Mono Rare
Display : General Sans — 600-700 (même famille que le body, variation de graisse uniquement)
Body : General Sans — 400
Utilitaire : Space Mono (usage rare, juste pour un détail technique)
Caractère : une seule famille du titre au corps — choix minimaliste assumé, pas un pairing display/
body classique.
Tonalité : minimal extrême.
Palettes recommandées : Brume & Noir, Lin & Anthracite
Penser à ce pairing quand : contenu éditorial typo-driven, B2B pur qui ne veut aucune distraction
visuelle même typographique.

#### Serif Feutré & Sans Neutre
Display : Fraunces — 300-400 (graisse faible, presque texte courant)
Body : Karla — 400
Caractère : serif discret, à peine plus affirmé que le corps.
Tonalité : feutré et élégant.
Palettes recommandées : Perle & Bronze Discret, Craie & Terre d'Ombre
Penser à ce pairing quand : luxe discret, minimalisme qui doit rester chaleureux/habité.

#### Grotesque Institutionnel
Display : IBM Plex Sans — 600 (même famille que le body)
Body : IBM Plex Sans — 400
Caractère : une seule famille, variations de graisse uniquement — quasi monochrome typographique.
Tonalité : sérieux, quasi monochrome.
Palettes recommandées : Galet & Encre Bleue, Sable & Encre Discrète
Penser à ce pairing quand : juridique/notarial, agence de conseil très haut de gamme qui joue tout
sur l'espacement et la typo plutôt que la couleur.

#### Sans Discret & Mono Repère
Display : Instrument Sans — 500-600
Body : Instrument Sans — 400
Utilitaire : Space Mono (usage rare, détail technique uniquement)
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : une seule famille du titre au corps, formes neutres et bien équilibrées — alternative
libre à General Sans (Section précédente, fonderie Fontshare hors Google Fonts, vérification
licence self-hosting nécessaire si repris).
Tonalité : minimal, propre, sans personnalité affirmée.
Palettes recommandées : Perle & Bronze Discret, Brume & Noir
Penser à ce pairing quand : contenu B2B minimal qui veut du 100% Google Fonts garanti, sans même
le doute de licence d'une police de fonderie tierce.

### 4.7 PREMIUM & IMPOSANTES

#### Serif Théâtral & Sans Discret
Display : Bodoni Moda — 700-900 (contraste extrême pleins/déliés)
Body : Cormorant — 400-500
Caractère : serif à très haut contraste, signature visuelle "haute couture éditoriale".
Tonalité : opulent, théâtral.
Palettes recommandées : Bordeaux & Or Profond, Pourpre Impérial & Or
Penser à ce pairing quand : joaillerie assumée, gala/haute couture. Exécution exigeante : espacement
généreux obligatoire, sinon bascule vite dans le kitsch (voir Agents_Bibliotheque_Palettes.md 4.7).

#### Display Gravé & Sans Feutré
Display : Cormorant SC — small caps, 500-600
Body : Jost — 400
Caractère : petites capitales gravées en display, géométrique doux en corps.
Tonalité : minéral et cher.
Palettes recommandées : Marbre Noir & Or, Saphir & Argent
Penser à ce pairing quand : immobilier de luxe, horlogerie technique haut de gamme.

#### Serif Massif & Sans Précis
Display : Fraunces — 900, non-italique
Body : Sora — 400
Caractère : serif très épais et affirmé, sans-serif géométrique précis en corps pour contrebalancer.
Tonalité : précieux et affirmé.
Palettes recommandées : Émeraude & Or Massif
Penser à ce pairing quand : joaillerie/horlogerie, resort 5 étoiles qui assume une vraie opulence.

#### Gravure Romaine Libre
Display : Cinzel — 600-900, majuscules
Body : Cormorant — 400-500
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : capitales gravées façon inscription romaine, alternative libre à Trajan Pro (non
libre, non disponible sur Google Fonts).
Tonalité : institutionnel, antique, gravé.
Palettes recommandées : Marbre Noir & Or, Bordeaux & Or Profond
Penser à ce pairing quand : cérémonie/intronisation, institution qui veut un registre gravé/
historique sans dépendre d'une police propriétaire.

#### Ornemental Cérémoniel Libre
Display : Cinzel Decorative — 700-900, réservé aux titres courts
Body : Cormorant — 400-500
Source : Google Fonts, licence OFL — VÉRIFIÉ
Caractère : empattements décoratifs élaborés, très marqué — jamais en corps de texte, titre
uniquement (2-4 mots max).
Tonalité : cérémoniel, ornemental, solennel.
Palettes recommandées : Nuit & Grenat, Pourpre Impérial & Or
Penser à ce pairing quand : flyer événementiel/église/cérémonie officielle qui veut un titre
gravé/orné plutôt qu'un display bold générique.

### Nouvelle entrée typo — Grotesque Institutionnel Libre
Display : Plus Jakarta Sans — 600-800
Body : Plus Jakarta Sans — 400-500
Caractère : géométrique humaniste, une seule famille du display au body — variante libre/gratuite
d'un grotesque institutionnel. Conçue par Gumitra Rahayu (Tokotype) pour l'identité de la ville de
Jakarta (2020) — origine institutionnelle réelle, pas un nom marketing vide.
Tonalité : moderne, propre, légèrement chaleureux pour un géométrique (coins doux).
Source      : Google Fonts, SIL Open Font License — libre, usage commercial autorisé, VÉRIFIÉ.
Palettes recommandées : Craie & Cobalt, Coquille & Pétrole
Penser à ce pairing quand : SaaS/institutionnel qui veut un grotesque géométrique propre sans
payer de licence, alternative crédible à Inter/Sora quand il faut un peu plus de personnalité
géométrique sans sortir du gratuit.

---

## 5. COMPOSITION D'UN PAIRING SUR-MESURE (si la bibliothèque ne convient pas)

```
Si le sujet réel du projet (Agents_Direction_Artistique.md Section 2) a une identité typographique
propre à trouver — pas seulement une couleur — composer un pairing original plutôt que de forcer
une entrée existante.

Méthode :
1. Choisir UN display qui porte une vraie personnalité, cohérente avec la signature du projet
   (Agents_Direction_Artistique.md Section 5, Passe 1 — SIGNATURE)
2. Choisir un body complémentaire — jamais la même famille par réflexe, sauf choix minimaliste
   assumé (voir 4.6 comme exemple de ce choix volontaire)
3. Vérifier contre Agents_Direction_Artistique.md Section 3bis — jamais Inter/système par défaut
   sans avoir consciemment écarté d'autres options
4. Ajouter le nouveau pairing à la bibliothèque (Section 4) une fois validé
```

---

## 6. LIEN AVEC LES AUTRES FICHIERS

```
Agents_Direction_Artistique.md Section 5, Passe 1 (TYPO) → piocher ici en premier, sinon composer
sur-mesure (Section 5 de ce fichier).

Agents_Bibliotheque_Palettes.md → chaque pairing recommande des palettes précises de la même
tonalité (Section 4). Une palette peut aussi suggérer un pairing d'ici — croisement dans les deux
sens, jamais une combinaison imposée sans confrontation au sujet réel.

Agents_Design_Reference.md Section 4 (typographie d'une réf analysée) → une réf donne un PRINCIPE
de pairing (contraste, graisse, ambiance), jamais le nom de police exact à copier systématiquement
— cette bibliothèque-ci donne des polices réelles prêtes à l'emploi, toujours à confronter au sujet.

Agents_Standards_Interface_Web.md Section 4 (Contenu) → chiffres tabulaires, guillemets
typographiques, ellipse réelle : ces règles s'appliquent quel que soit le pairing choisi ici.
```

---

## 7. CHECKLIST AVANT D'ASSIGNER UN PAIRING À UN PROJET

```
□ Pairing candidat pas déjà utilisé sur un projet récent (à l'appréciation du contexte disponible)
□ Si répétition : exception cohérence de marque explicitement validée par le client
□ Pairing confronté au sujet réel du brief — pas choisi au hasard dans la liste
□ Vérifié contre Agents_Direction_Artistique.md Section 3bis — pas de défaut Tailwind/système non réfléchi
□ Palette(s) recommandée(s) cohérente(s) avec le choix fait dans Agents_Bibliotheque_Palettes.md
□ Si aucune entrée ne convient : pairing sur-mesure composé (Section 5) plutôt que forcé
□ Toutes les polices citées vérifiées comme réellement disponibles (Google Fonts ou équivalent)
```
