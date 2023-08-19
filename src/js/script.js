const afficherResultat = (score, nombreMotsProposes) => {
	// Récupération de la zone dans laquelle on va écrire le score
	let spanScore = document.querySelector('.zoneScore span');
	// Ecriture du text :
	let affichageScore = `${score} / ${nombreMotsProposes}`;
	// On place le texte à l'intérieur du span :
	spanScore.innerText = affichageScore;
};

/* fonction pour afficher le mot ou phrase à écrire : */
const afficherProposition = (proposition) => {
	let zoneProposition = document.querySelector('.zoneProposition');
	zoneProposition.innerText = proposition;
};

/* fonction pour afficher l'email : */
const afficherEmail = (nom, email, score) => {
	let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
	location.href = mailto;
};

/* regexp */
const validerNom = (nom) => {
	if (nom.length < 2) {
		throw new Error('Le nom est trop court');
	}
};

const validerEmail = (email) => {
	let emailRegExp = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
	if (!emailRegExp.test(email)) {
		throw new Error("L'email n'est pas valide");
	}
};

/**
 * Cette fonction affiche le message d'erreur passé en paramètre.
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs.
 *
 */
const afficherMessageErreur = (message) => {
	let spanErreurMessage = document.getElementById('erreurMessage');

	if (!spanErreurMessage) { // si spanErreurMessage n'existe pas
		let popup = document.querySelector('.popup');
		spanErreurMessage = document.createElement('span');
		spanErreurMessage.id = 'erreurMessage'; // donne un id

		popup.append(spanErreurMessage);
	}

	spanErreurMessage.innerText = message;
};

/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 *
 */
const gererFormulaire = (scoreEmail) => {
	// "try" pour essayer d'éxécuter le code." catch" en cas d'erreur :
	try {
		let baliseNom = document.getElementById('nom');
		let nom = baliseNom.value;
		validerNom(nom);

		let baliseEmail = document.getElementById('email');
		let email = baliseEmail.value;
		validerEmail(email);

		afficherMessageErreur(''); // tout est ok, pas de message d'erreur
		afficherEmail(nom, email, scoreEmail);
	} catch (erreur) { // erreur de throw
		// gérer l'erreur
		afficherMessageErreur(erreur.message);
	}
};

/*
 ****************************************
 *
 * fonction principale pour lancer le jeu
 *
 ****************************************
 */
const lancerJeu = () => {
	initAddEventListenerPopup();
	// déclaration des variables 'score' et 'nombreMotsProposes initialisées à 0 :
	let score = 0;
	let i = 0; // i est le compteur de mots proposés.
	let listeProposition = listeMots; // initialisée par défaut sur "listeMots".

	let btnValiderMot = document.getElementById('btnValiderMot');
	let inputEcriture = document.getElementById('inputEcriture');

	afficherProposition(listeProposition[i]); // premier appel de la fonction pour afficher la 1ere proposition.

	// au click, récupère le mot tapé par l'utilisateur :
	btnValiderMot.addEventListener('click', () => {
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

	for (let index = 0; index < listeBtnRadio.length; index++) {
		listeBtnRadio[index].addEventListener('change', (event) => {
			if (event.target.value === '1') {
				listeProposition = listeMots;
			} else {
				listeProposition = listePhrases;
			}

			// Modifie l'affichage :
			afficherProposition(listeProposition[i]);
		});
	}

	/* gestion de l'évènement "submit" du formulaire de partage */

	let form = document.querySelector('form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		let scoreEmail = `${score} / ${i}`;
		gererFormulaire(scoreEmail);
	});

	afficherResultat(score, i);
};
