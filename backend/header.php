<?php
// Allow from any origin
function cors($param=true){
    $method=$_SERVER["REQUEST_METHOD"];
    if ($param){
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }
        
        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        
            exit(0);
        }
    }
    else{
        header("Acces-Control-Allow-Origin: http://localhost:5173");
        header("Acces-Control-Allow-Headers: X-Requested-Width, Origin, Content-type, X-CSRF-Token, Accept, Acces-Control-Allow-Headers");
        header("Acces-Control-Allow-Methods: GET, POST, DELETE, PATCH, PUT, OPTIONS");
        header("Acces-Control-Allow-Credentials: true");
        // echo json_encode($_SERVER["HTTP_HOST"]);
    }
    
}
cors(true);
$method=$_SERVER["REQUEST_METHOD"];
    // header("Acces-Control-Allow-Origin: http://localhost:5173");
    // header("Acces-Control-Allow-Headers: X-Requested-Width, Origin, Content-type, X-CSRF-Token, Accept, Acces-Control-Allow-Headers");
    // header("Acces-Control-Allow-Methods: GET, POST, DELETE, PATCH, PUT, OPTIONS");
    // header("Acces-Control-Allow-Credentials: true");
    // $method=$_SERVER["REQUEST_METHOD"];
    // echo json_encode($_SERVER["HTTP_HOST"]);
    // die;
    /*switch ($method) {
        case 'GET':
            echo "Hello world ";
            break;
        
        case "POST":
            echo "Enregistrement effectué".$_POST["name"];
            break;
        case "DELETE":
            echo "Suppression effectué".$_GET["id"];
            break;
        case "PUT":
            $tab=json_decode(file_get_contents("php://input"),true);
            echo print_r($tab)." id=".$_GET["id"];
            die;
            echo "Enregistrement effectué".$_POST["name"];
            break;
    }*/

