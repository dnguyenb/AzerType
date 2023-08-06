const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
let score = 0;

let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0]);
if (motUtilisateur === listeMots[0]) {
	alert('Bravo connard !');
	score++;
} else {
	alert('Va falloir retourner en cm1 !');
}

motUtilisateur = prompt('Entrez le mot : ' + listeMots[1]);
if (motUtilisateur === listeMots[1]) {
	alert('Bravo connard !');
	score++;
} else {
	alert("T'as fait l'école des golmons ?");
}

motUtilisateur = prompt('Entrez le mot : ' + listeMots[2]);
if (motUtilisateur === listeMots[2]) {
	alert('Bravo connard !');
	score++;
} else {
	alert('Pfff irrécupérable... !');
}
alert('Ton score est de ' + score);
