<?php
sleep(2); // attendre 2s

if (isset($_GET["debutNom"])) {
	$cherche = $_GET["debutNom"];

	// On va ouvrir un fichier et afficher les lignes 
	// où le prénom ou le nom contient ce texte

	$tabLignes = file("LE2_2026_2027.csv");
	foreach ($tabLignes as $ligne) {
		// EXO1 : effectuer une recherche sur nom ou prénom 
		if (
			preg_match("/^(" . $cherche . ".*):(.*):(.*)$/i", $ligne, $tabResultats)
			||
			preg_match("/^(.*):(" . $cherche . ".*):(.*)$/i", $ligne, $tabResultats)
		) {
			// EXO2 afficher nom ET prénom 
			// Dans $tabResultats[0], on a tout le résultat c'est à dire le Prenom et me ?Nom
			// Dans $tabResultats[1], on a le prénom 
			// $tabResultats[2], on a le nom
			echo "<li>" . $tabResultats[1] . " " . $tabResultats[2] . "</li>";
		}
	}

	die("");
}

?>