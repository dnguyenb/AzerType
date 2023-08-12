// fonctions :
function afficherResultat(score, nombreMotsProposes) {
	// Récupération de la zone dans laquelle on va écrire le score
	let spanScore = document.querySelector('.zoneScore span');
	// Ecriture du texte
	let affichageScore = `${score} / ${nombreMotsProposes}`;
	// On place le texte à l'intérieur du span.
	spanScore.innerText = affichageScore;
}

function choisirPhrasesOuMots() {
	// déclaration de la variable choix de jeu de l'utilisateur :
	let choix = prompt(
		"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
	);
	// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix :
	while (choix !== 'mots' && choix !== 'phrases') {
		choix = prompt(
			"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
		);
	}
	return choix;
}

function lancerBoucleDeJeu(listePropositions) {
	let score = 0;
	// boucle sur les tableaux en fonction du choix utilisateur :
	for (let i = 0; i < listePropositions.length; i++) {
		let motUtilisateur = prompt(`Entrez le mot : ${listePropositions[i]}`);
		if (motUtilisateur === listePropositions[i]) {
			score++;
		}
	}

	return score;
}

function lancerJeu() {
	// on demande d'abord à l'utilisateur de choisir avec quelle liste il veut jouer :
	let choix = choisirPhrasesOuMots();
	// déclaration des variables 'score' et 'nombreMotsProposes initialisées à 0 :
	let score = 0;
	let nombreMotsProposes = 0;

	if (choix === 'mots') {
		//la variable 'score' prend la valeur retournée par la fonction "lancerBoucleDeJeu" :
		score = lancerBoucleDeJeu(listeMots);
		nombreMotsProposes = listeMots.length;
	} else {
		score = lancerBoucleDeJeu(listePhrases);
		nombreMotsProposes = listePhrases.length;
	}

	afficherResultat(score, nombreMotsProposes);
}
