<?php
    require_once "./connectionAuBD.php";
    include_once "./header.php";
    $db=ConnectionToDB("gestion_logement");
    $query=$db->query("SELECT COUNT(num_lgt) as nbrLogement FROM logement");
    $query->execute();
    $nbrLogement=$query->fetch();
    $query=$db->query("SELECT COUNT(code_agt) as nbrAgt FROM agence");
    $query->execute();
    $nbrAgt=$query->fetch();
    $query=$db->query("SELECT COUNT(code_cli) as nbrCli FROM client");
    $query->execute();
    $nbrCli=$query->fetch();
    $data["data"]=[
        $nbrLogement,
        $nbrAgt,
        $nbrCli
    ];
    echo json_encode($data);
    