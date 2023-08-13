// fonctions :
const afficherResultat = (score, nombreMotsProposes) => {
	// Récupération de la zone dans laquelle on va écrire le score
	let spanScore = document.querySelector('.zoneScore span');
	// Ecriture du texte
	let affichageScore = `${score} / ${nombreMotsProposes}`;
	// On place le texte à l'intérieur du span.
	spanScore.innerText = affichageScore;
};

const afficherProposition = (proposition) => {
	let zoneProposition = document.querySelector('.zoneProposition');
	zoneProposition.innerText = proposition;
};

const lancerJeu = () => {
	// déclaration des variables 'score' et 'nombreMotsProposes initialisées à 0 :
	let score = 0;
	let i = 0;

	let btnValiderMot = document.getElementById('btnValiderMot');
	let inputEcriture = document.getElementById('inputEcriture');

	afficherProposition(listeMots[i]);

	// au click, récupère le mot tapé par l'utilisateur :
	btnValiderMot.addEventListener('click', () => {
		console.log(inputEcriture.value);
		if (inputEcriture.value === listeMots[i]) {
			score++;
		}
		i++;
		afficherResultat(score, i);
		inputEcriture.value = '';
		if (listeMots[i] === undefined) {
			afficherProposition('Le jeu est fini');
			btnValiderMot.disabled = true;
		} else {
			afficherProposition(listeMots[i]);
		}
	});
};
