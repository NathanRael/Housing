<?php
    require_once "./connectionAuBD.php";
    include_once "./header.php";
    $db=ConnectionToDB("gestion_logement");
    $libAgt=strip_tags($_POST["libAgt"]);
    $mdp= strip_tags($_POST["pwd"]);
    $query=$db->query("SELECT mdp,code_agt FROM agence WHERE lib_agt='$libAgt'");
    $agt=$query->fetch();
    if (!password_verify($mdp,$agt["mdp"]) || empty($agt)){
        $msg="Verifiez votre mot de passe";
        $id=0;
        http_response_code(404);
        
    }
    else{
        $id=$agt["code_agt"];
        $msg="succes";
    }
    include_once "./A_envoiData.php";
    //fermer la base de donnée
    die;