// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur :
const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = [
	'Pas de panique !',
	'La vie, l’univers et le reste',
	'Merci pour le poisson',
];

// déclaration de la variable 'score' initialisée à 0 :
let score = 0;

// déclaration de la variable choix de jeu de l'utilisateur :
let choixUtilisateur = prompt(
	"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
);

// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix :
while (choixUtilisateur !== 'mots' && choixUtilisateur !== 'phrases') {
	choixUtilisateur = prompt(
		"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
	);
}

// boucle sur les tableaux en fonction du choix utilisateur :
if (choixUtilisateur === 'mots') {
	for (let i = 0; i < listeMots.length; i++) {
		let motUtilisateur = prompt(`Entrez le mot : ${listeMots[i]}`);
		if (motUtilisateur === listeMots[i]) {
			score++;
		}
	}
	alert(`Ton score est de ${score}/${listeMots.length}`);
} else {
	for (let i = 0; i < listePhrases.length; i++) {
		let motUtilisateur = prompt(`Entrez la phrase : ${listePhrases[i]}`);
		if (motUtilisateur === listePhrases[i]) {
			score++;
		}
	}
	alert(`Ton score est de ${score}/${listePhrases.length}`);
}
