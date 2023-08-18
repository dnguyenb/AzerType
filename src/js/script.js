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
	let listeProposition = listeMots; // initialisée par défaut sur "listeMots".

	let btnValiderMot = document.getElementById('btnValiderMot');
	let inputEcriture = document.getElementById('inputEcriture');

	afficherProposition(listeProposition[i]); // premier appel de la fonction pour afficher la 1ere proposition.

	// au click, récupère le mot tapé par l'utilisateur :
	btnValiderMot.addEventListener('click', () => {
		console.log(inputEcriture.value);
		if (inputEcriture.value === listeProposition[i]) {
			score++;
		}
		i++; // passe au mot suivant.
		afficherResultat(score, i);

		inputEcriture.value = ''; // permet de vider le champs à chaque fois que l'on vzlide.

		if (listeProposition[i] === undefined) {
			afficherProposition('Le jeu est fini');
			btnValiderMot.disabled = true; // désactive le bouton "valider".
		} else {
			afficherProposition(listeProposition[i]); // affiche le mot suivant à chaque click.
		}
	});

	// Gestion de l'évènement 'change' sur les boutons radio :
	let listeBtnRadio = document.querySelectorAll('input[name="optionSource"]');

	for (let i = 0; i < listeBtnRadio.length; i++) {
		listeBtnRadio[i].addEventListener('change', () => {
			if (listeBtnRadio[i].value === '1') {
				listeProposition = listeMots;
			} else {
				listeProposition = listePhrases;
			}
			// Modifie l'affichage :
			afficherProposition(listeProposition[i]);
		});
	}
	afficherResultat(score, i);
};
