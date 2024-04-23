<?php
    //constantes d'environnement
    //on met le nom du db obligatoirement
    function ConnectionToDB($dbname,$localhost="localhost",$user="root",$password=""){
        define("DBHOST",$localhost);
        define("DBUSER",$user);
        define("DBPASS",$password);
        define("DBNAME",$dbname);
        //DSN de connexion
        $dsn="mysql:dbname=".DBNAME.";host=".DBHOST;
        try{
            $db=new PDO($dsn,DBUSER,DBPASS);
            $db->exec("SET NAMES utf8");
            $db->setAttribute(PDO:: ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
            return $db;
        }
        catch (PDOException $e){
            die("Erreur:".$e->getMessage());
        }
    
    }
?>