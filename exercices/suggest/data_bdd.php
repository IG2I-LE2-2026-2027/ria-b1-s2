<?php

include("libs/maLibSQL.pdo.php");
include("libs/maLibUtils.php");

$data = array("suggestions" => array(), "debutNom" => valider("debutNom"));

if ($cherche = valider("debutNom")) {
    $sql = "SELECT * FROM etudiants WHERE nom LIKE '$cherche%' OR prenom LIKE '$cherche%' ";
    $data["suggestions"] = parcoursRs(SQLSelect($sql));
}
echo json_encode($data);