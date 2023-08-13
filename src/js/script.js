const afficherResultat = (score, nombreMotsProposes) => {
	// Récupération de la zone dans laquelle on va écrire le score
	let spanScore = document.querySelector('.zoneScore span');
	// Ecriture du text :
	let affichageScore = `${score} / ${nombreMotsProposes}`;
	// On place le texte à l'intérieur du span :
	spanScore.innerText = affichageScore;
};

const afficherProposition = (proposition) => {
	let zoneProposition = document.querySelector('.zoneProposition');
	zoneProposition.innerText = proposition;
};

const lancerJeu = () => {
	// déclaration des variables 'score' et 'nombreMotsProposes initialisées à 0 :
	let score = 0;
	let i = 0; // i est le compteur de mots proposés.

	let btnValiderMot = document.getElementById('btnValiderMot');
	let inputEcriture = document.getElementById('inputEcriture');

	afficherProposition(listeMots[i]); // premier appel de la fonction pour afficher la 1ere proposition.

	// au click, récupère le mot tapé par l'utilisateur :
	btnValiderMot.addEventListener('click', () => {
		console.log(inputEcriture.value);
		if (inputEcriture.value === listeMots[i]) {
			score++;
		}
		i++; // passe au mot suivant.
		afficherResultat(score, i);

		inputEcriture.value = ''; // permet de vider le champs à chaque fois que l'on vzlide.

		if (listeMots[i] === undefined) {
			afficherProposition('Le jeu est fini');
			btnValiderMot.disabled = true; // désactive le bouton "valider".
		} else {
			afficherProposition(listeMots[i]); // affiche le mot suivant à chaque click.
		}
	});
};
