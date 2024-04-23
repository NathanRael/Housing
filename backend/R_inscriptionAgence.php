<?php
    require_once "./connectionAuBD.php";
    include_once "./header.php";
    $db=ConnectionToDB("gestion_logement");
    switch ($method){
        case "POST":
            $libAgt=strip_tags($_POST["libAgt"]);
            $codePostal=strip_tags($_POST["codePro"]);
            switch ($codePostal) {
                case "antananarivo":
                    $codePro=101;
                    break;
                case "antsiranana":
                    $codePro=201;
                    break;
                case "fianarantsoa":
                    $codePro=301;
                    break;
                case "mahajanga":
                    $codePro=401;
                    break;
                case "toamasina":
                    $codePro=501;
                    break;
                case "toliara":
                    $codePro=601;
                    break;
            }
            $mdp= password_hash(strip_tags($_POST["pwd"]),PASSWORD_ARGON2ID);
            $query=$db->prepare("INSERT INTO agence(lib_agt,code_pro,mdp) VALUES (:libAgt,:codePro,:mdp)");
            $query->bindValue(":libAgt",$libAgt,PDO::PARAM_STR);
            $query->bindValue(":codePro",$codePro,PDO::PARAM_STR);
            $query->bindValue(":mdp",$mdp,PDO::PARAM_STR);
            if (!$query->execute()){
                http_response_code(404);
                echo json_encode([
                    "message"=>"Impossible d'executer l'inscription"
                ]);
                die;
            }
            $id=$db->lastInsertId();
            $msg="succes";
            include_once "./A_envoiData.php";
            die;
        break;
        case "GET":
            $query=$db->query("SELECT lib_pro as province FROM provinces");
            $province=$query->fetchAll();
            $data["data"]=[
                $province
            ];
            die;
        break;
    }
    
    //fermer la base de donnée
    die;
