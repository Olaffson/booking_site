# Sérénité Massage — site vitrine avec réservation en ligne

Site vitrine pour une activité de massage bien-être, avec prise de rendez-vous en ligne.

- **Site** : HTML et CSS, sans framework ni étape de compilation
- **Hébergement** : GitHub Pages (gratuit)
- **Réservation** : [Cal.com](https://cal.com) intégré dans la page `reservation.html` (gratuit)
- **Agenda** : Google Agenda, synchronisé avec Cal.com
- **Paiement** : sur place, pas de paiement en ligne

> Tous les textes, coordonnées, tarifs et avis sont **fictifs** : remplacez-les avant la mise en ligne.

## Structure

```
.
├── index.html              Accueil : présentation, prestations, témoignages, infos pratiques
├── reservation.html        Calendrier de réservation Cal.com
├── contact.html            Coordonnées, accès, horaires
├── mentions-legales.html   Mentions légales et données personnelles (RGPD)
├── 404.html                Page d'erreur (utilisée automatiquement par GitHub Pages)
├── css/style.css           Styles (les couleurs sont dans les variables de :root)
├── js/config.js            ⚙️ Identifiant Cal.com et liste des prestations
├── js/booking.js           Intégration du calendrier Cal.com
├── js/main.js              Menu mobile
└── img/                    Favicon, photo de fond de l'accueil (hero.jpg)
```

## Mise en place de la réservation

### 1. Créer le compte Cal.com et le relier à Google Agenda

1. Créez un compte gratuit sur [cal.com](https://cal.com), de préférence avec le même compte Google que votre agenda.
2. Dans **Settings → Calendars** (ou lors de l'inscription), connectez **Google Calendar**.
   - Cal.com bloque automatiquement les créneaux déjà occupés dans votre agenda.
   - Choisissez l'agenda dans lequel les nouveaux rendez-vous sont ajoutés (« Add to calendar »).
3. Dans **Availability**, définissez vos horaires d'ouverture, par exemple du lundi au vendredi de 9h à 19h et le samedi de 9h à 13h.
4. Dans **Settings → General**, réglez la langue sur **Français** et le fuseau horaire sur **Europe/Paris**.

### 2. Créer un type d'événement par prestation

Dans **Event Types**, créez un événement par prestation. Le **slug** (dernière partie de l'URL) doit correspondre à celui indiqué dans `js/config.js` :

| Prestation             | Durée  | Slug               |
|------------------------|--------|--------------------|
| Massage relaxant       | 60 min | `massage-relaxant` |
| Massage sportif        | 60 min | `massage-sportif`  |
| Pierres chaudes        | 75 min | `pierres-chaudes`  |
| Réflexologie plantaire | 45 min | `reflexologie`     |

Réglages conseillés pour chaque événement, dans l'onglet *Limits* :
- **Temps tampon** après l'événement (*After event*) : 15 min, pour changer le linge et aérer la pièce.
- **Délai minimum de réservation** (*Minimum notice*) : par exemple 12 h.
- Dans *Advanced*, ajoutez une question **Téléphone** pour pouvoir joindre la personne.

### 3. Renseigner l'identifiant dans le site

Ouvrez `js/config.js` et remplacez `VOTRE-IDENTIFIANT` par votre identifiant Cal.com. Si votre page publique est `https://cal.com/lucas-moreau`, l'identifiant est `lucas-moreau`.

```js
CAL_USERNAME: "lucas-moreau",
```

Si vous changez un slug dans Cal.com, mettez-le aussi à jour dans `PRESTATIONS`.

Les boutons « Réserver » des cartes de prestation ouvrent directement le bon type de rendez-vous (`reservation.html?prestation=relaxant`, etc.). Sans paramètre, la page affiche toutes les prestations.

## Mise en ligne sur GitHub Pages

1. Fusionnez le travail sur la branche `main`.
2. Sur GitHub, ouvrez **Settings → Pages**.
3. Dans **Source**, choisissez **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`, et cliquez sur **Save**.
4. Après une à deux minutes, le site est en ligne à l'adresse `https://olaffson.github.io/booking_site/`.

Chaque modification poussée sur `main` met le site à jour automatiquement.

**Nom de domaine personnalisé (facultatif)** : dans **Settings → Pages → Custom domain**, saisissez votre domaine (par exemple `serenite-massage.fr`), puis créez chez votre registrar les enregistrements DNS indiqués par GitHub. Cochez ensuite **Enforce HTTPS**.

## Tester en local

Aucune installation n'est nécessaire. Ouvrez `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Personnalisation

- **Couleurs et polices** : variables CSS en haut de `css/style.css` (`--color-primary`, etc.).
- **Photo de fond de l'accueil** : remplacez `img/hero.jpg` par votre photo, en gardant le même nom. Utilisez une image en paysage d'environ 1920 × 1080 px et de moins de 400 Ko (compressez-la avec [squoosh.app](https://squoosh.app) par exemple). L'image fournie n'est qu'une ambiance floue provisoire. Un voile sombre est appliqué par-dessus pour que le texte reste lisible ; son intensité se règle dans `.hero-photo` de `css/style.css`. Pour trouver des photos gratuites et libres de droits : [Unsplash](https://unsplash.com/fr/s/photos/massage) ou [Pexels](https://www.pexels.com/fr-fr/chercher/massage/).
- **Photo du praticien** : ajoutez-la dans `img/`, puis remplacez le bloc `.about-photo` de `index.html` par une balise `<img>`.
- **Réseaux sociaux** : les liens Facebook, Instagram et LinkedIn sont dans le pied de page de chaque page et sur la page Contact. Remplacez `VOTRE-PAGE`, `VOTRE-COMPTE` et `VOTRE-PROFIL` par vos vraies adresses, dans tous les fichiers HTML. Pour supprimer un réseau, retirez la ligne `<li>` correspondante.
- **Cache du navigateur** : après une modification de `css/style.css` ou d'un fichier `js/`, augmentez le numéro de version dans les liens de toutes les pages HTML (par exemple `style.css?v=2` → `style.css?v=3`). Sinon, les visiteurs peuvent garder l'ancienne version en cache et voir une page mal affichée.
- **En-tête et pied de page** : ils sont recopiés dans chaque page HTML. Pensez à modifier toutes les pages.

## À compléter avant la mise en ligne

- [ ] Nom, adresse, téléphone, e-mail (toutes les pages)
- [ ] Textes de présentation et des prestations, tarifs, horaires
- [ ] Vrais témoignages, ou suppression de la section
- [ ] Mentions légales : SIRET, nom de l'éditeur
- [ ] Identifiant Cal.com dans `js/config.js`
- [ ] Photo de fond (`img/hero.jpg`) et photo du praticien
- [ ] Liens Facebook, Instagram et LinkedIn

> ℹ️ En France, le terme « massage » est réservé aux kinésithérapeutes lorsqu'il a une visée thérapeutique. Le site présente donc des massages **de bien-être, sans visée thérapeutique ou médicale** (mention présente dans le pied de page et les mentions légales).
