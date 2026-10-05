/*
 * Configuration de la réservation Cal.com
 * ----------------------------------------
 * 1. Remplacez CAL_USERNAME par votre identifiant Cal.com
 *    (la partie après « cal.com/ » dans l'adresse de votre page publique).
 * 2. Pour chaque prestation, indiquez le « slug » du type d'événement
 *    créé dans Cal.com (la partie après « cal.com/votre-identifiant/ »).
 *
 * Tant que CAL_USERNAME vaut "VOTRE-IDENTIFIANT", la page de réservation
 * affiche un message d'aide au lieu du calendrier.
 */
window.BOOKING_CONFIG = {
  CAL_USERNAME: "nicolas-akobcg",

  // Clé utilisée dans les liens « reservation.html?prestation=... »
  // → slug du type d'événement Cal.com correspondant.
  PRESTATIONS: {
    relaxant: { label: "Massage relaxant", slug: "massage-relaxant" },
    sportif: { label: "Massage sportif", slug: "massage-sportif" },
    "pierres-chaudes": { label: "Pierres chaudes", slug: "pierres-chaudes" },
    reflexologie: { label: "Réflexologie plantaire", slug: "reflexologie" }
  }
};
