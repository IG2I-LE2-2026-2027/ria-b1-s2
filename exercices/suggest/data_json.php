<?php
sleep(2); // attendre 2s

// TAF: envoyer une structure JSON et pas du HTML
// afin de créer une vrai indépendance entre le client et le serveur

$data = array(
    "suggestions" => array(),
    "debutNom" => false
);

if (isset($_GET["debutNom"])) {
    $data['debutNom'] = $_GET["debutNom"];
    $tabLignes = file("LE2_2026_2027.csv");

    foreach ($tabLignes as $ligne) {
        // EXO1 : effectuer une recherche sur nom ou prénom 
        if (
            preg_match("/^(" . $data['debutNom'] . ".*):(.*):(.*)$/i", $ligne, $tabResultats)
            ||
            preg_match("/^(.*):(" . $data['debutNom'] . ".*):(.*)$/i", $ligne, $tabResultats)
        ) {
            // EXO2 afficher nom ET prénom 
            // Dans $tabResultats[0], on a tout le résultat c'est à dire le Prenom et me ?Nom
            // Dans $tabResultats[1], on a le prénom 
            // $tabResultats[2], on a le nom

            $data['suggestions'][] = array(
                "prenom" => $tabResultats[1],
                "nom" => $tabResultats[2],
                "id" => $tabResultats[3]
            );
        }
    }
}
echo json_encode($data);

?>